import styled from "@emotion/styled";

export const Backdrop = styled.div`
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

export const Menu = styled.div`
  position: relative;

  width: 100%;

  max-width: 420px;

  padding: 28px;

  border: 1px solid rgba(255, 255, 255, 0.1);

  border-radius: 20px;

  background: rgba(25, 24, 32, 0.98);

  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.5);
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

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.06);

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 22px;

  cursor: pointer;

  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);

    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Title = styled.h2`
  margin: 0 0 8px;

  color: ${({ theme }) => theme.colors.text};

  font-size: 22px;

  font-weight: 700;
`;

export const Subtitle = styled.p`
  margin: 0 0 22px;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;

  line-height: 1.5;

  strong {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SourceButton = styled.button`
  width: 100%;

  display: flex;

  align-items: center;

  gap: 14px;

  padding: 14px;

  margin-bottom: 10px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.04);

  color: ${({ theme }) => theme.colors.text};

  text-align: left;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);

    background: rgba(255, 255, 255, 0.08);

    border-color: rgba(255, 255, 255, 0.16);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SourceIcon = styled.div`
  width: 44px;
  height: 44px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background: rgba(255, 255, 255, 0.08);

  color: ${({ theme }) => theme.colors.primary};
`;

export const SourceContent = styled.div`
  flex: 1;

  min-width: 0;
`;

export const SourceName = styled.div`
  margin-bottom: 3px;

  font-size: 15px;

  font-weight: 700;
`;

export const SourceDescription = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 12px;
`;
