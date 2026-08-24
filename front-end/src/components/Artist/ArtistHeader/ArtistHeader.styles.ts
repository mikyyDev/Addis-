import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;

  align-items: flex-end;
  justify-content: space-between;
  margin-top: 40px;
  gap: 20px;

  margin-bottom: 22px;
  padding-bottom: 20px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.14);

  @media (max-width: 768px) {
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
  font-weight: 800;
  letter-spacing: 0;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  margin: 6px 0 0;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-left: 8px;

    color: ${({ theme }) => theme.colors.secondaryLight};
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;

    &::before {
      width: 4px;
      height: 4px;
      content: "";
      border-radius: 50%;
      background: currentColor;
    }
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

  width: 260px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;

  top: 50%;
  left: 12px;

  display: flex;

  transform: translateY(-50%);

  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SearchInput = styled.input`
  width: 100%;

  box-sizing: border-box;

  padding: 11px 14px 11px 40px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 12px;

  outline: none;

  background: rgba(255, 255, 255, 0.07);

  color: ${({ theme }) => theme.colors.text};

  font-size: 14px;

  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AddButton = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 11px 16px;

  border: none;

  border-radius: 12px;

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.primary}
  );

  color: white;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  white-space: nowrap;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    opacity: 0.9;

    transform: translateY(-1px);

    box-shadow: 0 10px 24px rgba(255, 101, 132, 0.2);
  }
`;
