import styled from "@emotion/styled";

export const StatsRow = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr) auto;

  gap: 1rem;

  align-items: center;

  margin-bottom: 1.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  display: flex;

  align-items: center;

  gap: 1rem;

  padding: 1.1rem 1.25rem;

  backdrop-filter: blur(16px);

  transition: 0.25s;

  &:hover {
    transform: translateY(-3px);

    border-color: rgba(139, 92, 246, 0.5);
  }
`;

export const StatIcon = styled.div`
  display: flex;

  align-items: center;

  justify-content: center;

  width: 48px;

  height: 48px;

  flex-shrink: 0;

  border-radius: 14px;

  background: linear-gradient(135deg, #8b5cf6, #d946ef);

  color: white;
`;

export const StatInfo = styled.div`
  display: flex;

  flex-direction: column;
`;

export const StatValue = styled.span`
  color: white;

  font-size: 1.5rem;

  font-weight: 700;

  line-height: 1.1;
`;

export const StatLabel = styled.span`
  color: rgba(255, 255, 255, 0.6);

  font-size: 0.85rem;
`;

export const AddButton = styled.button`
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 0.55rem;

  padding: 0.95rem 1.5rem;

  border: none;

  border-radius: 14px;

  cursor: pointer;

  font-weight: 600;

  font-size: 0.95rem;

  white-space: nowrap;

  background: linear-gradient(135deg, #8b5cf6, #d946ef);

  color: white;

  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);

  transition: 0.25s;

  &:hover {
    transform: translateY(-2px);

    box-shadow: 0 12px 30px rgba(139, 92, 246, 0.55);
  }

  @media (max-width: 1100px) {
    grid-column: 1 / -1;
  }
`;
