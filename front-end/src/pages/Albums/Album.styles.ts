import styled from "@emotion/styled";

export const AlbumContainer = styled.div`
  position: relative;

  display: flex;

  min-height: 100vh;

  background: linear-gradient(
    135deg,
    #150a2b 0%,
    #2a1452 45%,
    #3b1d6e 70%,
    #4c1d95 100%
  );

  &::before {
    position: fixed;
    inset: 0;
    z-index: 0;

    content: "";
    pointer-events: none;

    background: radial-gradient(
      ellipse at top right,
      rgba(139, 92, 246, 0.25) 0%,
      transparent 60%
    );
  }
`;

export const MainContent = styled.main`
  position: relative;
  z-index: 1;

  flex: 1;

  display: flex;
  flex-direction: column;

  min-width: 0;
  min-height: 100vh;

  margin-left: clamp(300px, 22vw, 360px);

  padding: 42px 2rem 2rem;

  overflow-y: auto;

  @media (max-width: 1200px) {
    margin-left: 300px;
  }

  @media (max-width: 900px) {
    margin-left: 0;
    padding: 16px;
    min-height: 100vh;
  }
`;
