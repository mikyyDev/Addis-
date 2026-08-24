import { z } from "zod";

const objectIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid ID format");

const imageUrlSchema = z.union([
  z.literal(""),
  z
    .string()
    .trim()
    .refine((value) => {
      if (!value) {
        return true;
      }

      try {
        const parsed = new URL(value);

        return ["http:", "https:", "data:", "blob:"].includes(parsed.protocol);
      } catch {
        return false;
      }
    }, "Invalid image URL"),
]);

export const createSongSchema = z
  .object({
    title: z.string().trim().min(1, "Title is required"),

    artistId: objectIdSchema,

    albumId: objectIdSchema,

    genre: z.array(objectIdSchema).min(1, "At least one genre is required"),

    spotifyUrl: z
      .string()
      .url("Invalid Spotify URL")
      .optional()
      .or(z.literal("")),

    providerUrl: z
      .string()
      .url("Invalid YouTube URL")
      .optional()
      .or(z.literal("")),

    lastfmUrl: z
      .string()
      .url("Invalid Last.fm URL")
      .optional()
      .or(z.literal("")),

    image: imageUrlSchema.optional(),

    playlistId: objectIdSchema.optional().or(z.literal("")),
  })
  .strict();

export type CreateSongSchema = z.infer<typeof createSongSchema>;
