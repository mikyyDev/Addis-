import styled from "@emotion/styled";

export const Section = styled.section`
  margin-top: 40px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const ClearButton = styled.button`
  border: none;
  background: none;
  color: rgba(255, 255, 255, 0.35);
  font-size: 12px;
  font-weight: 500;

  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: #ff6b6b;
  }
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Chip = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;

  background: rgba(255, 255, 255, 0.04);

  overflow: hidden;

  transition: all 0.2s ease;

  &:hover {
    background: rgba(108, 99, 255, 0.15);
    border-color: rgba(108, 99, 255, 0.3);
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const ChipButton = styled.button`
  max-width: 220px;

  padding: 8px 14px;

  border: none;
  background: transparent;

  color: rgba(255, 255, 255, 0.75);
  font-size: 13px;
  font-weight: 500;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  cursor: pointer;
`;

export const ChipRemove = styled.button`
  padding: 8px 10px;

  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.08);

  background: transparent;

  color: rgba(255, 255, 255, 0.3);
  font-size: 13px;

  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: #ff6b6b;
  }
`;
