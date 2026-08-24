import Song from "../models/song.js";
import Artist from "../models/artist.js";
import Album from "../models/album.js";
import Genre from "../models/genre.js";
import Playlist from "../models/playlist.js";

import HttpError from "../utils/HttpError.js";
import { dbQuery } from "../middleware/error.middleware.js";

export const createSong = dbQuery(async (req, res) => {
  const {
    title,
    artistId,
    albumId,
    genre,
    spotifyUrl,
    providerUrl,
    preview_url,
    image,
    lastfmUrl,
    playlistId,
  } = req.body;

  const artist = await Artist.findOne({
    _id: artistId,
    userId: req.user.id,
  });

  if (!artist) {
    throw new HttpError({
      status: 404,
      message: "Artist not found",
    });
  }

  const escapedTitle = title.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const existingSong = await Song.findOne({
    title: { $regex: `^${escapedTitle}$`, $options: "i" },
    artistId,
    userId: req.user.id,
  });

  if (existingSong) {
    throw new HttpError({
      status: 409,
      message: "This song is already in your library",
    });
  }

  let album;

  if (albumId) {
    album = await Album.findOne({
      _id: albumId,
      userId: req.user.id,
    });

    if (!album) {
      throw new HttpError({
        status: 404,
        message: "Album not found",
      });
    }
  }

  let genres = [];

  if (genre && genre.length > 0) {
    genres = await Genre.find({
      _id: { $in: genre },
      userId: req.user.id,
    });

    if (genres.length !== genre.length) {
      throw new HttpError({
        status: 404,
        message: "One or more genres were not found",
      });
    }
  }

  let playlist = null;

  if (playlistId) {
    playlist = await Playlist.findOne({
      _id: playlistId,
      userId: req.user.id,
    });

    if (!playlist) {
      throw new HttpError({
        status: 404,
        message: "Playlist not found",
      });
    }
  }

  const song = new Song({
    title: title.trim(),
    artistId,
    albumId: album?._id,
    genre: genres.map((genreDoc) => genreDoc._id),
    providerUrl: providerUrl || undefined,
    spotifyUrl,
    lastfmUrl: lastfmUrl || undefined,
    preview_url,
    image,
    playlistId: playlistId || null,
    userId: req.user.id,
  });

  await song.save();

  if (playlist) {
    playlist.songs.push(song._id);
    await playlist.save();
  }

  const populatedSong = await Song.findById(song._id)
    .populate("artistId", "name")
    .populate("albumId", "name")
    .populate("genre", "name")
    .populate("playlistId", "name description");

  res.status(201).json({
    message: playlist
      ? "Song added and linked to playlist successfully"
      : "Song added successfully",

    song: populatedSong,
  });
});

export const getSongs = dbQuery(async (req, res) => {
  const search = req.query.q?.toString().trim() || "";

  const query = {
    userId: req.user.id,
  };

  if (search) {
    query.title = {
      $regex: search,
      $options: "i",
    };
  }

  const songs = await Song.find(query)
    .populate("artistId", "name")
    .populate("albumId", "name")
    .populate("genre", "name")
    .populate("playlistId", "name description")
    .sort({ createdAt: -1 });

  res.status(200).json(songs);
});

// GET SONG BY ID

export const getSongById = dbQuery(async (req, res) => {
  const song = await Song.findOne({
    _id: req.params.id,
    userId: req.user.id,
  })
    .populate("playlistId", "name description")
    .populate("artistId", "name")
    .populate("albumId", "name")
    .populate("genre", "name");

  if (!song) {
    throw new HttpError({
      status: 404,
      message: "Song not found",
    });
  }

  res.status(200).json(song);
});

// UPDATE SONG

