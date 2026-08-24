import { create } from "zustand";

import type { Song } from "../types/song.types";

interface PlayerState {
  currentSong: Song | null;

  isPlaying: boolean;

  setCurrentSong: (song: Song) => void;

  togglePlay: () => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  currentSong: null,

  isPlaying: false,

  setCurrentSong: (song) =>
    set({
      currentSong: song,
      isPlaying: true,
    }),

  togglePlay: () =>
    set((state) => ({
      isPlaying: !state.isPlaying,
    })),
}));
