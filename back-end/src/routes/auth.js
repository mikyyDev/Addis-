import express from "express";

import loginController from "../controllers/login.controller.js";
import { registerController } from "../controllers/register.controller.js";
import { validateBody } from "../middleware/validateBody.middleware.js";
import {
  loginSchema,
  registerSchema,
  updateProfileSchema,
  changePasswordSchema,
} from "../validators/auth.validation.js";
import { authenticateUser } from "../middleware/auth.middleware.js";
import { uploadAvatarMiddleware } from "../middleware/upload.middleware.js";
import {
  getProfile,
  updateProfile,
  uploadAvatar,
  changePassword,
  deleteAccount,
} from "../controllers/profile.controller.js";
import { firebaseLogin } from "../controllers/oauth.controller.js";
import getFirebaseAdminAuth from "../config/firebase-admin.config.js";

const router = express.Router();
router.get("/profile", authenticateUser, getProfile);
router.put(
  "/profile",
  authenticateUser,
  validateBody(updateProfileSchema),
  updateProfile,
);
router.put(
  "/password",
  authenticateUser,
  validateBody(changePasswordSchema),
  changePassword,
);
router.delete("/profile", authenticateUser, deleteAccount);
router.post(
  "/avatar",
  authenticateUser,
  (req, res, next) => {
    uploadAvatarMiddleware(req, res, (err) => {
      if (err) {
        return res
          .status(err.status ?? 400)
          .json({ success: false, message: err.message });
      }

      next();
    });
  },
  uploadAvatar,
);
router.post("/login", validateBody(loginSchema), loginController);

router.get("/firebase/status", (req, res) => {
  const hasProjectId = !!process.env.FIREBASE_PROJECT_ID;
  const hasClientEmail = !!process.env.FIREBASE_CLIENT_EMAIL;
  const hasPrivateKey = !!process.env.FIREBASE_PRIVATE_KEY;
  const privateKeyLength = process.env.FIREBASE_PRIVATE_KEY?.length || 0;
  const startsWithHeader =
    process.env.FIREBASE_PRIVATE_KEY?.startsWith("-----BEGIN PRIVATE KEY") ||
    false;

  try {
    const auth = getFirebaseAdminAuth();
    res.json({
      initialized: true,
      hasProjectId,
      hasClientEmail,
      hasPrivateKey,
      privateKeyLength,
      startsWithHeader,
    });
  } catch (err) {
    res.json({
      initialized: false,
      error: err.message,
      hasProjectId,
      hasClientEmail,
      hasPrivateKey,
      privateKeyLength,
      startsWithHeader,
    });
  }
});

router.post("/firebase", firebaseLogin);

router.post("/register", validateBody(registerSchema), registerController);

export default router;
