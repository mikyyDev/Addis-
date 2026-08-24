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
    decodedToken = await getFirebaseAdminAuth().verifyIdToken(token);
  } catch {
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
  const emailPattern = new RegExp(
    `^${email.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`,
    "i",
  );
  let user = await User.findOne({ email: emailPattern });

  try {
    if (user) {
      user.username = username;
      user.provider = verifiedProvider;
      user.providerId = decodedToken.uid;

      if (decodedToken.picture) {
        user.avatar = decodedToken.picture;
      }

      await user.save();
    } else {
      user = await User.create({
        email,
        username,
        provider: verifiedProvider,
        providerId: decodedToken.uid,
        avatar: decodedToken.picture || null,
        password: null,
      });
    }
  } catch (error) {
    console.error("Failed to link Firebase account:", error);
    throw new HttpError({
      status: 409,
      message: "This Google account could not be linked to the existing user.",
    });
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
