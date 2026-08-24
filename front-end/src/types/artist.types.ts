export interface Artist {
  _id: string;

  name: string;

  image?: string | null;

  userId: string;

  albumCount: number;

  songCount: number;

  createdAt: string;

  updatedAt: string;
}

export interface CreateArtistRequest {
  name: string;
  image?: string;
}

export interface UpdateArtistRequest {
  name: string;
  image?: string;
}
