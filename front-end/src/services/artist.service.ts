import api from "./api";

import type {
  Artist,
  CreateArtistRequest,
  UpdateArtistRequest,
} from "../types/artist.types";

export const artistService = {
  async getArtists(): Promise<Artist[]> {
    const response = await api.get<Artist[]>("/artists");

    return response.data;
  },

  async getArtistById(id: string): Promise<Artist> {
    const response = await api.get<Artist>(`/artists/${id}`);

    return response.data;
  },

  async createArtist(data: CreateArtistRequest): Promise<Artist> {
    const response = await api.post<Artist>("/artists", data);

    return response.data;
  },

  async updateArtist(id: string, data: UpdateArtistRequest): Promise<Artist> {
    const response = await api.put<Artist>(`/artists/${id}`, data);

    return response.data;
  },

  async deleteArtist(id: string): Promise<void> {
    await api.delete(`/artists/${id}`);
  },
};
