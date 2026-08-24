import styled from "@emotion/styled";

export const SelectWrapper = styled.div`
  position: relative;
`;

export const TriggerButton = styled.button<{ $hasSelection: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.85rem 1rem;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;

  background: rgba(255, 255, 255, 0.06);
  color: ${({ $hasSelection }) =>
    $hasSelection ? "#fff" : "rgba(255, 255, 255, 0.4)"};

  font-size: 0.95rem;
  text-align: left;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;

  margin-top: 4px;
  padding: 4px;

  max-height: 200px;
  overflow-y: auto;

  border: 1px solid rgba(108, 99, 255, 0.3);
  border-radius: 12px;

  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);

  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
`;

export const OptionRow = styled.button<{ $checked: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 8px 12px;

  border: none;
  border-radius: 8px;

  background: ${({ $checked }) =>
    $checked ? "rgba(108, 99, 255, 0.12)" : "transparent"};
  color: ${({ $checked }) => ($checked ? "#fff" : "#bbb")};

  font-size: 0.9rem;
  text-align: left;

  cursor: pointer;

  transition: 0.15s;

  &:hover {
    background: ${({ $checked }) =>
      $checked ? "rgba(108, 99, 255, 0.2)" : "rgba(255, 255, 255, 0.06)"};
    color: #fff;
  }
`;

export const Checkbox = styled.div<{ $checked: boolean }>`
  width: 18px;
  height: 18px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid
    ${({ $checked }) =>
      $checked ? "#6c63ff" : "rgba(255, 255, 255, 0.25)"};
  border-radius: 4px;

  background: ${({ $checked }) =>
    $checked ? "#6c63ff" : "transparent"};

  color: #fff;

  transition: 0.15s;
`;

export const OptionLabel = styled.span`
  flex: 1;
  min-width: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const EmptyMessage = styled.div`
  padding: 12px;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
`;
