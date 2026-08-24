import api from "./api";

import type {
  LastFMAddToLibraryResponse,
  LastFMAlbumInfoResponse,
  LastFMAlbumSearchResponse,
  LastFMArtistInfoResponse,
  LastFMArtistSearchResponse,
  LastFMSearchResponse,
  LastFMTrack,
} from "../types/lastfm.types";

export const lastfmService = {
  async searchTracks(query: string): Promise<LastFMSearchResponse> {
    const response = await api.get<LastFMSearchResponse>("/lastfm/search", {
      params: {
        query,
      },
    });

    return response.data;
  },

  async searchArtists(query: string): Promise<LastFMArtistSearchResponse> {
    const response = await api.get<LastFMArtistSearchResponse>(
      "/lastfm/search/artists",
      {
        params: {
          query,
        },
      },
    );

    return response.data;
  },

  async searchAlbums(query: string): Promise<LastFMAlbumSearchResponse> {
    const response = await api.get<LastFMAlbumSearchResponse>(
      "/lastfm/search/albums",
      {
        params: {
          query,
        },
      },
    );

    return response.data;
  },

  async getArtistInfo(name: string): Promise<LastFMArtistInfoResponse> {
    const response = await api.get<LastFMArtistInfoResponse>("/lastfm/artist", {
      params: {
        artist: name,
      },
    });

    return response.data;
  },

  async getAlbumInfo(
    artist: string,
    album: string,
  ): Promise<LastFMAlbumInfoResponse> {
    const response = await api.get<LastFMAlbumInfoResponse>("/lastfm/album", {
      params: {
        artist,
        album,
      },
    });

    return response.data;
  },

  async addTrackToLibrary(
    track: LastFMTrack,
  ): Promise<LastFMAddToLibraryResponse> {
    const response = await api.post<LastFMAddToLibraryResponse>(
      "/lastfm/add-to-library",
      {
        title: track.title,
        artist: track.artist,
        image: track.image,
        spotifyUrl: track.spotifySearchUrl,
        youtubeSearchUrl: track.youtubeSearchUrl,
      },
    );

    return response.data;
  },
};
