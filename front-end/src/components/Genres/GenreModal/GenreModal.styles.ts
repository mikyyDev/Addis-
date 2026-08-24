import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(0, 0, 0, 0.65);

  backdrop-filter: blur(6px);
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 440px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 18px;

  background: ${({ theme }) => theme.colors.background};

  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.5);

  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 22px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
`;

export const Title = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.text};

  font-size: 19px;
  font-weight: 650;
`;

export const CloseButton = styled.button`
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 9px;

  background: transparent;

  color: ${({ theme }) => theme.colors.textSecondary};

  cursor: pointer;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.07);

    color: ${({ theme }) => theme.colors.text};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Form = styled.form`
  padding: 22px;
`;

export const Label = styled.label`
  display: block;

  margin-bottom: 8px;

  color: ${({ theme }) => theme.colors.text};

  font-size: 13px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;

  box-sizing: border-box;

  padding: 12px 13px;

  border: 1px solid rgba(255, 255, 255, 0.09);

  border-radius: 10px;

  outline: none;

  background: rgba(255, 255, 255, 0.04);

  color: ${({ theme }) => theme.colors.text};

  font-size: 14px;

  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  margin: 10px 0 0;

  color: #ff6b6b;

  font-size: 13px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;

  gap: 10px;

  margin-top: 24px;
`;

export const CancelButton = styled.button`
  padding: 10px 15px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 9px;

  background: transparent;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.05);

    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 16px;

  border: none;
  border-radius: 9px;

  background: ${({ theme }) => theme.colors.primary};

  color: #fff;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
