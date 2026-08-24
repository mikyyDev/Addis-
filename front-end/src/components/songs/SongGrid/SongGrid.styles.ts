import styled from "@emotion/styled";

export const TableWrap = styled.div`
  display: flex;

  flex-direction: column;

  gap: 0.6rem;

  padding-bottom: 2rem;
`;

export const SkeletonRow = styled.div`
  display: flex;

  align-items: center;

  gap: 1rem;

  padding: 0.9rem 1rem;

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.05);

  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const SkeletonThumb = styled.div`
  width: 46px;

  height: 46px;

  flex-shrink: 0;

  border-radius: 10px;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.06) 25%,
    rgba(255, 255, 255, 0.14) 50%,
    rgba(255, 255, 255, 0.06) 75%
  );

  background-size: 200% 100%;

  animation: shimmer 1.4s infinite;

  @keyframes shimmer {
    to {
      background-position: -200% 0;
    }
  }
`;

interface SkeletonCellProps {
  width: string;
}

export const SkeletonCell = styled.div<SkeletonCellProps>`
  height: 14px;

  flex-shrink: 0;

  border-radius: 6px;

  width: ${({ width }) => width};

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.06) 25%,
    rgba(255, 255, 255, 0.14) 50%,
    rgba(255, 255, 255, 0.06) 75%
  );

  background-size: 200% 100%;

  animation: shimmer 1.4s infinite;

  @keyframes shimmer {
    to {
      background-position: -200% 0;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;

  align-items: center;

  justify-content: flex-end;

  gap: 1rem;

  padding: 0.5rem 0 2rem;

  @media (max-width: 640px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export const PageButton = styled.button`
  display: flex;

  align-items: center;

  gap: 0.4rem;

  padding: 0.6rem 1.1rem;

  border-radius: 50px;

  border: 1px solid rgba(255, 255, 255, 0.12);

  background: rgba(255, 255, 255, 0.08);

  color: white;

  font-size: 0.9rem;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover:not(:disabled) {
    background: rgba(139, 92, 246, 0.25);

    border-color: rgba(139, 92, 246, 0.5);
  }

  &:disabled {
    opacity: 0.4;

    cursor: not-allowed;
  }
`;

export const PageIndicator = styled.span`
  color: rgba(255, 255, 255, 0.55);

  font-size: 0.85rem;

  white-space: nowrap;
`;
