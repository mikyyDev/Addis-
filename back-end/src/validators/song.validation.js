import { z } from "zod";

const objectIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid ID format");

export const createSongSchema = z
  .object({
    title: z.string().min(1, "Title is required"),
    artistId: objectIdSchema, // no parentheses
    albumId: objectIdSchema.optional(),
    genre: z.array(objectIdSchema).optional(),
    spotifyUrl: z.string().url("Invalid Spotify URL").optional(),
    providerUrl: z.string().url("Invalid provider URL").optional(),
    lastfmUrl: z.string().url("Invalid Last.fm URL").optional(),

    image: z.string().url("Invalid image URL").optional(),
    playlistId: objectIdSchema.optional(),
  })
  .strict();

export const updateSongSchema = createSongSchema.partial();
