import { dbQuery } from "../middleware/error.middleware.js";
import Song from "../models/song.js";
import Artist from "../models/artist.js";
import Album from "../models/album.js";
import Genre from "../models/genre.js";

export const getTotals = dbQuery(async (req, res) => {
  const userId = req.user._id;

  const [songsCount, artistsCount, albumsCount, genresCount] =
    await Promise.all([
      Song.countDocuments({ userId }),
      Artist.countDocuments({ userId }),
      Album.countDocuments({ userId }),
      Genre.countDocuments({ userId }),
    ]);

  res.status(200).json({
    totalSongs: songsCount,
    totalArtists: artistsCount,
    totalAlbums: albumsCount,
    totalGenres: genresCount,
  });
});

export const getSongsByGenre = dbQuery(async (req, res) => {
  const userId = req.user._id;
  const genres = await Genre.find({ userId });

  const data = await Promise.all(
    genres.map(async (genre) => {
      const count = await Song.countDocuments({ userId, genre: genre._id });
      return {
        genre: genre.name,
        songCount: count,
      };
    })
  );

  res.status(200).json(data);
});

export const getArtistStats = dbQuery(async (req, res) => {
  const userId = req.user._id;
  const artists = await Artist.find({ userId });

  const data = await Promise.all(
    artists.map(async (artist) => {
      const [songCount, albumCount] = await Promise.all([
        Song.countDocuments({ userId, artistId: artist._id }),
        Album.countDocuments({ userId, artistId: artist._id }),
      ]);

      return {
        artist: artist.name,
        songCount,
        albumCount,
      };
    })
  );

  res.status(200).json(data);
});

export const getAlbumStats = dbQuery(async (req, res) => {
  const userId = req.user._id;
  const albums = await Album.find({ userId }).populate("artistId", "name");

  const data = await Promise.all(
    albums.map(async (album) => {
      const songCount = await Song.countDocuments({ userId, albumId: album._id });
      return {
        album: album.name,
        artist: album.artistId?.name || "Unknown Artist",
        songCount,
      };
    })
  );

  res.status(200).json(data);
});
