import styled from "@emotion/styled";

export const LastFMContainer = styled.div`
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
  padding: 42px 2.5rem 2rem;
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

export const HeaderSearchLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 420px);
  align-items: start;
  gap: 40px;
  margin-bottom: 36px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

export const SearchSection = styled.section`
  position: relative;
  width: 100%;
  z-index: 20;
`;

export const ResultsSection = styled.section`
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const ResultsStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const ResultsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 6px;
  }
`;

export const ResultsTitle = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const ResultsCount = styled.span`
  color: rgba(255, 255, 255, 0.35);
  font-size: 13px;
  font-weight: 500;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 16px 18px;
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 12px;
  background: rgba(239, 68, 68, 0.06);
  color: #f87171;
  font-size: 14px;
  line-height: 1.5;
`;

export const TrackListHeader = styled.div`
  display: grid;
  grid-template-columns: 28px 48px 1fr auto;
  gap: 14px;
  align-items: center;
  padding: 0 14px 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 4px;

  color: rgba(255, 255, 255, 0.3);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    grid-template-columns: 42px 1fr auto;
    gap: 8px;
    padding: 0 8px 8px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
