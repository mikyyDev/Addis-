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
  color: white;

  font-weight: 600;

  font-size: 15px;
`;

export const Input = styled.input`
  padding: 14px;

  border-radius: 12px;

  border: 1px solid rgba(255, 255, 255, 0.1);

  background: rgba(255, 255, 255, 0.05);

  color: white;

  outline: none;

  transition: 0.25s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Select = styled.select`
  padding: 14px;

  border-radius: 12px;

  border: 1px solid rgba(255, 255, 255, 0.1);

  background: rgba(255, 255, 255, 0.05);

  color: white;

  outline: none;

  transition: 0.25s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  option {
    background: #1f1f1f;
    color: white;
  }
`;

export const ErrorText = styled.small`
  color: #ef4444;

  min-height: 18px;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;

  padding: 16px;

  border: none;

  border-radius: 14px;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  font-weight: 700;

  cursor: pointer;

  transition: 0.25s;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;
