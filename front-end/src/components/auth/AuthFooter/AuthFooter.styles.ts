import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 30px;

  text-align: center;

  color: #aaa;

  a {
    margin-left: 8px;

    color: ${({ theme }) => theme.colors.primary};

    font-weight: 600;

    text-decoration: none;
  }
`;
