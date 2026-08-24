import { lastfmRequest } from "../utils/lastfm.js";
import { dbQuery } from "../middleware/error.middleware.js";
import HttpError from "../utils/HttpError.js";
import Song from "../models/song.js";
import Artist from "../models/artist.js";
import Album from "../models/album.js";
import Genre from "../models/genre.js";

const SEARCH_LIMIT = 10;
const TOP_TRACKS_LIMIT = 10;
const TOP_ALBUMS_LIMIT = 12;

const asArray = (value) => {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
};

const createFallbackId = (artist, title) => {
  return `${artist}-${title}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const getArtistImage = (images) => {
  if (!Array.isArray(images)) {
    return null;
  }

  const preferredSizes = ["extralarge", "large", "medium", "small"];

  for (const size of preferredSizes) {
    const image = images.find(
      (item) =>
        item?.size === size &&
        typeof item?.["#text"] === "string" &&
        item["#text"].trim() !== "",
    );

    if (image) {
      return image["#text"].trim();
    }
  }

  return null;
};

const createYouTubeSearchUrl = (title, artist) => {
  const query = encodeURIComponent(`${title} ${artist}`);

  return `https://www.youtube.com/results?search_query=${query}`;
};

const createSpotifySearchUrl = (title, artist) => {
  const query = encodeURIComponent(`${title} ${artist}`);

  return `https://open.spotify.com/search/${query}`;
};

const validateQuery = (req) => {
  const query = req.query.query?.toString().trim();

  if (!query) {
    throw new HttpError({
      status: 400,
      message: "Search query is required",
    });
  }

  if (query.length < 2) {
    throw new HttpError({
      status: 400,
      message: "Search query must contain at least 2 characters",
    });
  }

  return query;
};

const requireParam = (req, key) => {
  const value = req.query[key]?.toString().trim();

  if (!value) {
    throw new HttpError({
      status: 400,
      message: `${key} is required`,
    });
  }

  return value;
};

export const searchTracks = dbQuery(async (req, res) => {
  const query = validateQuery(req);

  const data = await lastfmRequest({
    method: "track.search",
    track: query,
    limit: SEARCH_LIMIT,
    page: 1,
  });

  const tracks = data?.results?.trackmatches?.track ?? [];

  const trackList = asArray(tracks);

  const simplifiedTracks = trackList
    .filter(
      (track) =>
        track &&
        typeof track.name === "string" &&
        typeof track.artist === "string" &&
        track.name.trim() &&
        track.artist.trim(),
    )
    .map((track) => {
      const title = track.name.trim();
      const artist = track.artist.trim();

      const image = getArtistImage(track.image);

      const id =
        typeof track.mbid === "string" && track.mbid.trim()
          ? track.mbid.trim()
          : createFallbackId(artist, title);

      const lastfmUrl =
        typeof track.url === "string" && track.url.trim()
          ? track.url.trim()
          : `https://www.last.fm/music/${encodeURIComponent(
              artist,
            )}/${encodeURIComponent(title)}`;

      const album =
        typeof track.album === "string" && track.album.trim()
          ? track.album.trim()
          : undefined;

      const youtubeSearchUrl = createYouTubeSearchUrl(title, artist);

      const spotifySearchUrl = createSpotifySearchUrl(title, artist);

      return {
        id,
        title,
        artist,
        album,
        image,
        lastfmUrl,
        youtubeSearchUrl,
        spotifySearchUrl,
      };
    });

  const uniqueTracks = Array.from(
    new Map(
      simplifiedTracks.map((track) => [
        `${track.artist.toLowerCase()}-${track.title.toLowerCase()}`,
        track,
      ]),
    ).values(),
  );

  res.status(200).json({
    success: true,
    query,
    count: uniqueTracks.length,
    data: uniqueTracks,
  });
});

