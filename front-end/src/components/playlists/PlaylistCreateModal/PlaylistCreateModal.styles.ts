import styled from "@emotion/styled";

export const VisibilityToggle = styled.div`
  display: flex;
  gap: 8px;
`;

export const VisibilityOption = styled.button<{ active: boolean }>`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  padding: 10px 12px;

  border: 2px solid
    ${({ active }) =>
      active
        ? "rgba(108, 99, 255, 0.6)"
        : "rgba(255, 255, 255, 0.1)"};
  border-radius: 8px;

  background: ${({ active }) =>
    active
      ? "rgba(108, 99, 255, 0.15)"
      : "rgba(255, 255, 255, 0.05)"};

  color: ${({ active }) => (active ? "#6c63ff" : "#888")};

  font-size: 13px;
  font-weight: 500;

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ active }) =>
      active ? "rgba(108, 99, 255, 0.8)" : "rgba(255, 255, 255, 0.2)"};
    color: ${({ active }) => (active ? "#6c63ff" : "#bbb")};
  }
`;
