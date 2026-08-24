import Album from "../models/album.js";
import Artist from "../models/artist.js";

import HttpError from "../utils/HttpError.js";
import { dbQuery } from "../middleware/error.middleware.js";

export const createAlbum = dbQuery(async (req, res) => {
  const { name, releaseYear, artistId, image } = req.body;

  // Validate required fields
  if (!name?.trim() || !artistId) {
    throw new HttpError({
      status: 400,
      message: "Album name and artist are required",
    });
  }

  // Make sure the artist belongs to the current user
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

  // Create album
  const album = await Album.create({
    name: name.trim(),
    releaseYear,
    artistId,
    image: image?.trim() || null,
    userId: req.user.id,
  });

  // Return album with artist information
  const populatedAlbum = await Album.findById(album._id).populate(
    "artistId",
    "name",
  );

  res.status(201).json(populatedAlbum);
});

export const getAlbums = dbQuery(async (req, res) => {
  const query = {
    userId: req.user.id,
  };

  const artistId = req.query.artist?.toString().trim();

  if (artistId) {
    query.artistId = artistId;
  }

  const albums = await Album.find(query).populate("artistId", "name").sort({
    createdAt: -1,
  });

  res.status(200).json(albums);
});

export const getAlbumById = dbQuery(async (req, res) => {
  const album = await Album.findOne({
    _id: req.params.id,
    userId: req.user.id,
  }).populate("artistId", "name");

  if (!album) {
    throw new HttpError({
      status: 404,
      message: "Album not found",
    });
  }

  res.status(200).json(album);
});

export const updateAlbum = dbQuery(async (req, res) => {
  const { name, releaseYear, artistId, image } = req.body;

  if (artistId !== undefined) {
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

  const updatedFields = {};

  // Update album name
  if (name !== undefined) {
    if (!name.trim()) {
      throw new HttpError({
        status: 400,
        message: "Album name cannot be empty",
      });
    }

    updatedFields.name = name.trim();
  }

  // Update release year
  if (releaseYear !== undefined) {
    updatedFields.releaseYear = releaseYear;
  }

  // Update artist
  if (artistId !== undefined) {
    updatedFields.artistId = artistId;
  }

  // Update image URL
  if (image !== undefined) {
    updatedFields.image = image?.trim() || null;
  }

  // Find and update only the current user's album
  const album = await Album.findOneAndUpdate(
    {
      _id: req.params.id,
      userId: req.user.id,
    },
    updatedFields,
    {
      new: true,
      runValidators: true,
    },
  ).populate("artistId", "name");

  if (!album) {
    throw new HttpError({
      status: 404,
      message: "Album not found",
    });
  }

  res.status(200).json(album);
});

export const deleteAlbum = dbQuery(async (req, res) => {
  const album = await Album.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id,
  });

  if (!album) {
    throw new HttpError({
      status: 404,
      message: "Album not found",
    });
  }

  res.status(200).json({
    message: "Album deleted successfully",
  });
});
