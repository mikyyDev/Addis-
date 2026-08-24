import styled from "@emotion/styled";

interface InputWrapperProps {
  hasError: boolean;
}

export const Container = styled.div`
  margin-bottom: 20px;

  display: grid;

  grid-template-columns: 90px minmax(0, 1fr);

  align-items: start;

  column-gap: 20px;
`;

export const Label = styled.label`
  width: 90px;

  flex-shrink: 0;

  color: white;

  font-size: 15px;

  font-weight: 600;

  padding-top: 12px;
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  min-width: 0;

  display: flex;

  align-items: center;
  width: 100%;

  background: rgba(255, 255, 255, 0.05);

  border-radius: ${({ theme }) => theme.borderRadius.md};

  padding: 12px 16px;

  border: 2px solid
    ${({ hasError }) => (hasError ? "#ef4444" : "rgba(255,255,255,.08)")};

  transition: all 0.3s ease;

  &:focus-within {
    border-color: ${({ hasError, theme }) =>
      hasError ? "#ef4444" : theme.colors.primary};

    box-shadow: ${({ hasError, theme }) =>
      hasError ? "0 0 0 3px rgba(239,68,68,.15)" : theme.shadows.primary};
  }
`;

export const LeftIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};

  display: flex;

  align-items: center;

  margin-right: 12px;
`;

export const RightIcon = styled.button`
  border: none;

  background: transparent;

  color: ${({ theme }) => theme.colors.textSecondary};

  display: flex;

  align-items: center;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledInput = styled.input`
  flex: 1;

  border: none;

  background: transparent;

  outline: none;

  color: white;

  font-size: 15px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }
`;

export const ErrorText = styled.p`
  margin-top: 6px;

  margin-left: 0;

  color: #ef4444;

  font-size: 13px;

  font-weight: 500;

  overflow-wrap: anywhere;
`;
