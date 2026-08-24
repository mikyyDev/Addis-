import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid
    ${({ active }) =>
      active ? "rgba(124, 58, 237, 0.5)" : "rgba(255, 255, 255, 0.08)"};
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s ease;
  color: ${({ active }) => (active ? "#fff" : "rgba(255,255,255,.5)")};
  background: ${({ active }) =>
    active
      ? "linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(168, 85, 247, 0.15))"
      : "rgba(255,255,255,.03)"};

  &:hover {
    background: ${({ active }) =>
      active
        ? "linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(168, 85, 247, 0.2))"
        : "rgba(255, 255, 255, 0.06)"};
    border-color: rgba(124, 58, 237, 0.3);
  }
`;
