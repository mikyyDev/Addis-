import api from "./api";

import type {
  CreateGenreRequest,
  UpdateGenreRequest,
  GenreResponse,
  GenresResponse,
  DeleteGenreResponse,
} from "../types/genre.types";

export const genreService = {
  // ==========================================
  // GET ALL GENRES
  // ==========================================

  async getGenres(): Promise<GenresResponse> {
    const response = await api.get<GenresResponse>("/genre");

    return response.data;
  },

  // ==========================================
  // GET GENRE BY ID
  // ==========================================

  async getGenreById(id: string): Promise<GenreResponse> {
    const response = await api.get<GenreResponse>(`/genre/${id}`);

    return response.data;
  },

  // ==========================================
  // CREATE GENRE
  // ==========================================

  async createGenre(data: CreateGenreRequest): Promise<GenreResponse> {
    const response = await api.post<GenreResponse>("/genre", data);

    return response.data;
  },

  // ==========================================
  // UPDATE GENRE
  // ==========================================

  async updateGenre(
    id: string,
    data: UpdateGenreRequest,
  ): Promise<GenreResponse> {
    const response = await api.put<GenreResponse>(`/genre/${id}`, data);

    return response.data;
  },

  // ==========================================
  // DELETE GENRE
  // ==========================================

  async deleteGenre(id: string): Promise<DeleteGenreResponse> {
    const response = await api.delete<DeleteGenreResponse>(`/genre/${id}`);

    return response.data;
  },
};
