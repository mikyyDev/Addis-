import { create } from "zustand";

import { lastfmService } from "../services/lastfm.service";
import { songService } from "../services/song.service";
import { getErrorMessage } from "../utils/getErrorMessage";

import type {
  LastFMAlbum,
  LastFMAlbumInfo,
  LastFMArtist,
  LastFMArtistInfo,
  LastFMFilter,
  LastFMTrack,
} from "../types/lastfm.types";
import type { Song } from "../types/song.types";

interface LastFMState {
  /* Search */
  tracks: LastFMTrack[];
  artists: LastFMArtist[];
  albums: LastFMAlbum[];
  filter: LastFMFilter;
  loading: boolean;
  error: string | null;
  query: string;

  /* Library (user's MongoDB songs) */
  librarySongs: Song[];
  libraryKeys: Set<string>;
  libraryLoading: boolean;

  /* Detail modals */
  detailTrack: LastFMTrack | null;
  artistDetail: LastFMArtistInfo | null;
  artistDetailLoading: boolean;
  artistDetailError: string | null;
  albumDetail: LastFMAlbumInfo | null;
  albumDetailLoading: boolean;
  albumDetailError: string | null;

  /* Local favorites / history */
  searchHistory: string[];
  favorites: LastFMTrack[];
  savingTrackIds: string[];
  saveError: string | null;

  search: (query: string) => Promise<void>;
  setQuery: (query: string) => void;
  setFilter: (filter: LastFMFilter) => void;
  clearResults: () => void;
  clearError: () => void;

  loadLibrary: () => Promise<void>;
  refreshLibrary: () => Promise<void>;
  isInLibrary: (artist: string, title: string) => boolean;

  openTrackDetail: (track: LastFMTrack) => void;
  closeTrackDetail: () => void;
  fetchArtistDetail: (name: string) => Promise<void>;
  closeArtistDetail: () => void;
  fetchAlbumDetail: (artist: string, album: string) => Promise<void>;
  closeAlbumDetail: () => void;

  addToSearchHistory: (query: string) => void;
  clearSearchHistory: () => void;
  removeFromSearchHistory: (query: string) => void;
  addFavorite: (track: LastFMTrack) => void;
  removeFavorite: (trackId: string) => void;
  isFavorite: (trackId: string) => boolean;
  loadFromLocalStorage: () => void;
  saveTrackToLibrary: (track: LastFMTrack) => Promise<void>;
  clearSaveError: () => void;
}



const STORAGE_KEYS = {
  SEARCH_HISTORY: "lastfm_search_history",
  FAVORITES: "lastfm_favorites",
};

/*
 * Normalize an artist/title pair so "Teddy  Afro" and
 * "teddy afro" match the same library key.
 */
const normalizeKey = (value: string): string =>
  value.toLowerCase().replace(/\s+/g, " ").trim();

const trackKey = (artist: string, title: string): string =>
  normalizeKey(`${artist}|${title}`);

