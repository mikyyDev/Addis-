import styled from "@emotion/styled";

/* ─── Bubble Visualization ─── */

export const BubbleContainer = styled.div`
  margin-bottom: 24px;
`;

export const BubbleRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  min-height: 100px;
`;

export const Bubble = styled.div<{ $size: number; $color: string }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;

  background: ${({ $color }) => `${$color}18`};
  border: 1.5px solid ${({ $color }) => `${$color}40`};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: scale(1.08);
    border-color: ${({ $color }) => `${$color}88`};
  }
`;

export const BubbleInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  text-align: center;
  padding: 4px;
`;

export const BubbleLabel = styled.span`
  color: rgba(255, 255, 255, 0.85);
  font-size: 10px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 70px;
`;

export const BubbleCount = styled.span`
  color: rgba(255, 255, 255, 0.55);
  font-size: 9px;
  font-weight: 500;
`;

/* ─── Legend with Bars ─── */

export const LegendList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LegendRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LegendDot = styled.span<{ $color: string }>`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`;

export const LegendName = styled.span`
  flex: 0 0 100px;
  min-width: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const LegendBar = styled.div`
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  overflow: hidden;
`;

export const LegendBarFill = styled.div<{
  $width: number;
  $color: string;
}>`
  height: 100%;
  width: ${({ $width }) => $width}%;
  border-radius: 999px;
  background: ${({ $color }) => $color};
  transition: width 0.5s ease;
`;

export const LegendValue = styled.span`
  flex-shrink: 0;
  width: 42px;
  text-align: right;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
`;
