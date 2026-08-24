import styled from "@emotion/styled";

export const Button = styled.button`
  width: 100%;

  padding: 15px;

  background: transparent;

  border: 1px solid #444;

  border-radius: ${({ theme }) => theme.borderRadius.md};

  display: flex;

  justify-content: center;

  align-items: center;

  gap: 12px;

  color: white;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
