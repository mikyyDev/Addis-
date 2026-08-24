import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

import User from "../models/user.js";
import Song from "../models/song.js";
import Artist from "../models/artist.js";
import Album from "../models/album.js";
import Genre from "../models/genre.js";
import Playlist from "../models/playlist.js";
import HttpError from "../utils/HttpError.js";
import { dbQuery } from "../middleware/error.middleware.js";
import { AVATAR_DIR } from "../middleware/upload.middleware.js";

export const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");

  res.json(user);
};

export const updateProfile = dbQuery(async (req, res) => {
  const { username, email, avatar } = req.body;
  const userId = req.user.id;

  const updates = {};

  if (username !== undefined) {
    updates.username = username.trim();
  }

  if (avatar !== undefined) {
    updates.avatar = avatar?.trim() || null;
  }

  if (email !== undefined) {
    const normalizedEmail = email.trim().toLowerCase();

    const existing = await User.findOne({
      email: normalizedEmail,
      _id: { $ne: userId },
    });

    if (existing) {
      throw new HttpError({ status: 409, message: "Email already in use" });
    }

    updates.email = normalizedEmail;
  }

  const user = await User.findByIdAndUpdate(userId, updates, {
    new: true,
    runValidators: true,
  }).select("-password");

  if (!user) {
    throw new HttpError({ status: 404, message: "User not found" });
  }

  res.json({
    success: true,
    message: "Profile updated successfully",
    user,
  });
});

export const uploadAvatar = dbQuery(async (req, res) => {
  if (!req.file) {
    throw new HttpError({ status: 400, message: "No image uploaded" });
  }

  const user = await User.findById(req.user.id);
  if (!user) {
    throw new HttpError({ status: 404, message: "User not found" });
  }

  // Remove the previously uploaded avatar file (if any) to avoid clutter.
  const oldAvatar = user.avatar;
  if (oldAvatar) {
    const match = oldAvatar.match(/\/uploads\/avatars\/([^/?]+)$/);
    if (match) {
      fs.unlink(path.join(AVATAR_DIR, match[1]), () => {});
    }
  }

  const avatarUrl = `${req.protocol}://${req.get("host")}/uploads/avatars/${req.file.filename}`;

  const updated = await User.findByIdAndUpdate(
    req.user.id,
    { avatar: avatarUrl },
    { new: true, runValidators: true },
  ).select("-password");

  res.json({
    success: true,
    message: "Avatar updated successfully",
    user: updated,
  });
});

export const changePassword = dbQuery(async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  const user = await User.findById(req.user.id);
  if (!user) {
    throw new HttpError({ status: 404, message: "User not found" });
  }

  // OAuth accounts have no local password to verify against.
  if (user.provider !== "local" || !user.password) {
    throw new HttpError({
      status: 400,
      message: "Password change is not available for this account",
    });
  }

  const valid = await bcrypt.compare(currentPassword, user.password);
  if (!valid) {
    throw new HttpError({ status: 400, message: "Current password is incorrect" });
  }

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();

  res.json({
    success: true,
    message: "Password changed successfully",
  });
});

export const deleteAccount = dbQuery(async (req, res) => {
  const userId = req.user.id;

  const user = await User.findById(userId);
  if (!user) {
    throw new HttpError({ status: 404, message: "User not found" });
  }

  // Remove everything owned by the user.
  await Promise.all([
    Song.deleteMany({ userId }),
    Artist.deleteMany({ userId }),
    Album.deleteMany({ userId }),
    Genre.deleteMany({ userId }),
    Playlist.deleteMany({ userId }),
    User.findByIdAndDelete(userId),
  ]);

  res.json({
    success: true,
    message: "Account deleted successfully",
  });
});
