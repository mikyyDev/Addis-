import jwt from "jsonwebtoken";

import User from "../models/user.js";
import HttpError from "../utils/HttpError.js";
import { dbQuery } from "../middleware/error.middleware.js";
import { env } from "../config/env.config.js";
import getFirebaseAdminAuth from "../config/firebase-admin.config.js";

const allowedProviders = new Set(["google", "github"]);

export const firebaseLogin = dbQuery(async (req, res) => {
  const { token, provider } = req.body;

  if (!token || !allowedProviders.has(provider)) {
    throw new HttpError({
      status: 400,
      message: "A valid Firebase token and provider are required",
    });
  }

  let decodedToken;
  try {
    const adminAuth = getFirebaseAdminAuth();
    decodedToken = await adminAuth.verifyIdToken(token);
  } catch (err) {
    console.error("Firebase token verification failed:", {
      message: err.message,
      code: err.code,
      stack: err.stack,
    });

    // Distinguish between Admin SDK init failure vs token verification failure
    if (
      err.message?.includes("not configured") ||
      err.message?.includes("credential") ||
      err.message?.includes("invalid_grant") ||
      err.message?.includes("private key")
    ) {
      throw new HttpError({
        status: 500,
        message:
          "Firebase Admin SDK is not configured correctly on the server. Check FIREBASE_PRIVATE_KEY.",
      });
    }

    throw new HttpError({
      status: 401,
      message: "Invalid Firebase authentication token",
    });
  }

  const verifiedProvider =
    decodedToken.firebase?.sign_in_provider === "google.com"
      ? "google"
      : decodedToken.firebase?.sign_in_provider === "github.com"
        ? "github"
        : null;

  if (verifiedProvider !== provider) {
    throw new HttpError({
      status: 400,
      message: "Firebase provider does not match the requested provider",
    });
  }

  const email = decodedToken.email?.toLowerCase();
  if (!email) {
    throw new HttpError({
      status: 400,
      message: "Firebase account does not have an email address",
    });
  }

  const username = decodedToken.name || email.split("@")[0];

  // First try to find an existing user linked to this Firebase UID
  let user = await User.findOne({ providerId: decodedToken.uid });

  if (!user) {
    // Then try to find by email (e.g. user registered locally with the same email)
    const emailPattern = new RegExp(
      `^${email.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`,
      "i",
    );
    user = await User.findOne({ email: emailPattern });
  }

  try {
    if (user) {
      // Existing user found — link Firebase credentials but keep their
      // current username to avoid unique-constraint conflicts.
      user.provider = verifiedProvider;
      user.providerId = decodedToken.uid;

      if (decodedToken.picture) {
        user.avatar = decodedToken.picture;
      }

      await user.save();
    } else {
      // No existing user — create a brand-new account.
      // Ensure the username is unique by appending a suffix if needed.
      let uniqueUsername = username;
      let suffix = 0;
      while (await User.findOne({ username: uniqueUsername })) {
        suffix += 1;
        uniqueUsername = `${username}${suffix}`;
      }

      user = await User.create({
        email,
        username: uniqueUsername,
        provider: verifiedProvider,
        providerId: decodedToken.uid,
        avatar: decodedToken.picture || null,
        password: null,
      });
    }
  } catch (error) {
    // If the save/create failed due to a duplicate key (e.g. another user
    // already owns this providerId), retry by merging into that user.
    if (error.code === 11000 && error.keyPattern?.providerId) {
      const existingUser = await User.findOne({ providerId: decodedToken.uid });
      if (existingUser && String(existingUser._id) !== String(user?._id)) {
        existingUser.avatar = decodedToken.picture || existingUser.avatar;
        await existingUser.save();
        user = existingUser;
      } else {
        console.error("Failed to link Firebase account (duplicate providerId):", error);
        throw new HttpError({
          status: 409,
          message: "This Google account is already linked to another user.",
        });
      }
    } else if (error.code === 11000 && error.keyPattern?.username) {
      // Username collision on new user creation — retry with a suffix
      const fallbackUsername = `${username}${Date.now().toString(36)}`;
      user = await User.create({
        email,
        username: fallbackUsername,
        provider: verifiedProvider,
        providerId: decodedToken.uid,
        avatar: decodedToken.picture || null,
        password: null,
      });
    } else if (error.code === 11000 && error.keyPattern?.email) {
      console.error("Failed to create Firebase user (duplicate email):", error);
      throw new HttpError({
        status: 409,
        message: "An account with this email already exists. Please sign in with your existing account.",
      });
    } else {
      console.error("Failed to link Firebase account:", error);
      throw new HttpError({
        status: 500,
        message: "Unable to complete social sign-in. Please try again later.",
      });
    }
  }

  const appToken = jwt.sign({ id: user._id }, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });

  res.status(200).json({
    success: true,
    message: "Social sign-in successful",
    token: appToken,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      provider: user.provider,
    },
  });
});
