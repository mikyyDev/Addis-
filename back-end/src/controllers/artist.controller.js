import Artist from "../models/artist.js";
import HttpError from "../utils/HttpError.js";
import { dbQuery } from "../middleware/error.middleware.js";

export const createArtist = dbQuery(async (req, res) => {
  const { name, image } = req.body;

  if (!name?.trim()) {
    throw new HttpError({
      status: 400,
      message: "Artist name is required",
    });
  }

  const existingArtist = await Artist.findOne({
    name: name.trim(),
    userId: req.user.id,
  });

  if (existingArtist) {
    throw new HttpError({
      status: 409,
      message: "Artist already exists",
    });
  }

  const artist = await Artist.create({
    name: name.trim(),
    image: image?.trim() || null,
    userId: req.user.id,
  });

  res.status(201).json(artist);
});

export const getArtists = dbQuery(async (req, res) => {
  const artists = await Artist.aggregate([
    {
      $match: {
        userId: req.user._id,
      },
    },

    {
      $lookup: {
        from: "albums",
        let: {
          artistId: "$_id",
          userId: "$userId",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  {
                    $eq: ["$artistId", "$$artistId"],
                  },
                  {
                    $eq: ["$userId", "$$userId"],
                  },
                ],
              },
            },
          },
        ],
        as: "albums",
      },
    },

    {
      $lookup: {
        from: "songs",
        let: {
          artistId: "$_id",
          userId: "$userId",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  {
                    $eq: ["$artistId", "$$artistId"],
                  },
                  {
                    $eq: ["$userId", "$$userId"],
                  },
                ],
              },
            },
          },
        ],
        as: "songs",
      },
    },

    {
      $addFields: {
        albumCount: {
          $size: "$albums",
        },

        songCount: {
          $size: "$songs",
        },
      },
    },

    {
      $project: {
        albums: 0,
        songs: 0,
      },
    },

    {
      $sort: {
        name: 1,
      },
    },
  ]);

  res.status(200).json(artists);
});

export const getArtistById = dbQuery(async (req, res) => {
  const artist = await Artist.findOne({
    _id: req.params.id,
    userId: req.user.id,
  });

  if (!artist) {
    throw new HttpError({
      status: 404,
      message: "Artist not found",
    });
  }

  res.status(200).json(artist);
});

export const updateArtist = dbQuery(async (req, res) => {
  const { name, image } = req.body;

  if (!name?.trim()) {
    throw new HttpError({
      status: 400,
      message: "Artist name is required",
    });
  }

  const artist = await Artist.findOneAndUpdate(
    {
      _id: req.params.id,
      userId: req.user.id,
    },
    {
      name: name.trim(),
      image: image?.trim() || null,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!artist) {
    throw new HttpError({
      status: 404,
      message: "Artist not found",
    });
  }

  res.status(200).json(artist);
});

export const deleteArtist = dbQuery(async (req, res) => {
  const artist = await Artist.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id,
  });

  if (!artist) {
    throw new HttpError({
      status: 404,
      message: "Artist not found",
    });
  }

  res.status(200).json({
    message: "Artist deleted successfully",
  });
});
