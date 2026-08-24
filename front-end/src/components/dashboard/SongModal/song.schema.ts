import { z } from "zod";

export const createSongSchema = z.object({
  title: z.string().min(2, "Title is required"),

  artistId: z.string().min(1, "Please select an artist"),

  albumId: z.string().min(1, "Please select an album"),

  genre: z.string().min(1, "Please select a genre"),

  spotifyUrl: z
    .string()
    .url("Invalid Spotify URL")
    .optional()
    .or(z.literal("")),

  image: z.string().url("Invalid Image URL").optional().or(z.literal("")),

  playlistId: z.string().optional(),
});

export type CreateSongSchema = z.infer<typeof createSongSchema>;
