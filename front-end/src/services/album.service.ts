import api from "./api";

import type {
  Album,
  CreateAlbumRequest,
  UpdateAlbumRequest,
} from "../types/album.types";

export const albumService = {
  async getAlbums(params?: { artist?: string }): Promise<Album[]> {
    const response = await api.get<Album[]>("/album", {
      params: params ?? {},
    });

    return response.data;
  },

  async getAlbumById(id: string): Promise<Album> {
    const response = await api.get<Album>(`/album/${id}`);

    return response.data;
  },

  async createAlbum(data: CreateAlbumRequest): Promise<Album> {
    const response = await api.post<Album>("/album", data);

    return response.data;
  },

  async updateAlbum(id: string, data: UpdateAlbumRequest): Promise<Album> {
    const response = await api.put<Album>(`/album/${id}`, data);

    return response.data;
  },

  async deleteAlbum(id: string): Promise<void> {
    await api.delete(`/album/${id}`);
  },
};
