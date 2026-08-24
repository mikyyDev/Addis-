import Playlist from "../models/playlist.js";
import Song from "../models/song.js";
import { dbQuery } from "../middleware/error.middleware.js";
import HttpError from "../utils/HttpError.js";

const songPopulate = () => ({
  path: "songs",
  select: "title artistId albumId genre image spotifyUrl providerUrl createdAt",
  populate: [
    { path: "artistId", select: "name" },
    { path: "albumId", select: "name" },
    { path: "genre", select: "name" },
  ],
});

export const createPlaylist = dbQuery(async (req, res) => {
  const { name, description, songs, image, isPublished = false } = req.body;

  const playlist = new Playlist({
    name,
    description,
    image: image || null,
    songs,
    isPublished,
    userId: req.user.id,
  });

  await playlist.save();

  const populated = await Playlist.findById(playlist._id)
    .populate(songPopulate())
    .populate("userId", "username email");

  res.status(201).json(populated);
});

export const getPlaylists = dbQuery(async (req, res) => {
  const query = {};

  if (req.query.name) query.name = { $regex: req.query.name, $options: "i" };
  if (req.query.description)
    query.description = { $regex: req.query.description, $options: "i" };

  query.$or = [{ userId: req.user.id }, { isPublished: true }];

  const playlists = await Playlist.find(query)
    .populate(songPopulate())
    .populate("userId", "username email")
    .sort({ createdAt: -1 });

  res.status(200).json(playlists);
});

export const getPlaylistById = dbQuery(async (req, res) => {
  const { id } = req.params;

  const playlist = await Playlist.findOne({
    _id: id,
    $or: [{ userId: req.user.id }, { isPublished: true }],
  })
    .populate(songPopulate())
    .populate("userId", "username email");

  if (!playlist) {
    return res.status(404).json({ message: "Playlist not found" });
  }

  res.status(200).json(playlist);
});

export const updatePlaylist = dbQuery(async (req, res) => {
  const { name, description, songs, image, isPublished } = req.body;

  const updatedFields = {};

  if (name !== undefined) updatedFields.name = name;
  if (description !== undefined) updatedFields.description = description;
  if (image !== undefined) updatedFields.image = image || null;
  if (songs !== undefined) updatedFields.songs = songs;

  if (typeof isPublished === "boolean") {
    updatedFields.isPublished = isPublished;
  }

  const playlist = await Playlist.findOneAndUpdate(
    {
      _id: req.params.id,
      userId: req.user.id,
    },
    updatedFields,
    {
      new: true,
    },
  )
    .populate(songPopulate())
    .populate("userId", "username email");

  if (!playlist)
    throw new HttpError({ status: 404, message: "Playlist not found" });

  res.status(200).json(playlist);
});

export const deletePlaylist = dbQuery(async (req, res) => {
  const playlist = await Playlist.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id,
  });

  if (!playlist)
    throw new HttpError({ status: 404, message: "Playlist not found" });

  await Song.updateMany(
    { playlistId: playlist._id },
    { $unset: { playlistId: "" } },
  );

  res.status(200).json({ message: "Playlist deleted successfully" });
});

// ======================================================
// PLAYLIST STATS (user-scoped)
// ======================================================

export const getPlaylistStats = dbQuery(async (req, res) => {
  const totalPlaylists = await Playlist.countDocuments({
    userId: req.user.id,
  });
  const publishedPlaylists = await Playlist.countDocuments({
    userId: req.user.id,
    isPublished: true,
  });

  res.status(200).json({
    totalPlaylists,
    publishedPlaylists,
  });
});

export const addSongToPlaylist = dbQuery(async (req, res) => {
  const { playlistId, songId } = req.body;

  const playlist = await Playlist.findOne({
    _id: playlistId,
    userId: req.user.id,
  });
  if (!playlist)
    throw new HttpError({ status: 404, message: "Playlist not found" });

  const song = await Song.findOne({
    _id: songId,
    userId: req.user.id,
  });
  if (!song) throw new HttpError({ status: 404, message: "Song not found" });

  if (!playlist.songs.includes(songId)) {
    playlist.songs.push(songId);
    await playlist.save();
  }

  if (!song.playlistId || song.playlistId.toString() !== playlistId) {
    song.playlistId = playlistId;
    await song.save();
  }

  const updatedPlaylist = await Playlist.findById(playlistId)
    .populate(songPopulate())
    .populate("userId", "username email");

  res.status(200).json(updatedPlaylist);
});

export const removeSongFromPlaylist = dbQuery(async (req, res) => {
  const { playlistId, songId } = req.body;

  const playlist = await Playlist.findOne({
    _id: playlistId,
    userId: req.user.id,
  });
  if (!playlist)
    throw new HttpError({ status: 404, message: "Playlist not found" });

  playlist.songs = playlist.songs.filter((id) => id.toString() !== songId);
  await playlist.save();

  const song = await Song.findOne({
    _id: songId,
    userId: req.user.id,
  });
  if (song && song.playlistId?.toString() === playlistId) {
    song.playlistId = null;
    await song.save();
  }

  const updatedPlaylist = await Playlist.findById(playlistId)
    .populate(songPopulate())
    .populate("userId", "username email");

  res.status(200).json(updatedPlaylist);
});
