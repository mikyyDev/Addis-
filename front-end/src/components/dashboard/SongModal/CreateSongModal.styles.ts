import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;

  inset: 0;

  background: rgba(0, 0, 0, 0.65);

  display: flex;

  justify-content: center;

  align-items: center;

  z-index: 999;
`;

export const Modal = styled.div`
  width: 700px;

  max-width: 95%;

  background: #171717;

  border-radius: 24px;

  padding: 32px;

  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const Header = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 30px;
`;

export const Title = styled.h2`
  color: white;

  font-size: 28px;

  font-weight: 700;
`;

export const CloseButton = styled.button`
  border: none;

  background: transparent;

  color: white;

  cursor: pointer;
`;
