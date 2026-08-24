export type LastFMFilter = "all" | "tracks" | "artists" | "albums";

export interface LastFMTrack {
  id: string;
  title: string;
  artist: string;
  /** Album name, when Last.fm provides it */
  album?: string;
  image: string | null;
  lastfmUrl: string;
  youtubeSearchUrl: string;
  spotifySearchUrl?: string;
}

export interface LastFMArtist {
  id: string;
  name: string;
  image: string | null;
  url: string;
  listeners?: string;
}

export interface LastFMAlbum {
  id: string;
  name: string;
  artist: string;
  image: string | null;
  url: string;
}

export interface LastFMArtistTrack {
  name: string;
  playcount?: string;
  duration?: string;
  url?: string;
}

export interface LastFMArtistInfo {
  name: string;
  image: string | null;
  bio: string;
  tags: string[];
  url: string;
  listeners: string;
  playcount: string;
  topTracks: LastFMArtistTrack[];
  topAlbums: LastFMAlbum[];
}

export interface LastFMAlbumTrack {
  name: string;
  duration?: string;
  url?: string;
}

export interface LastFMAlbumInfo {
  name: string;
  artist: string;
  image: string | null;
  url: string;
  releasedate?: string;
  tracks: LastFMAlbumTrack[];
}

export interface LastFMSearchResponse {
  success: boolean;
  query: string;
  count: number;
  data: LastFMTrack[];
}

export interface LastFMArtistSearchResponse {
  success: boolean;
  query: string;
  count: number;
  data: LastFMArtist[];
}

export interface LastFMAlbumSearchResponse {
  success: boolean;
  query: string;
  count: number;
  data: LastFMAlbum[];
}

export interface LastFMArtistInfoResponse {
  success: boolean;
  data: LastFMArtistInfo;
}

export interface LastFMAlbumInfoResponse {
  success: boolean;
  data: LastFMAlbumInfo;
}

export interface LastFMAddToLibraryResponse {
  success: boolean;
  message: string;
  data: {
    songId: string;
    title: string;
    artist: string;
    message: string;
  };
}
