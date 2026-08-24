import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default("3000"),
  MONGO_URI: z.string().min(1, "MONGO_URI is required"),
  JWT_SECRET: z
    .string()
    .min(10, "JWT_SECRET must be at least 10 characters long"),
  JWT_EXPIRES_IN: z.string().default("1d"),

  // Last.fm configuration (used for track search)
  LASTFM_API_KEY: z.string().min(1, "LASTFM_API_KEY is required"),
  LASTFM_API_URL: z
    .string()
    .url("LASTFM_API_URL must be a valid URL")
    .default("https://ws.audioscrobbler.com/2.0/"),
  FIREBASE_PROJECT_ID: z.string().optional(),
  FIREBASE_CLIENT_EMAIL: z.string().email().optional(),
  FIREBASE_PRIVATE_KEY: z.string().optional(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("Invalid environment configuration:");
  parsed.error.errors.forEach((err) => {
    console.error(`→ ${err.path.join(".")}: ${err.message}`);
  });
  process.exit(1);
}

export const env = parsed.data;
