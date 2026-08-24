import styled from "@emotion/styled";

export const FilterBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 7px;

  padding: 8px 16px;

  border: 1px solid
    ${({ active }) =>
      active ? "rgba(108, 99, 255, 0.5)" : "rgba(255, 255, 255, 0.1)"};
  border-radius: 999px;

  background: ${({ active }) =>
    active ? "rgba(108, 99, 255, 0.2)" : "rgba(255, 255, 255, 0.03)"};

  color: ${({ active }) => (active ? "#fff" : "rgba(255, 255, 255, 0.5)")};
  font-size: 13px;
  font-weight: 600;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ active }) =>
      active ? "rgba(108, 99, 255, 0.28)" : "rgba(255, 255, 255, 0.07)"};
    border-color: rgba(108, 99, 255, 0.35);
    color: #fff;
  }

  svg {
    flex-shrink: 0;
    opacity: ${({ active }) => (active ? 1 : 0.6)};
  }
`;

export const FilterCount = styled.span`
  min-width: 20px;

  padding: 2px 7px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.1);

  color: inherit;
  font-size: 11px;
  font-weight: 700;
  text-align: center;
`;
