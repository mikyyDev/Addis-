import api from "./api";

import type {
  CreateSongRequest,
  Song,
  UpdateSongRequest,
} from "../types/song.types";

export const songService = {
  // Get all songs / search songs
  async getSongs(search = ""): Promise<Song[]> {
    const response = await api.get<Song[]>("/songs", {
      params: search ? { q: search } : {},
    });

    return response.data;
  },

  // Get one song
  async getSongById(id: string): Promise<Song> {
    const response = await api.get<Song>(`/songs/${id}`);

    return response.data;
  },

  // Create song
  async createSong(data: CreateSongRequest): Promise<Song> {
    const response = await api.post("/songs", data);

    return response.data.song;
  },

  // Update song
  async updateSong(id: string, data: UpdateSongRequest): Promise<Song> {
    const response = await api.put<Song>(`/songs/${id}`, data);

    return response.data;
  },

  // Delete song
  async deleteSong(id: string): Promise<void> {
    await api.delete(`/songs/${id}`);
  },

  // Song statistics
  async getStats() {
    const response = await api.get("/songs/stats");

    return response.data;
  },
};
