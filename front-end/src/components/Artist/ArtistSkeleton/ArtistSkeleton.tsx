import {
  SkeletonCard,
  SkeletonIcon,
  SkeletonText,
} from "./ArtistSkeleton.styles";

const ArtistSkeleton = () => {
  return (
    <SkeletonCard>
      <SkeletonIcon />

      <SkeletonText />
    </SkeletonCard>
  );
};

export default ArtistSkeleton;
