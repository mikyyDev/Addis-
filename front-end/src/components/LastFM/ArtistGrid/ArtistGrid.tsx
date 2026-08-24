import { useLastFMStore } from "../../../store/lastfm.store";

import ArtistCard from "../ArtistCard/ArtistCard";
import TrackSkeleton from "../TrackSkeleton/TrackSkeleton";

import { Grid } from "./ArtistGrid.styles";

const ArtistGrid = () => {
  const { artists, loading, fetchArtistDetail } = useLastFMStore();

  if (loading && artists.length === 0) {
    return (
      <Grid>
        {Array.from({ length: 8 }).map((_, index) => (
          <TrackSkeleton key={index} />
        ))}
      </Grid>
    );
  }

  if (artists.length === 0) {
    return null;
  }

  return (
    <Grid>
      {artists.map((artist) => (
        <ArtistCard
          key={artist.id}
          artist={artist}
          onOpen={() => fetchArtistDetail(artist.name)}
        />
      ))}
    </Grid>
  );
};

export default ArtistGrid;
