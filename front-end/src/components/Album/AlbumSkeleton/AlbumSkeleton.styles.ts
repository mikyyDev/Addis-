import styled from "@emotion/styled";

export const SkeletonCard = styled.div`
  min-width: 0;
`;

export const ImageSkeleton = styled.div`
  width: 100%;

  aspect-ratio: 1 / 1;

  border-radius: 14px;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 25%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 75%
  );

  background-size: 200% 100%;

  animation: shimmer 1.5s infinite;

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }

    100% {
      background-position: -200% 0;
    }
  }
`;

export const TextSkeleton = styled.div`
  height: 16px;

  margin-top: 12px;

  border-radius: 6px;

  background: rgba(255, 255, 255, 0.08);

  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.45;
    }

    50% {
      opacity: 0.8;
    }
  }
`;

export const SmallTextSkeleton = styled.div`
  width: 65%;

  height: 13px;

  margin-top: 8px;

  border-radius: 6px;

  background: rgba(255, 255, 255, 0.06);

  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.4;
    }

    50% {
      opacity: 0.75;
    }
  }
`;
