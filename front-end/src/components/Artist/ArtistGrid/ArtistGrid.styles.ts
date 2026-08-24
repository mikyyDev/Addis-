import styled from "@emotion/styled";

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));

  gap: 22px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 14px;
  }

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`;

export const ErrorMessage = styled.p`
  padding: 48px 20px;

  color: #ff8e9a;

  font-size: 14px;
  text-align: center;
`;
