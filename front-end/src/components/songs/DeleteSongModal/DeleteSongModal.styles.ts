import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;

  inset: 0;

  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: rgba(0, 0, 0, 0.65);

  backdrop-filter: blur(4px);
`;

export const Modal = styled.div`
  position: relative;

  width: 100%;
  max-width: 420px;

  padding: 32px;

  border-radius: 16px;

  background: ${({ theme }) => theme.colors.surface};

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
`;

export const CloseButton = styled.button`
  position: absolute;

  top: 16px;
  right: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;

  border: none;
  border-radius: 8px;

  background: transparent;

  color: ${({ theme }) => theme.colors.textSecondary};

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundLight};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 52px;
  height: 52px;

  margin-bottom: 20px;

  border-radius: 50%;

  background: rgba(239, 68, 68, 0.12);

  color: #ef4444;
`;

export const Title = styled.h2`
  margin: 0 0 10px;

  color: ${({ theme }) => theme.colors.text};

  font-size: 22px;
  font-weight: 700;
`;

export const Message = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;

  line-height: 1.6;
`;

export const SongName = styled.span`
  color: ${({ theme }) => theme.colors.text};

  font-weight: 600;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;

  gap: 12px;

  margin-top: 28px;
`;

export const CancelButton = styled.button`
  padding: 10px 18px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 8px;

  background: transparent;

  color: ${({ theme }) => theme.colors.text};

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundLight};
  }
`;

export const DeleteButton = styled.button`
  padding: 10px 18px;

  border: none;

  border-radius: 8px;

  background: #ef4444;

  color: ${({ theme }) => theme.colors.text};

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
