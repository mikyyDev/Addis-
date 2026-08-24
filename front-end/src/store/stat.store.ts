import { create } from "zustand";

import { statService } from "../services/stat.service";
import { songService } from "../services/song.service";
import { playlistService } from "../services/playlist.service";

import type {
  StatsTotals,
  GenreStat,
  ArtistStat,
  AlbumStat,
  StatsPeriod,
} from "../types/stat.types";
import type { Song } from "../types/song.types";

interface StatsState {
  totals: StatsTotals | null;
  playlistCount: number;
  genres: GenreStat[];
  artists: ArtistStat[];
  albums: AlbumStat[];
  songs: Song[];
  period: StatsPeriod;
  loading: boolean;
  error: string | null;

  fetchAll: () => Promise<void>;
  setPeriod: (period: StatsPeriod) => void;
  clearError: () => void;
}

const getErrorMessage = (error: unknown, fallback: string): string => {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "object" && error !== null && "response" in error) {
    const axiosError = error as {
      response?: {
        data?: {
          message?: unknown;
        };
      };
    };

    const message = axiosError.response?.data?.message;

    return typeof message === "string" ? message : fallback;
  }

  return fallback;
};

export const useStatStore = create<StatsState>((set) => ({
  totals: null,
  playlistCount: 0,
  genres: [],
  artists: [],
  albums: [],
  songs: [],
  period: "all",
  loading: false,
  error: null,

  fetchAll: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const [totals, playlistStats, genres, artists, albums, songs] =
        await Promise.all([
          statService.getTotals(),
          playlistService.getStats(),
          statService.getSongsByGenre(),
          statService.getArtistStats(),
          statService.getAlbumStats(),
          songService.getSongs(),
        ]);

      set({
        totals,
        playlistCount: playlistStats.totalPlaylists,
        genres,
        artists,
        albums,
        songs,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: getErrorMessage(error, "Failed to load statistics."),
      });
    }
  },

  setPeriod: (period) =>
    set({
      period,
    }),

  clearError: () =>
    set({
      error: null,
    }),
}));
