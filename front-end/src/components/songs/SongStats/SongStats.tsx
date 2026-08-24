import { useEffect, useMemo, useState } from "react";

import { Music2, Mic2, Disc3, Tag, Plus } from "lucide-react";

import { useSongStore } from "../../../store/song.store";
import { statService } from "../../../services/stat.service";

import type { StatsTotals } from "../../../types/stat.types";

import {
  StatsRow,
  StatCard,
  StatIcon,
  StatInfo,
  StatValue,
  StatLabel,
  AddButton,
} from "./SongStats.styles";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
}

const StatItem = ({ icon, value, label }: StatItemProps) => (
  <StatCard>
    <StatIcon>{icon}</StatIcon>

    <StatInfo>
      <StatValue>{value}</StatValue>

      <StatLabel>{label}</StatLabel>
    </StatInfo>
  </StatCard>
);

const SongStats = () => {
  const { songs, openCreateSongModal } = useSongStore();

  const [totals, setTotals] = useState<StatsTotals | null>(null);

  // Fallback computed from the loaded songs while the server totals arrive.
  const fallback = useMemo(() => {
    const artists = new Set<string>();
    const albums = new Set<string>();
    const genres = new Set<string>();

    for (const song of songs) {
      if (song.artistId?._id) {
        artists.add(song.artistId._id);
      }

      if (song.albumId?._id) {
        albums.add(song.albumId._id);
      }

      for (const genre of song.genre ?? []) {
        if (genre?._id) {
          genres.add(genre._id);
        }
      }
    }

    return {
      songs: songs.length,
      artists: artists.size,
      albums: albums.size,
      genres: genres.size,
    };
  }, [songs]);

  // The authoritative counts come from the backend over the whole library,
  // so they stay correct regardless of search/filter state.
  useEffect(() => {
    let active = true;

    statService
      .getTotals()
      .then((data) => {
        if (active) {
          setTotals(data);
        }
      })
      .catch(() => {
        // Keep the previous/fallback values on error.
      });

    return () => {
      active = false;
    };
  }, [songs]);

  const display = {
    songs: totals?.totalSongs ?? fallback.songs,
    albums: totals?.totalAlbums ?? fallback.albums,
    artists: totals?.totalArtists ?? fallback.artists,
    genres: totals?.totalGenres ?? fallback.genres,
  };

  return (
    <StatsRow>
      <StatItem
        icon={<Music2 size={22} />}
        value={display.songs}
        label="Total Songs"
      />

      <StatItem
        icon={<Disc3 size={22} />}
        value={display.albums}
        label="Total Albums"
      />

      <StatItem
        icon={<Mic2 size={22} />}
        value={display.artists}
        label="Total Artists"
      />

      <StatItem
        icon={<Tag size={22} />}
        value={display.genres}
        label="Total Genres"
      />

      <AddButton onClick={openCreateSongModal}>
        <Plus size={18} />
        Add Song
      </AddButton>
    </StatsRow>
  );
};

export default SongStats;
