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

  max-width: 500px;

  max-height: calc(100vh - 40px);

  overflow-y: auto;

  padding: 26px;

  border: 1px solid rgba(255, 255, 255, 0.1);

  border-radius: 18px;

  background: rgba(25, 24, 32, 0.97);

  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
`;

export const Header = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
`;

export const Title = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.text};

  font-size: 22px;

  font-weight: 700;
`;

export const CloseButton = styled.button`
  width: 34px;

  height: 34px;

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
