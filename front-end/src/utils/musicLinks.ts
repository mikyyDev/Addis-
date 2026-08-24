import type { Song } from "../types/song.types";

const getArtist = (song: Song): string => song.artistId?.name ?? "";

const getTitle = (song: Song): string => song.title ?? "";

const youtubeSearch = (song: Song): string =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(
    `${getTitle(song)} ${getArtist(song)}`,
  )}`;

const spotifySearch = (song: Song): string =>
  `https://open.spotify.com/search/${encodeURIComponent(
    `${getTitle(song)} ${getArtist(song)}`,
  )}`;

const lastFmTrack = (song: Song): string =>
  `https://www.last.fm/music/${encodeURIComponent(
    getArtist(song),
  )}/_/${encodeURIComponent(getTitle(song))}`;

export const getYouTubeUrl = (song: Song): string =>
  song.providerUrl && song.providerUrl.includes("youtube.com")
    ? song.providerUrl
    : youtubeSearch(song);

export const getSpotifyUrl = (song: Song): string =>
  song.spotifyUrl && song.spotifyUrl.includes("spotify.com")
    ? song.spotifyUrl
    : spotifySearch(song);

export const getLastFmUrl = (song: Song): string =>
  song.lastfmUrl && song.lastfmUrl.includes("last.fm")
    ? song.lastfmUrl
    : lastFmTrack(song);

export const formatAddedDate = (iso: string): string =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