export const useLastFMStore = create<LastFMState>((set, get) => ({
  /*
   * ==========================================
   * INITIAL STATE
   * ==========================================
   */

  tracks: [],
  artists: [],
  albums: [],
  filter: "all",
  loading: false,
  error: null,
  query: "",

  librarySongs: [],
  libraryKeys: new Set<string>(),
  libraryLoading: false,

  detailTrack: null,
  artistDetail: null,
  artistDetailLoading: false,
  artistDetailError: null,
  albumDetail: null,
  albumDetailLoading: false,
  albumDetailError: null,

  searchHistory: [],
  favorites: [],
  savingTrackIds: [],
  saveError: null,

  /*
   * ==========================================
   * SEARCH (filter-aware)
   * ==========================================
   */

  search: async (rawQuery) => {
    const query = rawQuery.trim();

    if (!query) {
      get().clearResults();
      return;
    }

    if (query.length < 2) {
      set({
        tracks: [],
        artists: [],
        albums: [],
        loading: false,
        error: "Search query must contain at least 2 characters",
      });
      return;
    }

    const filter = get().filter;

    set({ loading: true, error: null });

    try {
      const all = filter === "all";
      const needTracks = all || filter === "tracks";
      const needArtists = all || filter === "artists";
      const needAlbums = all || filter === "albums";

      const [trackRes, artistRes, albumRes] = await Promise.all([
        needTracks ? lastfmService.searchTracks(query) : null,
        needArtists ? lastfmService.searchArtists(query) : null,
        needAlbums ? lastfmService.searchAlbums(query) : null,
      ]);

      set({
        tracks: needTracks ? trackRes?.data ?? [] : [],
        artists: needArtists ? artistRes?.data ?? [] : [],
        albums: needAlbums ? albumRes?.data ?? [] : [],
        loading: false,
        error: null,
      });
    } catch (error) {
      set({
        tracks: [],
        artists: [],
        albums: [],
        loading: false,
        error: getErrorMessage(error, "Failed to search music"),
      });
    }
  },

  /*
   * ==========================================
   * SET QUERY / FILTER
   * ==========================================
   */

  setQuery: (query) => {
    set({ query });
  },

  setFilter: (filter) => {
    set({ filter });

    /*
     * Re-run the current search under the new filter.
     */
    const currentQuery = get().query.trim();

    if (currentQuery.length >= 2) {
      void get().search(currentQuery);
    }
  },

  /*
   * ==========================================
   * CLEAR RESULTS / ERROR
   * ==========================================
   */

  clearResults: () => {
    set({
      tracks: [],
      artists: [],
      albums: [],
      loading: false,
      error: null,
    });
  },

  clearError: () => {
    set({ error: null });
  },

  /*
   * ==========================================
   * LIBRARY (for "Already in Library" + Recently Added)
   * ==========================================
   */

  loadLibrary: async () => {
    if (get().libraryLoading) {
      return;
    }

    set({ libraryLoading: true });

    try {
      const songs = await songService.getSongs();

      set({
        librarySongs: songs,
        libraryKeys: new Set(
          songs.map((song) =>
            trackKey(song.artistId?.name ?? "", song.title),
          ),
        ),
        libraryLoading: false,
      });
    } catch (error) {
      console.error("Failed to load library:", error);
      set({ libraryLoading: false });
    }
  },

  refreshLibrary: async () => {
    try {
      const songs = await songService.getSongs();

      set({
        librarySongs: songs,
        libraryKeys: new Set(
          songs.map((song) =>
            trackKey(song.artistId?.name ?? "", song.title),
          ),
        ),
        libraryLoading: false,
      });
    } catch (error) {
      console.error("Failed to refresh library:", error);
      set({ libraryLoading: false });
    }
  },

  isInLibrary: (artist, title) => {
    return get().libraryKeys.has(trackKey(artist, title));
  },

  /*
   * ==========================================
   * DETAIL MODALS
   * ==========================================
   */

  openTrackDetail: (track) => {
    set({ detailTrack: track });
  },

  closeTrackDetail: () => {
    set({ detailTrack: null });
  },

  fetchArtistDetail: async (name) => {
    set({
      artistDetailLoading: true,
      artistDetailError: null,
      artistDetail: null,
    });

    try {
      const response = await lastfmService.getArtistInfo(name);

      set({
        artistDetail: response.data,
        artistDetailLoading: false,
      });
    } catch (error) {
      set({
        artistDetailLoading: false,
        artistDetailError: getErrorMessage(error, "Failed to load artist details"),
      });
    }
  },

  closeArtistDetail: () => {
    set({ artistDetail: null, artistDetailError: null });
  },

  fetchAlbumDetail: async (artist, album) => {
    set({
      albumDetailLoading: true,
      albumDetailError: null,
      albumDetail: null,
    });

    try {
      const response = await lastfmService.getAlbumInfo(artist, album);

      set({
        albumDetail: response.data,
        albumDetailLoading: false,
      });
    } catch (error) {
      set({
        albumDetailLoading: false,
        albumDetailError: getErrorMessage(error, "Failed to load album details"),
      });
    }
  },

  closeAlbumDetail: () => {
    set({ albumDetail: null, albumDetailError: null });
  },

  /*
   * ==========================================
   * SEARCH HISTORY
   * ==========================================
   */

  addToSearchHistory: (query) => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    set((state) => {
      // Remove duplicate if exists and add to beginning
      const filtered = state.searchHistory.filter(
        (q) => q.toLowerCase() !== trimmedQuery.toLowerCase(),
      );

      const updated = [trimmedQuery, ...filtered].slice(0, 10); // Keep last 10 searches

      // Save to localStorage
      localStorage.setItem(
        STORAGE_KEYS.SEARCH_HISTORY,
        JSON.stringify(updated),
      );

      return {
        searchHistory: updated,
      };
    });
  },

  clearSearchHistory: () => {
    localStorage.removeItem(STORAGE_KEYS.SEARCH_HISTORY);
    set({
      searchHistory: [],
    });
  },

  removeFromSearchHistory: (query) => {
    set((state) => {
      const updated = state.searchHistory.filter(
        (q) => q.toLowerCase() !== query.toLowerCase(),
      );

      localStorage.setItem(
        STORAGE_KEYS.SEARCH_HISTORY,
        JSON.stringify(updated),
      );

      return {
        searchHistory: updated,
      };
    });
  },

  /*
   * ==========================================
   * FAVORITES
   * ==========================================
   */

  addFavorite: (track) => {
    set((state) => {
      const isFav = state.favorites.some((t) => t.id === track.id);

      if (isFav) {
        return state;
      }

      const updated = [...state.favorites, track];

      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(updated));

      return {
        favorites: updated,
      };
    });
  },

  removeFavorite: (trackId) => {
    set((state) => {
      const updated = state.favorites.filter((t) => t.id !== trackId);

      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(updated));

      return {
        favorites: updated,
      };
    });
  },

  isFavorite: (trackId) => {
    return get().favorites.some((t) => t.id === trackId);
  },

  /*
   * ==========================================
   * LOAD FROM LOCAL STORAGE
   * ==========================================
   */

  loadFromLocalStorage: () => {
    try {
      const savedHistory = localStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY);
      const savedFavorites = localStorage.getItem(STORAGE_KEYS.FAVORITES);

      set({
        searchHistory: savedHistory ? JSON.parse(savedHistory) : [],
        favorites: savedFavorites ? JSON.parse(savedFavorites) : [],
      });
    } catch (error) {
      console.error("Failed to load from localStorage:", error);
    }
  },

  /*
   * ==========================================
   * SAVE TRACK TO LIBRARY
   * ==========================================
   */

  saveTrackToLibrary: async (track) => {
    set((state) => ({
      savingTrackIds: [...state.savingTrackIds, track.id],
      saveError: null,
    }));

    try {
      await lastfmService.addTrackToLibrary(track);

      set((state) => ({
        savingTrackIds: state.savingTrackIds.filter((id) => id !== track.id),
        saveError: null,
      }));
    } catch (error) {
      const message = getErrorMessage(error, "Failed to save track");

      set((state) => ({
        savingTrackIds: state.savingTrackIds.filter((id) => id !== track.id),
        saveError: message,
      }));

      throw error;
    }
  },

  /*
   * ==========================================
   * CLEAR SAVE ERROR
   * ==========================================
   */

  clearSaveError: () => {
    set({
      saveError: null,
    });
  },
}));
