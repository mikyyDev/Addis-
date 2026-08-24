export interface Genre {
  _id: string;
  name: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateGenreRequest {
  name: string;
}

export interface UpdateGenreRequest {
  name: string;
}

export interface GenreResponse {
  success: boolean;
  data: Genre;
}

export interface GenresResponse {
  success: boolean;
  count: number;
  data: Genre[];
}

export interface DeleteGenreResponse {
  success: boolean;
  message: string;
}
