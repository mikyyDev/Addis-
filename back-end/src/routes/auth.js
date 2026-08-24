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

router.post("/firebase", firebaseLogin);

router.post("/register", validateBody(registerSchema), registerController);

export default router;
