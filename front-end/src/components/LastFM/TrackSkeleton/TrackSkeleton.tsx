import {
  Row,
  IndexShimmer,
  ArtworkShimmer,
  InfoGroup,
  TitleShimmer,
  ArtistShimmer,
  ActionsShimmer,
} from "./TrackSkeleton.styles";

const TrackSkeleton = () => {
  return (
    <Row>
      <IndexShimmer />
      <ArtworkShimmer />
      <InfoGroup>
        <TitleShimmer />
        <ArtistShimmer />
      </InfoGroup>
      <ActionsShimmer>
        <div className="btn" />
        <div className="btn wide" />
        <div className="btn" />
      </ActionsShimmer>
    </Row>
  );
};

export default TrackSkeleton;
