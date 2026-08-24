import mongoose from "mongoose";

const genreSongSchema = new mongoose.Schema(
  {
    songId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
      required: true,
    },

    genreId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Genre",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Prevent the same song from being assigned
// to the same genre more than once.
genreSongSchema.index({ songId: 1, genreId: 1 }, { unique: true });

const GenreSong = mongoose.model("GenreSong", genreSongSchema);

export default GenreSong;
