import styled from "@emotion/styled";

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));

  gap: 22px;

  width: 100%;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 14px;
  }

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`;

export const ErrorMessage = styled.div`
  padding: 24px;

  border: 1px solid rgba(255, 80, 80, 0.25);

  border-radius: 14px;

  background: rgba(255, 80, 80, 0.08);

  color: #ff8b8b;

  text-align: center;
`;
