import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import HttpError from "../utils/HttpError.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const AVATAR_DIR = path.join(
  __dirname,
  "..",
  "..",
  "uploads",
  "avatars",
);

fs.mkdirSync(AVATAR_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, AVATAR_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase() || ".png";
    cb(null, `avatar-${req.user.id}-${Date.now()}${ext}`);
  },
});

const fileFilter = (_req, file, cb) => {
  const allowed = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowed.includes(ext) && file.mimetype.startsWith("image/")) {
    return cb(null, true);
  }

  cb(new HttpError({ status: 400, message: "Only image files are allowed" }));
};

export const uploadAvatarMiddleware = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
}).single("avatar");
