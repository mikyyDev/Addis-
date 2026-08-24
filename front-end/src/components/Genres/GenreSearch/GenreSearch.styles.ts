import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 480px;

  margin-bottom: 28px;
`;

export const SearchIcon = styled.span`
  position: absolute;

  left: 14px;
  top: 50%;

  display: flex;

  color: ${({ theme }) => theme.colors.textSecondary};

  transform: translateY(-50%);

  pointer-events: none;
`;

export const Input = styled.input`
  width: 100%;

  box-sizing: border-box;

  padding: 12px 42px 12px 42px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 12px;

  outline: none;

  background: rgba(255, 255, 255, 0.04);

  color: ${({ theme }) => theme.colors.text};

  font-size: 14px;

  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};

    background: rgba(255, 255, 255, 0.06);
  }
`;

export const ClearButton = styled.button`
  position: absolute;

  right: 10px;
  top: 50%;

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 8px;

  background: transparent;

  color: ${({ theme }) => theme.colors.textSecondary};

  cursor: pointer;

  transform: translateY(-50%);

  &:hover {
    background: rgba(255, 255, 255, 0.07);

    color: ${({ theme }) => theme.colors.text};
  }
`;
