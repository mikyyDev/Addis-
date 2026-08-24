import { useMemo } from "react";
import { TrendingUp, Music, Users, Disc3, Clock, Star } from "lucide-react";

import { useStatStore } from "../../../store/stat.store";

import StatSection from "../StatSection/StatSection";

import {
  InsightsGrid,
  InsightCard,
  InsightIcon,
  InsightContent,
  InsightValue,
  InsightLabel,
} from "./LibraryInsights.styles";

const LibraryInsights = () => {
  const { totals, artists, albums, songs, genres, playlistCount } =
    useStatStore();

  const insights = useMemo(() => {
    const totalSongs = totals?.totalSongs ?? 0;
    const totalArtists = totals?.totalArtists ?? 0;
    const totalAlbums = totals?.totalAlbums ?? 0;

    // Average songs per artist
    const songsPerArtist =
      totalArtists > 0 ? (totalSongs / totalArtists).toFixed(1) : "0";

    // Average songs per album
    const songsPerAlbum =
      totalAlbums > 0 ? (totalSongs / totalAlbums).toFixed(1) : "0";

    // Most represented artist
    const topArtist =
      artists.length > 0
        ? [...artists].sort((a, b) => b.songCount - a.songCount)[0]
        : null;

    // Most represented genre
    const topGenre =
      genres.length > 0
        ? [...genres].sort((a, b) => b.songCount - a.songCount)[0]
        : null;

    // Newest addition
    const newest =
      songs.length > 0
        ? [...songs].sort(
            (a, b) =>
              new Date(b.createdAt).getTime() -
              new Date(a.createdAt).getTime(),
          )[0]
        : null;

    // Library density (songs per genre)
    const totalGenres = totals?.totalGenres ?? 0;
    const songsPerGenre =
      totalGenres > 0 ? (totalSongs / totalGenres).toFixed(1) : "0";

    return [
      {
        icon: <TrendingUp size={18} />,
        value: songsPerArtist,
        label: "Songs per artist",
        color: "#6c63ff",
      },
      {
        icon: <Disc3 size={18} />,
        value: songsPerAlbum,
        label: "Songs per album",
        color: "#ff6584",
      },
      {
        icon: <Music size={18} />,
        value: songsPerGenre,
        label: "Songs per genre",
        color: "#4fc3f7",
      },
      {
        icon: <Users size={18} />,
        value: topArtist?.artist ?? "—",
        label: "Most represented artist",
        color: "#10b981",
      },
      {
        icon: <Star size={18} />,
        value: topGenre?.genre ?? "—",
        label: "Most used genre",
        color: "#f97316",
      },
      {
        icon: <Clock size={18} />,
        value: newest?.title
          ? newest.title.length > 20
            ? newest.title.slice(0, 20) + "…"
            : newest.title
          : "—",
        label: "Newest addition",
        color: "#a78bfa",
      },
    ];
  }, [totals, artists, albums, songs, genres, playlistCount]);

  return (
    <StatSection title="Library Insights">
      <InsightsGrid>
        {insights.map((insight) => (
          <InsightCard key={insight.label}>
            <InsightIcon $color={insight.color}>{insight.icon}</InsightIcon>
            <InsightContent>
              <InsightValue title={String(insight.value)}>
                {insight.value}
              </InsightValue>
              <InsightLabel>{insight.label}</InsightLabel>
            </InsightContent>
          </InsightCard>
        ))}
      </InsightsGrid>
    </StatSection>
  );
};

export default LibraryInsights;
