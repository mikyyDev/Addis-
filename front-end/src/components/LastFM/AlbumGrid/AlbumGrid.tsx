import { useLastFMStore } from "../../../store/lastfm.store";

import AlbumCard from "../AlbumCard/AlbumCard";
import TrackSkeleton from "../TrackSkeleton/TrackSkeleton";

import { Grid } from "./AlbumGrid.styles";

const AlbumGrid = () => {
  const { albums, loading, fetchAlbumDetail } = useLastFMStore();

  if (loading && albums.length === 0) {
    return (
      <Grid>
        {Array.from({ length: 8 }).map((_, index) => (
          <TrackSkeleton key={index} />
        ))}
      </Grid>
    );
  }

  if (albums.length === 0) {
    return null;
  }

  return (
    <Grid>
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          album={album}
          onOpen={() => fetchAlbumDetail(album.artist, album.name)}
        />
      ))}
    </Grid>
  );
};

export default AlbumGrid;
