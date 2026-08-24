import styled from "@emotion/styled";

export const ActivityStats = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 8px 16px;
  }
`;

export const ActivityStat = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
`;

export const ActivityStatValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

export const ActivityStatLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  font-weight: 500;
`;

export const ActivityStatDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.textMuted};
  opacity: 0.5;
  margin: 0 4px;
`;

export const ChartContainer = styled.div`
  position: relative;
`;

export const ChartBars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 120px;

  @media (max-width: 480px) {
    height: 80px;
  }
`;

export const BarColumn = styled.div`
  flex: 1;
  min-width: 2px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const ActivityBar = styled.div<{ height: number; $isToday?: boolean }>`
  width: 100%;
  max-width: 18px;
  height: ${({ height }) => Math.max(height, 2)}%;
  border-radius: 3px 3px 0 0;
  background: ${({ $isToday }) =>
    $isToday
      ? "linear-gradient(180deg, #FF6584, #6C63FF)"
      : "rgba(108, 99, 255, 0.5)"};
  opacity: ${({ height }) => (height === 0 ? 0.15 : 0.9)};
  transition: height 0.4s ease, opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const ChartAxis = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

export const AxisLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 10px;
  font-weight: 500;
  opacity: 0.7;
`;
