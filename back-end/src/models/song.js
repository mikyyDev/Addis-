import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    artistId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
      required: true,
    },

    albumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Album",
    },

    genre: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre",
        required: true,
      },
    ],

    // Generic provider URL (e.g., Last.fm, Spotify). Keep `spotifyUrl` for
    // backward compatibility with existing frontend data.
    providerUrl: {
      type: String,
      trim: true,
    },

    spotifyUrl: {
      type: String,
      trim: true,
    },

    lastfmUrl: {
      type: String,
      trim: true,
    },

    preview_url: {
      type: String,
      trim: true,
    },

    image: {
      type: String,
      trim: true,
    },

    playlistId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Playlist",
      default: null,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Song = mongoose.models.Song || mongoose.model("Song", songSchema);

export default Song;
