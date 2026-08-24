import styled from "@emotion/styled";

export const ResultsContainer = styled.section`
  width: 100%;
`;

export const ResultsHeader = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 18px;
`;

export const ResultsTitle = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.text};

  font-size: 18px;

  font-weight: 700;
`;

export const ResultsCount = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 13px;
`;

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

  gap: 18px;

  width: 100%;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 12px;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const ErrorMessage = styled.div`
  padding: 24px;

  border: 1px solid rgba(255, 80, 80, 0.2);

  border-radius: 12px;

  background: rgba(255, 80, 80, 0.06);

  color: #ff6b6b;

  font-size: 14px;
`;
