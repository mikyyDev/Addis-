import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 20px;

  display: grid;

  grid-template-columns: 90px minmax(0, 1fr);

  align-items: start;

  column-gap: 20px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    row-gap: 6px;
  }
`;

export const Label = styled.label`
  color: white;
  margin-top: 20px;

  font-weight: 600;

  font-size: 1rem;

  white-space: nowrap;

  width: 80px;

  flex-shrink: 0;

  @media (max-width: 400px) {
    width: auto;
    margin-top: 0;
  }
`;

interface WrapperProps {
  hasError: boolean;
}

export const InputWrapper = styled.div<WrapperProps>`
  grid-column: 2;

  @media (max-width: 400px) {
    grid-column: 1;
  }

  min-width: 0;

  display: flex;
  align-items: center;

  padding: 15px;

  border-radius: ${({ theme }) => theme.borderRadius.md};

  background: ${({ theme }) => theme.colors.surface};

  border: 2px solid ${({ hasError }) => (hasError ? "#ff4d4f" : "transparent")};

  transition: 0.3s;

  &:focus-within {
    border-color: ${({ hasError, theme }) =>
      hasError ? "#ff4d4f" : theme.colors.primary};
  }
`;

export const Icon = styled.div`
  margin-right: 12px;

  color: ${({ theme }) => theme.colors.primary};

  display: flex;

  align-items: center;
`;

export const StyledInput = styled.input`
  flex: 1;

  background: none;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0 1000px transparent inset;
    transition: background-color 9999s ease-in-out 0s;
  }

  border: none;

  color: white;

  font-size: 15px;

  outline: none;
`;
export const ErrorText = styled.p`
  grid-column: 2;

  @media (max-width: 400px) {
    grid-column: 1;
  }

  min-width: 0;

  color: #ff4d4f;

  font-size: 13px;

  margin: 8px 0 0;

  overflow-wrap: anywhere;
`;