export const searchArtists = dbQuery(async (req, res) => {
  const query = validateQuery(req);

  const data = await lastfmRequest({
    method: "artist.search",
    artist: query,
    limit: SEARCH_LIMIT,
    page: 1,
  });

  const artists = data?.results?.artistmatches?.artist ?? [];

  const simplifiedArtists = asArray(artists)
    .filter(
      (artist) =>
        artist && typeof artist.name === "string" && artist.name.trim(),
    )
    .map((artist) => {
      const name = artist.name.trim();

      const id =
        typeof artist.mbid === "string" && artist.mbid.trim()
          ? artist.mbid.trim()
          : createFallbackId(name, "");

      const url =
        typeof artist.url === "string" && artist.url.trim()
          ? artist.url.trim()
          : `https://www.last.fm/music/${encodeURIComponent(name)}`;

      return {
        id,
        name,
        image: getArtistImage(artist.image),
        url,
        listeners:
          typeof artist.listeners === "string" ? artist.listeners : undefined,
      };
    });

  const uniqueArtists = Array.from(
    new Map(
      simplifiedArtists.map((artist) => [artist.name.toLowerCase(), artist]),
    ).values(),
  );

  res.status(200).json({
    success: true,
    query,
    count: uniqueArtists.length,
    data: uniqueArtists,
  });
});

export const searchAlbums = dbQuery(async (req, res) => {
  const query = validateQuery(req);

  const data = await lastfmRequest({
    method: "album.search",
    album: query,
    limit: SEARCH_LIMIT,
    page: 1,
  });

  const albums = data?.results?.albummatches?.album ?? [];

  const simplifiedAlbums = asArray(albums)
    .filter(
      (album) =>
        album &&
        typeof album.name === "string" &&
        album.name.trim() &&
        typeof album.artist === "string" &&
        album.artist.trim(),
    )
    .map((album) => {
      const name = album.name.trim();
      const artist = album.artist.trim();

      const id =
        typeof album.mbid === "string" && album.mbid.trim()
          ? album.mbid.trim()
          : createFallbackId(artist, name);

      const url =
        typeof album.url === "string" && album.url.trim()
          ? album.url.trim()
          : `https://www.last.fm/music/${encodeURIComponent(
              artist,
            )}/${encodeURIComponent(name)}`;

      return {
        id,
        name,
        artist,
        image: getArtistImage(album.image),
        url,
      };
    });

  const uniqueAlbums = Array.from(
    new Map(
      simplifiedAlbums.map((album) => [
        `${album.artist.toLowerCase()}-${album.name.toLowerCase()}`,
        album,
      ]),
    ).values(),
  );

  res.status(200).json({
    success: true,
    query,
    count: uniqueAlbums.length,
    data: uniqueAlbums,
  });
});

export const getArtistInfo = dbQuery(async (req, res) => {
  const artist = requireParam(req, "artist");

  const [info, topTracksData, topAlbumsData] = await Promise.all([
    lastfmRequest({
      method: "artist.getinfo",
      artist,
    }),

    lastfmRequest({
      method: "artist.gettopTracks",
      artist,
      limit: TOP_TRACKS_LIMIT,
    }),

    lastfmRequest({
      method: "artist.gettopAlbums",
      artist,
      limit: TOP_ALBUMS_LIMIT,
    }),
  ]);

  const artistInfo = info?.artist;

  if (!artistInfo || typeof artistInfo.name !== "string") {
    throw new HttpError({
      status: 404,
      message: `Artist "${artist}" was not found on Last.fm`,
    });
  }

  const bio =
    typeof artistInfo.bio?.summary === "string"
      ? artistInfo.bio.summary.replace(/<[^>]*>/g, "").trim()
      : "";

  const tags = asArray(artistInfo.tags?.tag)
    .map((tag) => (typeof tag?.name === "string" ? tag.name : ""))
    .filter(Boolean)
    .slice(0, 6);

  const listeners =
    typeof artistInfo.stats?.listeners === "string"
      ? artistInfo.stats.listeners
      : "";
  const playcount =
    typeof artistInfo.stats?.playcount === "string"
      ? artistInfo.stats.playcount
      : "";

  const topTracks = asArray(topTracksData?.toptracks?.track)
    .filter((track) => track && typeof track.name === "string")
    .map((track) => ({
      name: track.name,
      playcount:
        typeof track.playcount === "string" ? track.playcount : undefined,
      duration: typeof track.duration === "string" ? track.duration : undefined,
      url: typeof track.url === "string" ? track.url : undefined,
    }));

  const topAlbums = asArray(topAlbumsData?.topalbums?.album)
    .filter((album) => album && typeof album.name === "string")
    .map((album) => {
      const name = album.name;
      const albumArtist =
        typeof album.artist === "string" && album.artist.trim()
          ? album.artist.trim()
          : artistInfo.name;

      const id =
        typeof album.mbid === "string" && album.mbid.trim()
          ? album.mbid.trim()
          : createFallbackId(albumArtist, name);

      return {
        id,
        name,
        artist: albumArtist,
        image: getArtistImage(album.image),
        url:
          typeof album.url === "string" && album.url.trim()
            ? album.url.trim()
            : `https://www.last.fm/music/${encodeURIComponent(
                albumArtist,
              )}/${encodeURIComponent(name)}`,
      };
    });

  res.status(200).json({
    success: true,
    data: {
      name: artistInfo.name,
      image: getArtistImage(artistInfo.image),
      bio,
      tags,
      url:
        typeof artistInfo.url === "string"
          ? artistInfo.url
          : `https://www.last.fm/music/${encodeURIComponent(artistInfo.name)}`,
      listeners,
      playcount,
      topTracks,
      topAlbums,
    },
  });
});

