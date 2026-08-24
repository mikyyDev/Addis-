import {
  SkeletonCard,
  ImageSkeleton,
  TextSkeleton,
  SmallTextSkeleton,
} from "./AlbumSkeleton.styles";

const AlbumSkeleton = () => {
  return (
    <SkeletonCard>
      <ImageSkeleton />

      <TextSkeleton />

      <SmallTextSkeleton />
    </SkeletonCard>
  );
};

export default AlbumSkeleton;
