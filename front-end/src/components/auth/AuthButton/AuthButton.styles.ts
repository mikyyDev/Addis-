import styled from "@emotion/styled";

export const Button = styled.button`
  width: 100%;

  padding: 16px;

  border: none;

  cursor: pointer;

  border-radius: ${({ theme }) => theme.borderRadius.md};

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  font-size: 17px;

  font-weight: 600;

  transition: 0.3s;

  margin-top: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};

    transform: translateY(-2px);
  }
`;
