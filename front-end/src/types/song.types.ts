export interface CreateSongRequest {
  title: string;
  artistId: string;
  albumId?: string;
  /** Single id (SongForm) or array (AddToLibraryModal); the store normalizes to an array */
  genre?: string | string[];
  spotifyUrl?: string;
  providerUrl?: string;
  lastfmUrl?: string;
  preview_url?: string;
  image?: string;
  playlistId?: string;
}

export type UpdateSongRequest = Partial<CreateSongRequest>;

export interface Song {
  _id: string;

  title: string;

  artistId: {
    _id: string;
    name: string;
  };

  albumId: {
    _id: string;
    name: string;
  } | null;

  genre: {
    _id: string;
    name: string;
  }[];

  spotifyUrl?: string;

  providerUrl?: string;

  lastfmUrl?: string;

  preview_url?: string;

  image?: string;

  playlistId?: {
    _id: string;
    name: string;
    description?: string;
  } | null;

  userId: string;

  createdAt: string;

  updatedAt: string;
}
