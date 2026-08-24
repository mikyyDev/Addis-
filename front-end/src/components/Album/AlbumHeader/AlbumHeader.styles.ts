import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: space-between;

  gap: 24px;

  margin-bottom: 32px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const TitleSection = styled.div`
  min-width: 0;
`;

export const Title = styled.h1`
  margin: 0;

  color: ${({ theme }) => theme.colors.text};

  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  margin: 8px 0 0;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;

  span {
    margin-left: 8px;

    color: ${({ theme }) => theme.colors.primary};

    font-weight: 600;
  }
`;

export const Actions = styled.div`
  display: flex;

  align-items: center;

  gap: 12px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SearchContainer = styled.div`
  position: relative;

  width: 280px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;

  top: 50%;
  left: 14px;

  display: flex;

  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.textSecondary};

  transform: translateY(-50%);

  pointer-events: none;
`;

export const SearchInput = styled.input`
  width: 100%;

  height: 44px;

  padding: 0 14px 0 42px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 12px;

  outline: none;

  background: rgba(255, 255, 255, 0.06);

  color: ${({ theme }) => theme.colors.text};

  font-size: 14px;

  backdrop-filter: blur(10px);

  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};

    background: rgba(255, 255, 255, 0.08);
  }
`;

export const AddButton = styled.button`
  height: 44px;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 0 18px;

  border: none;

  border-radius: 12px;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease,
    box-shadow 0.2s ease;

  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);

    opacity: 0.92;

    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translateY(0);
  }
`;
