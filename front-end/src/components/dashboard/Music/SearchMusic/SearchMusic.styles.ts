import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;

  align-items: center;

  width: 300px;

  background: rgba(255, 255, 255, 0.05);

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 14px;

  padding: 12px 16px;

  transition: 0.25s;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};

    box-shadow: ${({ theme }) => theme.shadows.primary};
  }
`;

export const SearchIcon = styled.div`
  color: rgba(255, 255, 255, 0.6);

  margin-right: 12px;
`;

export const Input = styled.input`
  flex: 1;

  border: none;

  outline: none;

  background: transparent;

  color: white;

  font-size: 15px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }
`;
