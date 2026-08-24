import styled from "@emotion/styled";

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));

  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 12px;
  }

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const EmptyState = styled.div`
  padding: 70px 20px;

  text-align: center;
`;

export const EmptyTitle = styled.h3`
  margin: 0 0 8px;

  color: ${({ theme }) => theme.colors.text};

  font-size: 18px;
`;

export const EmptyMessage = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;
`;
