import { useMemo } from "react";
import { Disc3 } from "lucide-react";

import { useStatStore } from "../../../store/stat.store";

import StatSection from "../StatSection/StatSection";
import StatEmpty from "../StatEmpty/StatEmpty";

import {
  AlbumsGrid,
  AlbumCard,
  AlbumArtwork,
  AlbumPlaceholder,
  AlbumOverlay,
  AlbumSongCount,
  AlbumInfo,
  AlbumTitle,
  AlbumArtistName,
  AlbumRank,
} from "./TopAlbums.styles";

const TopAlbums = () => {
  const { albums } = useStatStore();

  const topAlbums = useMemo(
    () => [...albums].sort((a, b) => b.songCount - a.songCount).slice(0, 8),
    [albums],
  );

  if (topAlbums.length === 0) {
    return (
      <StatSection title="Most Represented Albums">
        <StatEmpty>No album data yet.</StatEmpty>
      </StatSection>
    );
  }

  return (
    <StatSection
      title="Most Represented Albums"
      count={`${albums.length} total`}
    >
      <AlbumsGrid>
        {topAlbums.map((album, index) => (
          <AlbumCard key={album.album} $rank={index + 1}>
            <AlbumArtwork>
              <AlbumPlaceholder>
                <Disc3 size={28} />
              </AlbumPlaceholder>

              <AlbumOverlay>
                <AlbumSongCount>
                  {album.songCount} {album.songCount === 1 ? "song" : "songs"}
                </AlbumSongCount>
              </AlbumOverlay>

              <AlbumRank>{index + 1}</AlbumRank>
            </AlbumArtwork>

            <AlbumInfo>
              <AlbumTitle title={album.album}>{album.album}</AlbumTitle>
              <AlbumArtistName title={album.artist}>
                {album.artist}
              </AlbumArtistName>
            </AlbumInfo>
          </AlbumCard>
        ))}
      </AlbumsGrid>
    </StatSection>
  );
};

export default TopAlbums;
