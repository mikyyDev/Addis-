export interface StatsTotals {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
}

export interface GenreStat {
  genre: string;
  songCount: number;
}

export interface ArtistStat {
  artist: string;
  songCount: number;
  albumCount: number;
}

export interface AlbumStat {
  album: string;
  artist: string;
  songCount: number;
}

export type StatsPeriod = "all" | "7d" | "30d" | "3m" | "6m" | "1y";

export const STATS_PERIODS: { value: StatsPeriod; label: string }[] = [
  { value: "all", label: "All Time" },
  { value: "7d", label: "Last 7 Days" },
  { value: "30d", label: "Last 30 Days" },
  { value: "3m", label: "Last 3 Months" },
  { value: "6m", label: "Last 6 Months" },
  { value: "1y", label: "Last Year" },
];
