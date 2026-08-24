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

  backdrop-filter: blur(8px);
`;

export const Modal = styled.div`
  width: 100%;

  max-width: 420px;

  padding: 28px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 18px;

  background: ${({ theme }) => theme.colors.background};

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
`;

export const Header = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: rgba(255, 80, 80, 0.12);

  color: #ff5c5c;
`;

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;

  display: flex;

  align-items: center;
  justify-content: center;

  border: none;

  border-radius: 8px;

  background: transparent;

  color: ${({ theme }) => theme.colors.textSecondary};

  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const Title = styled.h2`
  margin: 22px 0 10px;

  color: ${({ theme }) => theme.colors.text};

  font-size: 22px;
`;

export const Message = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;

  line-height: 1.7;
`;

export const ArtistName = styled.strong`
  margin: 0 4px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Actions = styled.div`
  display: flex;

  justify-content: flex-end;

  gap: 10px;

  margin-top: 28px;
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

export const DeleteButton = styled.button`
  padding: 10px 18px;

  border: none;

  border-radius: 9px;

  background: #e54848;

  color: white;

  font-weight: 600;

  cursor: pointer;

  &:hover {
    background: #d83d3d;
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;
  }
`;
