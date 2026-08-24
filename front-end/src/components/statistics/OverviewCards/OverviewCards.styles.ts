import styled from "@emotion/styled";

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 18px;
  margin-bottom: 24px;
`;

export const OverviewCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 20px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(108, 99, 255, 0.4);
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }
`;

export const IconBox = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(108, 99, 255, 0.3),
    rgba(255, 255, 255, 0.06)
  );
  border: 1px solid rgba(108, 99, 255, 0.25);
  color: ${({ theme }) => theme.colors.primaryLight};
`;

export const CardNumber = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
`;

export const CardLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  font-weight: 500;
`;
