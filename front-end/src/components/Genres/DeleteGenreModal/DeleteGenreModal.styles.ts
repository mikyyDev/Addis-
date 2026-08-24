import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  z-index: 1100;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(0, 0, 0, 0.65);

  backdrop-filter: blur(6px);
`;

export const Modal = styled.div`
  position: relative;

  width: 100%;
  max-width: 420px;

  padding: 28px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 18px;

  background: ${({ theme }) => theme.colors.background};

  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.5);

  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;

  top: 14px;
  right: 14px;

  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 8px;

  background: transparent;

  color: ${({ theme }) => theme.colors.textSecondary};

  cursor: pointer;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.06);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const IconWrapper = styled.div`
  width: 52px;
  height: 52px;

  margin: 0 auto 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: rgba(239, 68, 68, 0.12);

  color: #ef4444;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.text};

  font-size: 19px;
  font-weight: 650;
`;

export const Message = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;

  line-height: 1.5;
`;

export const GenreName = styled.strong`
  color: ${({ theme }) => theme.colors.text};
`;

export const Actions = styled.div`
  display: flex;

  gap: 10px;

  margin-top: 24px;
`;

export const CancelButton = styled.button`
  flex: 1;

  padding: 11px 15px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 9px;

  background: transparent;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.05);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const DeleteButton = styled.button`
  flex: 1;

  padding: 11px 15px;

  border: none;

  border-radius: 9px;

  background: #ef4444;

  color: white;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  &:hover:not(:disabled) {
    background: #dc2626;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
