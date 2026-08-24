import { z } from "zod";

const objectIdSchema = z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ID format");

export const createPlaylistSchema = z.object({
  name: z.string().min(1, { message: "Playlist name is required" }),
  description: z.string().optional(),
  image: z.string().optional(),
  isPublished: z.boolean().optional(),
});

export const updatePlaylistSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  songs: z.array(objectIdSchema).optional(),
  isPublished: z.boolean().optional(),
});
