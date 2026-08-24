import { useStatStore } from "../../../store/stat.store";

import StatSection from "../StatSection/StatSection";

import {
  LibraryGrid,
  LibraryCell,
  LibraryValue,
  LibraryLabel,
} from "./LibraryStats.styles";

const LibraryStats = () => {
  const { totals, playlistCount } = useStatStore();

  return (
    <StatSection title="Music Library">
      <LibraryGrid>
        <LibraryCell>
          <LibraryValue>{totals?.totalSongs ?? 0}</LibraryValue>
          <LibraryLabel>Songs</LibraryLabel>
        </LibraryCell>

        <LibraryCell>
          <LibraryValue>{totals?.totalAlbums ?? 0}</LibraryValue>
          <LibraryLabel>Albums</LibraryLabel>
        </LibraryCell>

        <LibraryCell>
          <LibraryValue>{totals?.totalArtists ?? 0}</LibraryValue>
          <LibraryLabel>Artists</LibraryLabel>
        </LibraryCell>

        <LibraryCell>
          <LibraryValue>{totals?.totalGenres ?? 0}</LibraryValue>
          <LibraryLabel>Genres</LibraryLabel>
        </LibraryCell>

        <LibraryCell>
          <LibraryValue>{playlistCount}</LibraryValue>
          <LibraryLabel>Playlists</LibraryLabel>
        </LibraryCell>
      </LibraryGrid>
    </StatSection>
  );
};

export default LibraryStats;
