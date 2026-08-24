import express from "express";

import { env } from "./config/env.config.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.config.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import router from "./routes/index.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  env.CLIENT_URL,
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

// Serve uploaded files (e.g. profile pictures) under /uploads
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use("/api", router);
app.use(errorMiddleware);

connectDB();

const PORT = process.env.PORT || 300;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
