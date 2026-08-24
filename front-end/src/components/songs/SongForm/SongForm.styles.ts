import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;

  flex-direction: column;

  gap: 1.2rem;
`;

export const FormGroup = styled.div`
  display: flex;

  flex-direction: column;

  gap: 0.5rem;
`;

export const Label = styled.label`
  color: #f8fafc;

  font-size: 0.9rem;

  font-weight: 600;
`;

const FieldStyles = `
  width: 100%;

  box-sizing: border-box;

  padding: 0.85rem 1rem;

  border: 1px solid rgba(255, 255, 255, 0.12);

  border-radius: 12px;

  outline: none;

  background: rgba(255, 255, 255, 0.06);

  color: white;

  font-size: 0.95rem;

  transition: 0.2s;

  &:focus {
    border-color: #8b2fc9;

    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const Input = styled.input`
  ${FieldStyles}
`;

export const Select = styled.select`
  ${FieldStyles}

  cursor: pointer;

  option {
    background: #18181b;

    color: white;
  }
`;

export const ErrorText = styled.span`
  color: #f87171;

  font-size: 0.8rem;
`;

export const Actions = styled.div`
  display: flex;

  justify-content: flex-end;

  gap: 0.8rem;

  margin-top: 0.5rem;

  padding-top: 1.2rem;

  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const CancelButton = styled.button`
  padding: 0.8rem 1.2rem;

  border: 1px solid rgba(255, 255, 255, 0.12);

  border-radius: 10px;

  background: transparent;

  color: #cbd5e1;

  cursor: pointer;

  transition: 0.2s;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.08);

    color: white;
  }

  &:disabled {
    opacity: 0.5;

    cursor: not-allowed;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.8rem 1.3rem;

  border: none;

  border-radius: 10px;

  background: linear-gradient(135deg, #8b2fc9, #d94f88);

  color: white;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover:not(:disabled) {
    transform: translateY(-1px);

    box-shadow: 0 8px 22px rgba(139, 47, 201, 0.4);
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;
  }
`;
export const HelpText = styled.span`
  color: rgba(255, 255, 255, 0.45);

  font-size: 0.75rem;

  line-height: 1.4;
`;
