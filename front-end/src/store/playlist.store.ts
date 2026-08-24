import { create } from "zustand";

import { playlistService } from "../services/playlist.service";

import type {
  CreatePlaylistRequest,
  Playlist,
  PlaylistStats,
  UpdatePlaylistRequest,
} from "../types/playlist.types";

const getErrorMessage = (error: unknown, fallback: string): string => {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "object" && error !== null) {
    const errObj = error as Record<string, unknown>;
    const response = errObj.response;

    if (typeof response === "object" && response !== null) {
      const responseObj = response as Record<string, unknown>;
      const data = responseObj.data;

      if (typeof data === "object" && data !== null) {
        const dataObj = data as Record<string, unknown>;

        const message = dataObj.message;
        if (typeof message === "string") {
          return message;
        }

        if (Array.isArray(dataObj.errors)) {
          const firstError = dataObj.errors[0];
          if (typeof firstError === "object" && firstError !== null) {
            const firstErrorMessage = (firstError as Record<string, unknown>)
              .message;
            if (typeof firstErrorMessage === "string") {
              return firstErrorMessage;
            }
          }
        }
      }
    }
  }

  return fallback;
};

interface PlaylistStore {
  playlists: Playlist[];

  selectedPlaylist: Playlist | null;

  stats: PlaylistStats | null;

  loading: boolean;

  error: string | null;

  search: string;

  fetchPlaylists: () => Promise<void>;

  fetchPlaylist: (id: string) => Promise<void>;

  fetchStats: () => Promise<void>;

  createPlaylist: (data: CreatePlaylistRequest) => Promise<void>;

  updatePlaylist: (id: string, data: UpdatePlaylistRequest) => Promise<void>;

  deletePlaylist: (id: string) => Promise<void>;

  addSong: (playlistId: string, songId: string) => Promise<void>;

  addSongs: (playlistId: string, songIds: string[]) => Promise<void>;

  removeSong: (playlistId: string, songId: string) => Promise<void>;

  reorderSongs: (playlistId: string, orderedSongIds: string[]) => Promise<void>;

  setSearch: (value: string) => void;

  clearSelected: () => void;

  clearError: () => void;
}

const sortPlaylists = (playlists: Playlist[]): Playlist[] =>
  [...playlists].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

export const usePlaylistStore = create<PlaylistStore>((set, get) => ({
  playlists: [],

  selectedPlaylist: null,

  stats: null,

  loading: false,

  error: null,

  search: "",

  fetchPlaylists: async () => {
    set({ loading: true, error: null });

    try {
      const playlists = await playlistService.getPlaylists();

      set({
        playlists: sortPlaylists(playlists),
        loading: false,
      });
    } catch (error: unknown) {
      set({
        loading: false,
        error: getErrorMessage(error, "Failed to load playlists"),
      });
    }
  },

  fetchPlaylist: async (id) => {
    set({ loading: true, error: null });

    try {
      const playlist = await playlistService.getPlaylist(id);

      set({
        selectedPlaylist: playlist,
        loading: false,
      });
    } catch (error: unknown) {
      set({
        loading: false,
        error: getErrorMessage(error, "Failed to load playlist"),
      });
    }
  },

  fetchStats: async () => {
    try {
      const stats = await playlistService.getStats();

      set({ stats });
    } catch (error: unknown) {
      set({
        error: getErrorMessage(error, "Failed to load playlist stats"),
      });
    }
  },

  createPlaylist: async (data: CreatePlaylistRequest) => {
    await playlistService.createPlaylist(data);

    await get().fetchPlaylists();
  },

  updatePlaylist: async (id: string, data: UpdatePlaylistRequest) => {
    const playlist = await playlistService.updatePlaylist(id, data);

    set((state) => ({
      playlists: sortPlaylists(
        state.playlists.map((item) => (item._id === id ? playlist : item)),
      ),
      selectedPlaylist:
        state.selectedPlaylist?._id === id
          ? playlist
          : state.selectedPlaylist,
    }));
  },

  deletePlaylist: async (id) => {
    await playlistService.deletePlaylist(id);

    set((state) => ({
      playlists: state.playlists.filter((item) => item._id !== id),
      selectedPlaylist:
        state.selectedPlaylist?._id === id ? null : state.selectedPlaylist,
    }));
  },

  addSong: async (playlistId, songId) => {
    const playlist = await playlistService.addSong(playlistId, songId);

    set((state) => ({
      selectedPlaylist:
        state.selectedPlaylist?._id === playlistId
          ? playlist
          : state.selectedPlaylist,
      playlists: sortPlaylists(
        state.playlists.map((item) =>
          item._id === playlistId ? playlist : item,
        ),
      ),
    }));
  },

  addSongs: async (playlistId, songIds) => {
    /*
     * Batch add: persist each song, then refetch once.
     */
    for (const songId of songIds) {
      await playlistService.addSong(playlistId, songId);
    }

    await get().fetchPlaylist(playlistId);
    await get().fetchPlaylists();
  },

  removeSong: async (playlistId, songId) => {
    const playlist = await playlistService.removeSong(playlistId, songId);

    set((state) => ({
      selectedPlaylist:
        state.selectedPlaylist?._id === playlistId
          ? playlist
          : state.selectedPlaylist,
      playlists: sortPlaylists(
        state.playlists.map((item) =>
          item._id === playlistId ? playlist : item,
        ),
      ),
    }));
  },

  reorderSongs: async (playlistId, orderedSongIds) => {
    const current = get().selectedPlaylist;

    /*
     * Optimistic update so the drag feels instant.
     */
    if (current && current._id === playlistId) {
      const byId = new Map(current.songs.map((song) => [song._id, song]));

      const reordered = orderedSongIds
        .map((id) => byId.get(id))
        .filter((song): song is NonNullable<typeof song> => Boolean(song));

      set({ selectedPlaylist: { ...current, songs: reordered } });
    }

    try {
      const playlist = await playlistService.updatePlaylist(playlistId, {
        songs: orderedSongIds,
      });

      set((state) => ({
        selectedPlaylist:
          state.selectedPlaylist?._id === playlistId
            ? playlist
            : state.selectedPlaylist,
        playlists: sortPlaylists(
          state.playlists.map((item) =>
            item._id === playlistId ? playlist : item,
          ),
        ),
      }));
    } catch (error: unknown) {
      set({
        error: getErrorMessage(error, "Failed to reorder songs"),
      });

      /* Roll back to the server state. */
      await get().fetchPlaylist(playlistId);
    }
  },

  setSearch: (value) =>
    set({
      search: value,
    }),

  clearSelected: () =>
    set({
      selectedPlaylist: null,
    }),

  clearError: () =>
    set({
      error: null,
    }),
}));
