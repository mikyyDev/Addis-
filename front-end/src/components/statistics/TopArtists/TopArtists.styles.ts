import styled from "@emotion/styled";

export const RankingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RankingRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 14px 12px;
  border-radius: 12px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }

  @media (max-width: 480px) {
    gap: 10px;
    padding: 10px 8px;
  }
`;

export const RankNumber = styled.span<{ $top: boolean }>`
  flex-shrink: 0;
  width: 32px;
  padding-top: 2px;

  color: ${({ $top, theme }) =>
    $top ? theme.colors.primary : theme.colors.textMuted};
  font-size: 15px;
  font-weight: ${({ $top }) => ($top ? 800 : 600)};
  font-variant-numeric: tabular-nums;
`;

export const RankInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const RankName = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const RankMeta = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
`;

export const RankBar = styled.div`
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  overflow: hidden;
  margin-bottom: 8px;
`;

export const RankBarFill = styled.div<{ width: number; $top: boolean }>`
  height: 100%;
  width: ${({ width }) => width}%;
  border-radius: 999px;
  background: ${({ $top }) =>
    $top
      ? "linear-gradient(90deg, #6c63ff, #ff6584)"
      : "linear-gradient(90deg, rgba(108,99,255,0.6), rgba(108,99,255,0.3))"};
  transition: width 0.6s ease;
`;

export const RankStats = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

export const RankStat = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 12px;

  strong {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 600;
  }
`;
