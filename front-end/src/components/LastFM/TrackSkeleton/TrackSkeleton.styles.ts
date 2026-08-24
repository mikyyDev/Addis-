import styled from "@emotion/styled";

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 12px 14px;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 10px 8px;
    gap: 10px;
  }
`;

const shimmerBase = `
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04) 25%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.04) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
`;

export const IndexShimmer = styled.div`
  width: 28px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 4px;
  ${shimmerBase}
`;

export const ArtworkShimmer = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 8px;
  ${shimmerBase}

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
  }
`;

export const InfoGroup = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleShimmer = styled.div`
  width: 60%;
  height: 16px;
  border-radius: 6px;
  ${shimmerBase}
`;

export const ArtistShimmer = styled.div`
  width: 35%;
  height: 12px;
  border-radius: 6px;
  ${shimmerBase}
`;

export const ActionsShimmer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  .btn {
    width: 34px;
    height: 34px;
    border-radius: 8px;
    flex-shrink: 0;
    ${shimmerBase}
  }

  .btn.wide {
    width: 80px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
