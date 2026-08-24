import styled from "@emotion/styled";

const pulse = `
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 0.4;
    }

    50% {
      opacity: 0.8;
    }

    100% {
      opacity: 0.4;
    }
  }
`;

export const Card = styled.div`
  min-width: 0;
`;

export const Image = styled.div`
  width: 100%;

  aspect-ratio: 1 / 1;

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.07);

  ${pulse}
`;

export const Title = styled.div`
  width: 70%;

  height: 14px;

  margin-top: 12px;

  border-radius: 5px;

  background: rgba(255, 255, 255, 0.07);

  ${pulse}
`;

export const Artist = styled.div`
  width: 45%;

  height: 11px;

  margin-top: 8px;

  border-radius: 5px;

  background: rgba(255, 255, 255, 0.05);

  ${pulse}
`;
