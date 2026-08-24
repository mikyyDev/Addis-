import { create } from "zustand";

import { songService } from "../services/song.service";
import { playlistService } from "../services/playlist.service";
import { getErrorMessage } from "../utils/getErrorMessage";

import type {
  Song,
  CreateSongRequest,
  UpdateSongRequest,
} from "../types/song.types";

export type SongSortBy =
  | "recent"
  | "title-asc"
  | "title-desc"
  | "artist-asc"
  | "artist-desc";

export type SongViewMode = "grid" | "list";

interface SongState {
  // State
  songs: Song[];
  loading: boolean;
  error: string | null;

  search: string;

  // Filter & sort
  artistFilter: string;
  albumFilter: string;
  genreFilter: string;
  sortBy: SongSortBy;
  viewMode: SongViewMode;

  // Modals
  selectedSong: Song | null; // delete target
  viewingSong: Song | null; // details modal
  editingSong: Song | null; // edit modal
  playlistTarget: Song | null; // add-to-playlist modal

  isCreateSongModalOpen: boolean;

  // Actions
  fetchSongs: (query?: string) => Promise<void>;

  createSong: (data: CreateSongRequest) => Promise<void>;

  updateSong: (id: string, data: UpdateSongRequest) => Promise<void>;

  deleteSong: (id: string) => Promise<void>;

  addSongToPlaylists: (songId: string, playlistIds: string[]) => Promise<void>;

  setSearch: (value: string) => void;

  setArtistFilter: (value: string) => void;

  setAlbumFilter: (value: string) => void;

  setGenreFilter: (value: string) => void;

  setSortBy: (value: SongSortBy) => void;

  setViewMode: (value: SongViewMode) => void;

  selectSong: (song: Song | null) => void;

  openSongDetails: (song: Song) => void;

  closeSongDetails: () => void;

  openEditSong: (song: Song) => void;

  closeEditSong: () => void;

  openAddToPlaylist: (song: Song) => void;

  closeAddToPlaylist: () => void;

  openCreateSongModal: () => void;

  closeCreateSongModal: () => void;

  clearError: () => void;
}

export const useSongStore = create<SongState>((set, get) => ({
  songs: [],

  loading: false,

  error: null,

  search: "",

  artistFilter: "",

  albumFilter: "",

  genreFilter: "",

  sortBy: "recent",

  viewMode: "grid",

  selectedSong: null,

  viewingSong: null,

  editingSong: null,

  playlistTarget: null,

  isCreateSongModalOpen: false,

  fetchSongs: async (query = "") => {
    try {
      set({
        loading: true,
        error: null,
      });

      const songs = await songService.getSongs(query);

      set({
        songs,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: getErrorMessage(error, "Failed to fetch songs."),
      });
    }
  },

  createSong: async (data) => {
    try {
      set({
        loading: true,
      });

      /*
       * The SongForm selects a single genre, but the backend
       * expects an array. Normalize here.
       */
      const normalizedData = data.genre
        ? { ...data, genre: [data.genre].flat() }
        : data;

      await songService.createSong(normalizedData);

      await get().fetchSongs(get().search);

      set({
        loading: false,
        isCreateSongModalOpen: false,
        editingSong: null,
      });
    } catch (error) {
      set({
        loading: false,
        error: getErrorMessage(error, "Failed to create song."),
      });
    }
  },

  updateSong: async (id, data) => {
    try {
      set({
        loading: true,
      });

      /*
       * Normalize genre to an array, same as createSong.
       */
      const normalizedData = data.genre
        ? { ...data, genre: [data.genre].flat() }
        : data;

      await songService.updateSong(id, normalizedData);

      await get().fetchSongs(get().search);

      set({
        loading: false,
        isCreateSongModalOpen: false,
        editingSong: null,
      });
    } catch (error) {
      set({
        loading: false,
        error: getErrorMessage(error, "Failed to update song."),
      });
    }
  },

  deleteSong: async (id) => {
    try {
      set({
        loading: true,
      });

      await songService.deleteSong(id);

      await get().fetchSongs(get().search);

      set({
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: getErrorMessage(error, "Failed to delete song."),
      });
    }
  },

  addSongToPlaylists: async (songId, playlistIds) => {
    for (const playlistId of playlistIds) {
      await playlistService.addSong(playlistId, songId);
    }

    set({
      playlistTarget: null,
    });
  },

  setSearch: (value) =>
    set({
      search: value,
    }),

  setArtistFilter: (value) =>
    set({
      artistFilter: value,
    }),

  setAlbumFilter: (value) =>
    set({
      albumFilter: value,
    }),

  setGenreFilter: (value) =>
    set({
      genreFilter: value,
    }),

  setSortBy: (value) =>
    set({
      sortBy: value,
    }),

  setViewMode: (value) =>
    set({
      viewMode: value,
    }),

  selectSong: (song) =>
    set({
      selectedSong: song,
    }),

  openSongDetails: (song) =>
    set({
      viewingSong: song,
    }),

  closeSongDetails: () =>
    set({
      viewingSong: null,
    }),

  openEditSong: (song) =>
    set({
      editingSong: song,
      isCreateSongModalOpen: true,
    }),

  closeEditSong: () =>
    set({
      editingSong: null,
      isCreateSongModalOpen: false,
    }),

  openAddToPlaylist: (song) =>
    set({
      playlistTarget: song,
    }),

  closeAddToPlaylist: () =>
    set({
      playlistTarget: null,
    }),

  openCreateSongModal: () =>
    set({
      isCreateSongModalOpen: true,
    }),

  closeCreateSongModal: () =>
    set({
      isCreateSongModalOpen: false,
      editingSong: null,
    }),

  clearError: () =>
    set({
      error: null,
    }),
}));
