import { Music2, Mic2, Disc3, ListMusic, Clock } from "lucide-react";

import { useSongStore } from "../../../../store/song.store";
import { usePlaylistStore } from "../../../../store/playlist.store";

import {
  Container,
  StatCard,
  StatIcon,
  StatValue,
  StatLabel,
} from "./QuickStats.styles";

const QuickStats = () => {
  const { songs } = useSongStore();
  const { playlists } = usePlaylistStore();

  const uniqueArtists = new Set(songs.map((s) => s.artistId?._id).filter(Boolean)).size;
  const uniqueAlbums = new Set(songs.map((s) => s.albumId?._id).filter(Boolean)).size;

  const recentCount = songs.filter((s) => {
    const d = new Date(s.createdAt);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    return diff < 7 * 24 * 60 * 60 * 1000;
  }).length;

  const stats = [
    { icon: Music2, value: songs.length, label: "Songs", color: "#7c3aed" },
    { icon: Mic2, value: uniqueArtists, label: "Artists", color: "#ec4899" },
    { icon: Disc3, value: uniqueAlbums, label: "Albums", color: "#06b6d4" },
    { icon: ListMusic, value: playlists.length, label: "Playlists", color: "#f59e0b" },
    { icon: Clock, value: recentCount, label: "This Week", color: "#10b981" },
  ];

  return (
    <Container>
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <StatCard key={stat.label}>
            <StatIcon $color={stat.color}>
              <Icon size={20} />
            </StatIcon>
            <StatValue>{stat.value}</StatValue>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        );
      })}
    </Container>
  );
};

export default QuickStats;
