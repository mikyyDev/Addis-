import type { SpotifySearchResponse } from "../types/spotify.types";

export const spotifyService = {
  async searchTracks(): Promise<SpotifySearchResponse> {
    return {
      success: true,
      count: 0,
      data: [],
    };
  },
};
