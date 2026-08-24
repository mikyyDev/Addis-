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

  max-width: 480px;

  max-height: 90vh;

  overflow-y: auto;

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 18px;

  background: ${({ theme }) => theme.colors.background};

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
`;

export const Header = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 22px 24px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Title = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.text};

  font-size: 20px;

  font-weight: 600;
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

    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Body = styled.div`
  padding: 24px;
`;
