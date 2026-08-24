export interface SpotifyTrack {
  id: string;

  title: string;

  artist: string;

  album: string;

  image: string | null;

  spotifyUrl: string | null;

  previewUrl: string | null;
}

export interface SpotifySearchResponse {
  success: boolean;

  count: number;

  data: SpotifyTrack[];
}
