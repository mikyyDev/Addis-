import {
  STATS_PERIODS,
  type StatsPeriod,
} from "../types/stat.types";
import type { Song } from "../types/song.types";

export const PERIOD_DAYS: Record<Exclude<StatsPeriod, "all">, number> = {
  "7d": 7,
  "30d": 30,
  "3m": 90,
  "6m": 180,
  "1y": 365,
};

export const DAY_MS = 24 * 60 * 60 * 1000;

export const DONUT_COLORS = [
  "#6C63FF",
  "#8B83FF",
  "#FF6584",
  "#4FC3F7",
  "#10B981",
  "#F97316",
  "#FACC15",
  "#A78BFA",
];

export const DONUT_RADIUS = 40;
export const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_RADIUS;

export const getPeriodLabel = (period: StatsPeriod): string => {
  if (period === "all") {
    return "All time";
  }

  return STATS_PERIODS.find((option) => option.value === period)?.label ?? period;
};

export const filterByPeriod = (songs: Song[], period: StatsPeriod): Song[] => {
  if (period === "all") {
    return songs;
  }

  const cutoff = Date.now() - PERIOD_DAYS[period] * DAY_MS;

  return songs.filter((song) => new Date(song.createdAt).getTime() >= cutoff);
};

export const formatRelativeTime = (iso: string): string => {
  const diff = Date.now() - new Date(iso).getTime();
  const minutes = Math.floor(diff / 60000);

  if (minutes < 1) {
    return "Just now";
  }

  if (minutes < 60) {
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  }

  const days = Math.floor(hours / 24);

  if (days === 1) {
    return "Yesterday";
  }

  if (days < 7) {
    return `${days} days ago`;
  }

  return new Date(iso).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const countSince = (songs: Song[], days: number): number => {
  const cutoff = Date.now() - days * DAY_MS;

  return songs.filter((song) => new Date(song.createdAt).getTime() >= cutoff)
    .length;
};

export interface ActivityBucket {
  label: string;
  count: number;
  isToday: boolean;
}

export const buildActivity = (
  songs: Song[],
  period: StatsPeriod,
): ActivityBucket[] => {
  const days = period === "all" ? 30 : PERIOD_DAYS[period];

  const buckets: ActivityBucket[] = [];

  for (let i = days - 1; i >= 0; i--) {
    const day = new Date();
    day.setHours(0, 0, 0, 0);
    day.setDate(day.getDate() - i);

    buckets.push({
      label: day.toLocaleDateString(undefined, {
        weekday: "short",
      }),
      count: 0,
      isToday: i === 0,
    });
  }

  const byKey = new Map<string, ActivityBucket>();

  buckets.forEach((bucket, index) => {
    const day = new Date();
    day.setHours(0, 0, 0, 0);
    day.setDate(day.getDate() - (days - 1 - index));
    byKey.set(day.toISOString().slice(0, 10), bucket);
  });

  songs.forEach((song) => {
    const key = new Date(song.createdAt).toISOString().slice(0, 10);
    const bucket = byKey.get(key);

    if (bucket) {
      bucket.count += 1;
    }
  });

  return buckets;
};
