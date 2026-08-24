import { create } from "zustand";

import { artistService } from "../services/artist.service";

import type {
  Artist,
  CreateArtistRequest,
  UpdateArtistRequest,
} from "../types/artist.types";

const getArtistErrorMessage = (error: unknown, fallback: string): string => {
  if (
    error instanceof Error &&
    error.message !== "Request failed with status code 401"
  ) {
    return error.message;
  }

  if (typeof error === "object" && error !== null) {
    const response = (error as { response?: { data?: { message?: unknown } } })
      .response;

    if (typeof response?.data?.message === "string") {
      return response.data.message;
    }
  }

  return fallback;
};

interface ArtistState {
  artists: Artist[];

  loading: boolean;

  error: string | null;

  search: string;

  selectedArtist: Artist | null;

  isCreateModalOpen: boolean;

  isEditModalOpen: boolean;

  isDeleteModalOpen: boolean;

  fetchArtists: () => Promise<void>;

  createArtist: (data: CreateArtistRequest) => Promise<void>;

  updateArtist: (id: string, data: UpdateArtistRequest) => Promise<void>;

  deleteArtist: (id: string) => Promise<void>;

  setSearch: (value: string) => void;

  selectArtist: (artist: Artist | null) => void;

  openCreateModal: () => void;

  closeCreateModal: () => void;

  openEditModal: (artist: Artist) => void;

  closeEditModal: () => void;

  openDeleteModal: (artist: Artist) => void;

  closeDeleteModal: () => void;

  clearError: () => void;
}

export const useArtistStore = create<ArtistState>((set, get) => ({
  artists: [],

  loading: false,

  error: null,

  search: "",

  selectedArtist: null,

  isCreateModalOpen: false,

  isEditModalOpen: false,

  isDeleteModalOpen: false,

  fetchArtists: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const artists = await artistService.getArtists();

      set({
        artists,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: getArtistErrorMessage(error, "Failed to load artists"),
      });
    }
  },

  createArtist: async (data) => {
    try {
      set({
        loading: true,
        error: null,
      });

      await artistService.createArtist(data);

      await get().fetchArtists();

      set({
        isCreateModalOpen: false,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: getArtistErrorMessage(error, "Failed to create artist"),
      });

      throw error;
    }
  },

  updateArtist: async (id, data) => {
    try {
      set({
        loading: true,
        error: null,
      });

      await artistService.updateArtist(id, data);

      await get().fetchArtists();

      set({
        selectedArtist: null,
        isEditModalOpen: false,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: getArtistErrorMessage(error, "Failed to update artist"),
      });

      throw error;
    }
  },

  deleteArtist: async (id) => {
    try {
      set({
        loading: true,
        error: null,
      });

      await artistService.deleteArtist(id);

      await get().fetchArtists();

      set({
        selectedArtist: null,
        isDeleteModalOpen: false,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: getArtistErrorMessage(error, "Failed to delete artist"),
      });

      throw error;
    }
  },

  setSearch: (value) => {
    set({
      search: value,
    });
  },

  selectArtist: (artist) => {
    set({
      selectedArtist: artist,
    });
  },

  openCreateModal: () => {
    set({
      isCreateModalOpen: true,
      error: null,
    });
  },

  closeCreateModal: () => {
    set({
      isCreateModalOpen: false,
      error: null,
    });
  },

  openEditModal: (artist) => {
    set({
      selectedArtist: artist,
      isEditModalOpen: true,
      error: null,
    });
  },

  closeEditModal: () => {
    set({
      selectedArtist: null,
      isEditModalOpen: false,
      error: null,
    });
  },

  openDeleteModal: (artist) => {
    set({
      selectedArtist: artist,
      isDeleteModalOpen: true,
      error: null,
    });
  },

  closeDeleteModal: () => {
    set({
      selectedArtist: null,
      isDeleteModalOpen: false,
      error: null,
    });
  },

  clearError: () => {
    set({
      error: null,
    });
  },
}));
