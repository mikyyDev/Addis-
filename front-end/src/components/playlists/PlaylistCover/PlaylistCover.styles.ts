import styled from "@emotion/styled";

export const Cover = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 1 / 1;

  overflow: hidden;

  background: linear-gradient(135deg, #6c63ff 0%, #ff6584 100%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Collage = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  gap: 2px;

  background: rgba(0, 0, 0, 0.35);
`;

export const CollageCell = styled.div<{ filled: boolean }>`
  position: relative;

  min-width: 0;
  min-height: 0;

  overflow: hidden;

  background: ${({ filled }) =>
    filled ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.35)"};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Placeholder = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, 0.85);
`;
