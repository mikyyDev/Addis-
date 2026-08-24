import { create } from "zustand";

import { albumService } from "../services/album.service";
import { getErrorMessage } from "../utils/getErrorMessage";

import type {
  Album,
  CreateAlbumRequest,
  UpdateAlbumRequest,
} from "../types/album.types";

interface AlbumState {
  albums: Album[];

  loading: boolean;
  error: string | null;

  search: string;

  selectedAlbum: Album | null;

  isCreateModalOpen: boolean;
  isEditModalOpen: boolean;
  isDeleteModalOpen: boolean;

  fetchAlbums: () => Promise<void>;

  createAlbum: (data: CreateAlbumRequest) => Promise<void>;

  updateAlbum: (id: string, data: UpdateAlbumRequest) => Promise<void>;

  deleteAlbum: (id: string) => Promise<void>;

  setSearch: (value: string) => void;

  selectAlbum: (album: Album | null) => void;

  openCreateModal: () => void;
  closeCreateModal: () => void;

  openEditModal: (album: Album) => void;
  closeEditModal: () => void;

  openDeleteModal: (album: Album) => void;
  closeDeleteModal: () => void;

  clearError: () => void;
}

export const useAlbumStore = create<AlbumState>((set, get) => ({
  albums: [],

  loading: false,

  error: null,

  search: "",

  selectedAlbum: null,

  isCreateModalOpen: false,

  isEditModalOpen: false,

  isDeleteModalOpen: false,

  // ====================================================
  // FETCH
  // ====================================================

  fetchAlbums: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const albums = await albumService.getAlbums();

      set({
        albums,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: getErrorMessage(error, "Failed to load albums"),
      });
    }
  },

  // ====================================================
  // CREATE
  // ====================================================

  createAlbum: async (data) => {
    try {
      set({
        loading: true,
        error: null,
      });

      await albumService.createAlbum(data);

      await get().fetchAlbums();

      set({
        isCreateModalOpen: false,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: getErrorMessage(error, "Failed to create album"),
      });

      throw error;
    }
  },

  // ====================================================
  // UPDATE
  // ====================================================

  updateAlbum: async (id, data) => {
    try {
      set({
        loading: true,
        error: null,
      });

      await albumService.updateAlbum(id, data);

      await get().fetchAlbums();

      set({
        selectedAlbum: null,
        isEditModalOpen: false,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: getErrorMessage(error, "Failed to update album"),
      });

      throw error;
    }
  },

  // ====================================================
  // DELETE
  // ====================================================

  deleteAlbum: async (id) => {
    try {
      set({
        loading: true,
        error: null,
      });

      await albumService.deleteAlbum(id);

      await get().fetchAlbums();

      set({
        selectedAlbum: null,
        isDeleteModalOpen: false,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: getErrorMessage(error, "Failed to delete album"),
      });

      throw error;
    }
  },

  // ====================================================
  // SEARCH
  // ====================================================

  setSearch: (value) => {
    set({
      search: value,
    });
  },

  // ====================================================
  // SELECT
  // ====================================================

  selectAlbum: (album) => {
    set({
      selectedAlbum: album,
    });
  },

  // ====================================================
  // CREATE MODAL
  // ====================================================

  openCreateModal: () => {
    set({
      isCreateModalOpen: true,
      selectedAlbum: null,
      error: null,
    });
  },

  closeCreateModal: () => {
    set({
      isCreateModalOpen: false,
      error: null,
    });
  },

  // ====================================================
  // EDIT MODAL
  // ====================================================

  openEditModal: (album) => {
    set({
      selectedAlbum: album,
      isEditModalOpen: true,
      error: null,
    });
  },

  closeEditModal: () => {
    set({
      selectedAlbum: null,
      isEditModalOpen: false,
      error: null,
    });
  },

  // ====================================================
  // DELETE MODAL
  // ====================================================

  openDeleteModal: (album) => {
    set({
      selectedAlbum: album,
      isDeleteModalOpen: true,
      error: null,
    });
  },

  closeDeleteModal: () => {
    set({
      selectedAlbum: null,
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
