import jwt from "jsonwebtoken";

import { env } from "../config/env.config.js";

export const generateToken = (userId) => {
  return jwt.sign({ userId }, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });
};
