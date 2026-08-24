import { create } from "zustand";

import { genreService } from "../services/genre.service";

import type {
  Genre,
  CreateGenreRequest,
  UpdateGenreRequest,
} from "../types/genre.types";

interface GenreState {
  genres: Genre[];

  loading: boolean;

  error: string | null;

  fetchGenres: () => Promise<void>;

  createGenre: (data: CreateGenreRequest) => Promise<void>;

  updateGenre: (id: string, data: UpdateGenreRequest) => Promise<void>;

  deleteGenre: (id: string) => Promise<void>;

  clearError: () => void;
}

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "object" && error !== null) {
    const response = (
      error as {
        response?: {
          data?: {
            message?: unknown;
          };
        };
      }
    ).response;

    if (typeof response?.data?.message === "string") {
      return response.data.message;
    }
  }

  return "Something went wrong";
};

export const useGenreStore = create<GenreState>((set) => ({
  genres: [],

  loading: false,

  error: null,

  // ==========================================
  // FETCH
  // ==========================================

  fetchGenres: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const response = await genreService.getGenres();

      set({
        genres: response.data,
        loading: false,
      });
    } catch (error) {
      set({
        genres: [],
        loading: false,
        error: getErrorMessage(error),
      });
    }
  },

  // ==========================================
  // CREATE
  // ==========================================

  createGenre: async (data) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const response = await genreService.createGenre(data);

      set((state) => ({
        genres: [...state.genres, response.data],
        loading: false,
      }));
    } catch (error) {
      set({
        loading: false,
        error: getErrorMessage(error),
      });

      throw error;
    }
  },

  // ==========================================
  // UPDATE
  // ==========================================

  updateGenre: async (id, data) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const response = await genreService.updateGenre(id, data);

      set((state) => ({
        genres: state.genres.map((genre) =>
          genre._id === id ? response.data : genre,
        ),
        loading: false,
      }));
    } catch (error) {
      set({
        loading: false,
        error: getErrorMessage(error),
      });

      throw error;
    }
  },

  // ==========================================
  // DELETE
  // ==========================================

  deleteGenre: async (id) => {
    try {
      set({
        loading: true,
        error: null,
      });

      await genreService.deleteGenre(id);

      set((state) => ({
        genres: state.genres.filter((genre) => genre._id !== id),
        loading: false,
      }));
    } catch (error) {
      set({
        loading: false,
        error: getErrorMessage(error),
      });

      throw error;
    }
  },

  // ==========================================
  // CLEAR ERROR
  // ==========================================

  clearError: () => {
    set({
      error: null,
    });
  },
}));
