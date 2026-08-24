import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;

  inset: 0;

  z-index: 1100;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(0, 0, 0, 0.68);

  backdrop-filter: blur(6px);
`;

export const Modal = styled.div`
  width: 100%;

  max-width: 420px;

  padding: 28px;

  border: 1px solid rgba(255, 255, 255, 0.1);

  border-radius: 18px;

  background: rgba(25, 24, 32, 0.98);

  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
`;

export const IconWrapper = styled.div`
  width: 52px;

  height: 52px;

  display: flex;

  align-items: center;
  justify-content: center;

  margin-bottom: 18px;

  border-radius: 14px;

  background: rgba(255, 80, 80, 0.12);

  color: #ff6b6b;
`;

export const Title = styled.h2`
  margin: 0 0 10px;

  color: ${({ theme }) => theme.colors.text};

  font-size: 21px;

  font-weight: 700;
`;

export const Message = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;

  line-height: 1.6;
`;

export const AlbumName = styled.span`
  color: ${({ theme }) => theme.colors.text};

  font-weight: 600;
`;

export const Actions = styled.div`
  display: flex;

  justify-content: flex-end;

  gap: 10px;

  margin-top: 26px;
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

    color: ${({ theme }) => theme.colors.text};
  }

  &:disabled {
    opacity: 0.5;

    cursor: not-allowed;
  }
`;

export const DeleteButton = styled.button`
  height: 42px;

  padding: 0 18px;

  border: none;

  border-radius: 10px;

  background: #e05252;

  color: white;

  font-size: 14px;

  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #f05f5f;

    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;

    cursor: not-allowed;

    transform: none;
  }
`;
