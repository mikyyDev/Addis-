export interface PlaylistSong {
  _id: string;
  title: string;

  image?: string | null;

  spotifyUrl?: string | null;

  providerUrl?: string | null;

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

  createdAt?: string;
}

export interface Playlist {
  _id: string;

  name: string;

  description?: string;

  image?: string | null;

  isPublished: boolean;

  songs: PlaylistSong[];

  userId: {
    _id: string;

    username: string;

    email: string;
  };

  createdAt: string;

  updatedAt: string;
}

export interface CreatePlaylistRequest {
  name: string;
  description?: string;
  image?: string;
  isPublished?: boolean;
}

export interface UpdatePlaylistRequest {
  name?: string;
  description?: string;
  /** null clears the cover image */
  image?: string | null;
  songs?: string[];
  isPublished?: boolean;
}

export interface PlaylistStats {
  totalPlaylists: number;

  publishedPlaylists: number;
}