export const updateSong = dbQuery(async (req, res) => {
  const {
    title,
    artistId,
    albumId,
    genre,
    spotifyUrl,
    providerUrl,
    preview_url,
    image,
    lastfmUrl,
    playlistId,
  } = req.body;

  // Verify new artist

  if (artistId) {
    const artist = await Artist.findOne({
      _id: artistId,
      userId: req.user.id,
    });

    if (!artist) {
      throw new HttpError({
        status: 404,
        message: "Artist not found",
      });
    }
  }

  // Verify new album

  if (albumId) {
    const album = await Album.findOne({
      _id: albumId,
      userId: req.user.id,
    });

    if (!album) {
      throw new HttpError({
        status: 404,
        message: "Album not found",
      });
    }
  }

  // Verify genres

  if (genre) {
    const genreDocs = await Genre.find({
      _id: { $in: genre },
      userId: req.user.id,
    });

    if (genreDocs.length !== genre.length) {
      throw new HttpError({
        status: 404,
        message: "One or more genres were not found",
      });
    }
  }

  // Verify playlist

  if (playlistId) {
    const playlist = await Playlist.findOne({
      _id: playlistId,
      userId: req.user.id,
    });

    if (!playlist) {
      throw new HttpError({
        status: 404,
        message: "Playlist not found",
      });
    }
  }

  // Build update

  const updatedFields = {};

  if (title !== undefined) {
    updatedFields.title = title.trim();
  }

  if (artistId !== undefined) {
    updatedFields.artistId = artistId;
  }

  if (albumId !== undefined) {
    updatedFields.albumId = albumId;
  }

  if (genre !== undefined) {
    updatedFields.genre = genre;
  }

  if (spotifyUrl !== undefined) {
    updatedFields.spotifyUrl = spotifyUrl;
  }

  if (providerUrl !== undefined) {
    updatedFields.providerUrl = providerUrl;
  }

  if (lastfmUrl !== undefined) {
    updatedFields.lastfmUrl = lastfmUrl;
  }

  if (preview_url !== undefined) {
    updatedFields.preview_url = preview_url;
  }

  if (image !== undefined) {
    updatedFields.image = image;
  }

  if (playlistId !== undefined) {
    updatedFields.playlistId = playlistId || null;
  }

  const song = await Song.findOneAndUpdate(
    {
      _id: req.params.id,
      userId: req.user.id,
    },
    updatedFields,
    {
      new: true,
      runValidators: true,
    },
  )
    .populate("artistId", "name")
    .populate("albumId", "name")
    .populate("genre", "name")
    .populate("playlistId", "name description");

  if (!song) {
    throw new HttpError({
      status: 404,
      message: "Song not found",
    });
  }

  res.status(200).json(song);
});

// DELETE SONG

export const deleteSong = dbQuery(async (req, res) => {
  const song = await Song.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id,
  });

  if (!song) {
    throw new HttpError({
      status: 404,
      message: "Song not found",
    });
  }

  // Remove song from playlist
  if (song.playlistId) {
    await Playlist.findOneAndUpdate(
      {
        _id: song.playlistId,
        userId: req.user.id,
      },
      {
        $pull: {
          songs: song._id,
        },
      },
    );
  }

  res.status(200).json({
    message: "Song deleted successfully",
  });
});

// SONG STATISTICS

export const getStats = dbQuery(async (req, res) => {
  const userId = req.user._id;

  const totalSongs = await Song.countDocuments({
    userId,
  });

  const songsByGenre = await Song.aggregate([
    {
      $match: {
        userId,
      },
    },

    {
      $unwind: "$genre",
    },

    {
      $group: {
        _id: "$genre",
        count: {
          $sum: 1,
        },
      },
    },
  ]);

  const artistStats = await Song.aggregate([
    {
      $match: {
        userId,
      },
    },

    {
      $group: {
        _id: "$artistId",

        songs: {
          $sum: 1,
        },

        albums: {
          $addToSet: "$albumId",
        },
      },
    },
  ]);

  res.status(200).json({
    totalSongs,
    songsByGenre,
    artistStats,
  });
});
