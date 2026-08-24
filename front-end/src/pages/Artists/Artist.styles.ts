import styled from "@emotion/styled";

export const ArtistContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  width: 100%;

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

  width: calc(100% - 350px);
  min-width: 0;

  margin-left: 350px;
  padding: 24px 48px 60px 34px;

  box-sizing: border-box;

  overflow-x: hidden;

  @media (max-width: 1200px) {
    margin-left: 300px;
    width: calc(100% - 300px);
  }

  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0;
    padding: 16px;
    min-height: 100vh;
  }
`;
