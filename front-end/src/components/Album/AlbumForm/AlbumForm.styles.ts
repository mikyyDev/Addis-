import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};

  font-size: 14px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;

  box-sizing: border-box;

  padding: 0 13px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;

  outline: none;

  background: rgba(255, 255, 255, 0.06);

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

    background: rgba(255, 255, 255, 0.08);
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 44px;

  box-sizing: border-box;

  padding: 0 13px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;

  outline: none;

  background: rgba(255, 255, 255, 0.06);

  color: ${({ theme }) => theme.colors.text};

  font-size: 14px;

  cursor: pointer;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  option {
    background: #1b1a22;

    color: white;
  }
`;

export const ErrorText = styled.span`
  color: #ff7070;

  font-size: 12px;
`;

export const Actions = styled.div`
  display: flex;

  justify-content: flex-end;

  gap: 10px;

  margin-top: 4px;
`;

export const CancelButton = styled.button`
  height: 42px;

  padding: 0 18px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 10px;

  background: transparent;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const SubmitButton = styled.button`
  height: 42px;

  padding: 0 18px;

  border: none;

  border-radius: 10px;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;
  }
`;

export const ServerError = styled.div`
  padding: 10px 12px;

  border-radius: 8px;

  background: rgba(255, 80, 80, 0.08);

  color: #ff7070;

  font-size: 13px;
`;
