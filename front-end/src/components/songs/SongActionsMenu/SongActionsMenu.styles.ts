import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
`;

export const MenuButton = styled.button`
  display: flex;

  align-items: center;

  justify-content: center;

  width: 34px;

  height: 34px;

  border: none;

  border-radius: 10px;

  background: rgba(255, 255, 255, 0.08);

  color: rgba(255, 255, 255, 0.8);

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.16);

    color: white;
  }
`;

export const Backdrop = styled.div`
  position: fixed;

  inset: 0;

  z-index: 50;
`;

export const Menu = styled.div`
  position: absolute;

  top: calc(100% + 6px);

  right: 0;

  z-index: 51;

  min-width: 210px;

  padding: 0.4rem;

  border-radius: 14px;

  background: rgba(28, 28, 42, 0.97);

  backdrop-filter: blur(20px);

  border: 1px solid rgba(255, 255, 255, 0.1);

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
`;

interface ItemProps {
  danger?: boolean;
}

export const MenuItem = styled.button<ItemProps>`
  display: flex;

  align-items: center;

  gap: 0.65rem;

  width: 100%;

  padding: 0.6rem 0.75rem;

  border: none;

  border-radius: 10px;

  background: transparent;

  color: ${({ danger }) =>
    danger ? "#f87171" : "rgba(255, 255, 255, 0.85)"};

  font-size: 0.9rem;

  text-align: left;

  cursor: pointer;

  transition: 0.15s;

  &:hover {
    background: ${({ danger }) =>
      danger ? "rgba(239, 68, 68, 0.15)" : "rgba(255, 255, 255, 0.08)"};

    color: ${({ danger }) => (danger ? "#f87171" : "white")};
  }
`;

export const Divider = styled.div`
  height: 1px;

  margin: 0.3rem 0.5rem;

  background: rgba(255, 255, 255, 0.08);
`;
