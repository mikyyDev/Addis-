import styled from "@emotion/styled";

export const StatisticsContainer = styled.div`
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

export const ContentGrid = styled.div<{ $compactTop?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: ${({ $compactTop }) => ($compactTop ? "24px" : "32px")};

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const FullWidth = styled.div`
  grid-column: 1 / -1;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
`;

export const ErrorBox = styled.div`
  margin: 24px 0;
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid rgba(239, 68, 68, 0.35);
  background: rgba(239, 68, 68, 0.08);
  color: #f87171;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
`;

export const RetryButton = styled.button`
  padding: 8px 18px;
  border: none;
  border-radius: 10px;
  background: #ef4444;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #dc2626;
  }
`;

export const Skeleton = styled.div`
  height: 120px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.05);
  animation: pulse 1.6s ease-in-out infinite;

  & + & {
    margin-top: 20px;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
  }
`;
