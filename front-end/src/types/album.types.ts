export interface AlbumArtist {
  _id: string;
  name: string;
}

export interface Album {
  _id: string;
  name: string;
  releaseYear?: number | null;
  image?: string | null;

  artistId: AlbumArtist;

  userId: string;

  createdAt: string;
  updatedAt: string;
}

export interface CreateAlbumRequest {
  name: string;
  releaseYear?: number;
  artistId: string;
  image?: string;
}

export interface UpdateAlbumRequest {
  name?: string;
  releaseYear?: number;
  artistId?: string;
  image?: string;
}
