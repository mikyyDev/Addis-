import styled from "@emotion/styled";

export const Header = styled.header`
  margin-bottom: 40px;
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 32px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const HeaderLeft = styled.div`
  min-width: 0;
`;

export const PeriodSelect = styled.select`
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  color: white;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: 0.2s;
  flex-shrink: 0;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  option {
    background: #17141f;
    color: white;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0 0 6px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 42px;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const HeroAccent = styled.span`
  background: linear-gradient(135deg, #6c63ff, #ff6584);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const HeroSubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 15px;
  line-height: 1.5;
`;

export const HeroStats = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const HeroStat = styled.span`
  display: inline-flex;
  align-items: baseline;
  gap: 5px;
`;

export const HeroStatValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

export const HeroStatLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  font-weight: 500;
`;

export const HeroDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.textMuted};
  opacity: 0.5;
  margin: 0 4px;
  align-self: center;
`;
