import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;

  flex-direction: column;

  gap: 90px;

  @media (max-width: 640px) {
    gap: 32px;
  }
`;

export const FormGroup = styled.div`
  display: flex;

  flex-direction: column;

  gap: 8px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};

  font-size: 14px;

  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;

  box-sizing: border-box;

  padding: 12px 14px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 9px;

  outline: none;

  background: rgba(255, 255, 255, 0.05);

  color: ${({ theme }) => theme.colors.text};

  font-size: 14px;

  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ErrorText = styled.span`
  color: #ff5c5c;

  font-size: 12px;
`;

export const Actions = styled.div`
  display: flex;

  justify-content: flex-end;

  gap: 10px;

  margin-top: 4px;
`;

export const CancelButton = styled.button`
  padding: 10px 18px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 9px;

  background: transparent;

  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }

  &:disabled {
    opacity: 0.5;

    cursor: not-allowed;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 18px;

  border: none;

  border-radius: 9px;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  font-weight: 600;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;
  }
`;
