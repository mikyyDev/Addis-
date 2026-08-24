import { dbQuery } from "../middleware/error.middleware.js";
import Genre from "../models/genre.js";
import HttpError from "../utils/HttpError.js";

export const createGenre = dbQuery(async (req, res) => {
  const name = req.body.name?.trim();

  if (!name) {
    throw new HttpError({
      status: 400,
      message: "Genre name is required",
    });
  }

  if (name.length < 2) {
    throw new HttpError({
      status: 400,
      message: "Genre name must contain at least 2 characters",
    });
  }

  const existingGenre = await Genre.findOne({
    userId: req.user.id,
    name: { $regex: `^${name}$`, $options: "i" },
  });

  if (existingGenre) {
    throw new HttpError({
      status: 409,
      message: "Genre already exists",
    });
  }

  const genre = await Genre.create({
    name,
    userId: req.user.id,
  });

  res.status(201).json({
    success: true,
    data: genre,
  });
});

export const getGenres = dbQuery(async (req, res) => {
  const genres = await Genre.find({
    userId: req.user.id,
  }).sort({
    name: 1,
  });

  res.status(200).json({
    success: true,
    count: genres.length,
    data: genres,
  });
});

export const getGenreById = dbQuery(async (req, res) => {
  const genre = await Genre.findOne({
    _id: req.params.id,
    userId: req.user.id,
  });

  if (!genre) {
    throw new HttpError({
      status: 404,
      message: "Genre not found",
    });
  }

  res.status(200).json({
    success: true,
    data: genre,
  });
});

export const updateGenre = dbQuery(async (req, res) => {
  const name = req.body.name?.trim();

  if (!name) {
    throw new HttpError({
      status: 400,
      message: "Genre name is required",
    });
  }

  const existingGenre = await Genre.findOne({
    userId: req.user.id,
    name: { $regex: `^${name}$`, $options: "i" },
    _id: { $ne: req.params.id },
  });

  if (existingGenre) {
    throw new HttpError({
      status: 409,
      message: "Genre already exists",
    });
  }

  const genre = await Genre.findOneAndUpdate(
    {
      _id: req.params.id,
      userId: req.user.id,
    },
    {
      name,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!genre) {
    throw new HttpError({
      status: 404,
      message: "Genre not found",
    });
  }

  res.status(200).json({
    success: true,
    data: genre,
  });
});

export const deleteGenre = dbQuery(async (req, res) => {
  const genre = await Genre.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id,
  });

  if (!genre) {
    throw new HttpError({
      status: 404,
      message: "Genre not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Genre deleted successfully",
  });
});
