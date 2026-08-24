import api from "./api";

import type {
  StatsTotals,
  GenreStat,
  ArtistStat,
  AlbumStat,
} from "../types/stat.types";

export const statService = {
  async getTotals(): Promise<StatsTotals> {
    const response = await api.get<StatsTotals>("/stat/totals");

    return response.data;
  },

  async getSongsByGenre(): Promise<GenreStat[]> {
    const response = await api.get<GenreStat[]>("/stat/songs-by-genre");

    return response.data;
  },

  async getArtistStats(): Promise<ArtistStat[]> {
    const response = await api.get<ArtistStat[]>("/stat/artist-stats");

    return response.data;
  },

  async getAlbumStats(): Promise<AlbumStat[]> {
    const response = await api.get<AlbumStat[]>("/stat/album-stats");

    return response.data;
  },
};