export const getAlbumInfo = dbQuery(async (req, res) => {
  const artist = requireParam(req, "artist");
  const album = requireParam(req, "album");

  const data = await lastfmRequest({
    method: "album.getinfo",
    artist,
    album,
  });

  const albumInfo = data?.album;

  if (!albumInfo || typeof albumInfo.name !== "string") {
    throw new HttpError({
      status: 404,
      message: `Album "${album}" by ${artist} was not found on Last.fm`,
    });
  }

  const tracks = asArray(albumInfo.tracks?.track)
    .filter((track) => track && typeof track.name === "string")
    .map((track) => ({
      name: track.name,
      duration: typeof track.duration === "string" ? track.duration : undefined,
      url: typeof track.url === "string" ? track.url : undefined,
    }));

  res.status(200).json({
    success: true,
    data: {
      name: albumInfo.name,
      artist: typeof albumInfo.artist === "string" ? albumInfo.artist : artist,
      image: getArtistImage(albumInfo.image),
      url:
        typeof albumInfo.url === "string"
          ? albumInfo.url
          : `https://www.last.fm/music/${encodeURIComponent(
              artist,
            )}/${encodeURIComponent(albumInfo.name)}`,
      releasedate:
        typeof albumInfo.releasedate === "string"
          ? albumInfo.releasedate.replace(/^\s*Released:\s*/i, "").trim()
          : undefined,
      tracks,
    },
  });
});

export const addTrackToLibrary = dbQuery(async (req, res) => {
  const { title, artist, image, spotifyUrl, youtubeSearchUrl } = req.body;
  const userId = req.user.id;

  if (!title || typeof title !== "string" || !title.trim()) {
    throw new HttpError({
      status: 400,
      message: "Track title is required",
    });
  }

  if (!artist || typeof artist !== "string" || !artist.trim()) {
    throw new HttpError({
      status: 400,
      message: "Artist name is required",
    });
  }

  let artistDoc = await Artist.findOne({
    name: artist.trim(),
    userId,
  });

  if (!artistDoc) {
    artistDoc = new Artist({
      name: artist.trim(),
      userId,
      image: image || null,
    });

    await artistDoc.save();
  }

  let albumDoc = await Album.findOne({
    name: `${artist.trim()} Collection`,
    userId,
  });

  if (!albumDoc) {
    albumDoc = new Album({
      name: `${artist.trim()} Collection`,
      artistId: artistDoc._id,
      userId,
      image: image || null,
    });

    await albumDoc.save();
  }

  let genre = await Genre.findOne({
    name: "Last.fm Discovery",
    userId,
  });

  if (!genre) {
    genre = new Genre({
      name: "Last.fm Discovery",
      userId,
    });

    await genre.save();
  }

  let song = await Song.findOne({
    title: title.trim(),
    artistId: artistDoc._id,
    userId,
  });

  if (song) {
    throw new HttpError({
      status: 409,
      message: "This track is already in your library",
    });
  }

  song = new Song({
    title: title.trim(),
    artistId: artistDoc._id,
    albumId: albumDoc._id,
    genre: [genre._id],
    image: image || null,
    spotifyUrl: spotifyUrl || null,
    providerUrl: youtubeSearchUrl || null,
    userId,
  });

  await song.save();

  res.status(201).json({
    success: true,
    message: "Track added to your library",
    data: {
      songId: song._id,
      title: song.title,
      artist: artistDoc.name,
      message: `"${song.title}" by ${artistDoc.name} has been added to your library!`,
    },
  });
});
