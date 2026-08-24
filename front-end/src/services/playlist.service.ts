import api from "./api";

import type {
  CreatePlaylistRequest,
  Playlist,
  PlaylistStats,
  UpdatePlaylistRequest,
} from "../types/playlist.types";

export const playlistService = {
  getPlaylists: async (): Promise<Playlist[]> => {
    const response = await api.get<Playlist[]>("/playlist");

    return response.data;
  },

  getPlaylist: async (id: string): Promise<Playlist> => {
    const response = await api.get<Playlist>(`/playlist/${id}`);

    return response.data;
  },

  createPlaylist: async (data: CreatePlaylistRequest): Promise<Playlist> => {
    const response = await api.post<Playlist>("/playlist", data);

    return response.data;
  },

  updatePlaylist: async (
    id: string,
    data: UpdatePlaylistRequest,
  ): Promise<Playlist> => {
    const response = await api.put<Playlist>(`/playlist/${id}`, data);

    return response.data;
  },

  deletePlaylist: async (id: string): Promise<{ message: string }> => {
    const response = await api.delete<{ message: string }>(`/playlist/${id}`);

    return response.data;
  },

  getStats: async (): Promise<PlaylistStats> => {
    const response = await api.get<PlaylistStats>("/playlist/stats");

    return response.data;
  },

  addSong: async (playlistId: string, songId: string): Promise<Playlist> => {
    const response = await api.post<Playlist>("/playlist/add-song", {
      playlistId,
      songId,
    });

    return response.data;
  },

  removeSong: async (
    playlistId: string,
    songId: string,
  ): Promise<Playlist> => {
    const response = await api.post<Playlist>("/playlist/remove-song", {
      playlistId,
      songId,
    });

    return response.data;
  },
};
