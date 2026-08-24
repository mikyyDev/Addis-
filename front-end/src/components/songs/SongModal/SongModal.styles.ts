import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;

  inset: 0;

  z-index: 1000;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 1.5rem;

  background: rgba(0, 0, 0, 0.7);

  backdrop-filter: blur(8px);

  overflow-y: auto;
`;

export const Modal = styled.div`
  width: min(650px, 100%);

  max-height: 90vh;

  overflow-y: auto;

  border-radius: 24px;

  background: rgba(25, 25, 35, 0.97);

  border: 1px solid rgba(255, 255, 255, 0.1);

  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.45);

  color: white;

  scrollbar-width: thin;
`;

export const Header = styled.div`
  position: sticky;

  top: 0;

  z-index: 2;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 1.4rem 1.5rem;

  background: rgba(25, 25, 35, 0.98);

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const Title = styled.h2`
  margin: 0;

  font-size: 1.35rem;

  font-weight: 700;
`;

export const CloseButton = styled.button`
  display: flex;

  align-items: center;

  justify-content: center;

  width: 38px;

  height: 38px;

  border: none;

  border-radius: 10px;

  background: rgba(255, 255, 255, 0.08);

  color: white;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);

    transform: rotate(90deg);
  }
`;

export const Body = styled.div`
  padding: 1.5rem;
`;
