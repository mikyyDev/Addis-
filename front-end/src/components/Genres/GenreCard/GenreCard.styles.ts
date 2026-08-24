import styled from "@emotion/styled";

export const Card = styled.article`
  position: relative;

  min-width: 0;

  display: flex;
  align-items: center;

  gap: 14px;

  padding: 16px;

  border: 1px solid rgba(255, 255, 255, 0.07);

  border-radius: 16px;

  background: rgba(255, 255, 255, 0.035);

  cursor: pointer;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    border-color: rgba(255, 255, 255, 0.13);

    background: rgba(255, 255, 255, 0.055);
  }
`;

export const IconWrapper = styled.div`
  flex-shrink: 0;
`;

export const GenreIcon = styled.div`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 13px;

  background: linear-gradient(
    135deg,
    rgba(123, 108, 255, 0.22),
    rgba(108, 99, 255, 0.08)
  );

  color: ${({ theme }) => theme.colors.primary};
`;

export const Info = styled.div`
  min-width: 0;

  flex: 1;
`;

export const GenreName = styled.h3`
  margin: 0 0 5px;

  overflow: hidden;

  color: ${({ theme }) => theme.colors.text};

  font-size: 15px;
  font-weight: 650;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SongCount = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 13px;
`;

export const ActionsButton = styled.button`
  flex-shrink: 0;

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

  &:hover {
    background: rgba(255, 255, 255, 0.07);

    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ActionsMenu = styled.div`
  position: absolute;

  top: 52px;
  right: 12px;

  z-index: 50;

  width: 150px;

  padding: 6px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 11px;

  background: rgba(18, 18, 24, 0.98);

  backdrop-filter: blur(16px);

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.4);
`;

export const ActionButton = styled.button<{
  $danger?: boolean;
}>`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 9px;

  padding: 9px 10px;

  border: none;
  border-radius: 8px;

  background: transparent;

  color: ${({ theme, $danger }) => ($danger ? "#ff6b6b" : theme.colors.text)};

  font-size: 13px;

  text-align: left;

  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const Divider = styled.div`
  height: 1px;

  margin: 4px 6px;

  background: rgba(255, 255, 255, 0.07);
`;
