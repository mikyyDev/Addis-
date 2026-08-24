import { useLastFMStore } from "../../../store/lastfm.store";

import TrackCard from "../TrackCard/TrackCard";
import LastFMEmpty from "../LastFMEmpty/LastFMEmpty";
import LastFMSkeleton from "../LastFMSkeleton/LastFMSkeleton";

import {
  ResultsContainer,
  ResultsHeader,
  ResultsTitle,
  ResultsCount,
  Grid,
  ErrorMessage,
} from "./LastFMResults.styles";

const LastFMResults = () => {
  const { tracks, loading, error, query } = useLastFMStore();

  if (loading) {
    return (
      <ResultsContainer>
        <Grid>
          {Array.from({ length: 6 }).map((_, index) => (
            <LastFMSkeleton key={index} />
          ))}
        </Grid>
      </ResultsContainer>
    );
  }

  if (error) {
    return (
      <ResultsContainer>
        <ErrorMessage>{error}</ErrorMessage>
      </ResultsContainer>
    );
  }

  if (!tracks.length) {
    return <LastFMEmpty query={query} />;
  }

  return (
    <ResultsContainer>
      <ResultsHeader>
        <ResultsTitle>Search Results</ResultsTitle>

        <ResultsCount>
          {tracks.length} {tracks.length === 1 ? "result" : "results"}
        </ResultsCount>
      </ResultsHeader>

      <Grid>
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </Grid>
    </ResultsContainer>
  );
};

export default LastFMResults;
