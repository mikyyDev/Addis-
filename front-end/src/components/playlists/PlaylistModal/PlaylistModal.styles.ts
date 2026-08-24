import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 998;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
`;

export const Panel = styled.div`
  width: 100%;
  max-width: 480px;

  max-height: 90vh;

  overflow-y: auto;

  padding: 26px;

  border: 1px solid rgba(108, 99, 255, 0.25);
  border-radius: 16px;

  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);

  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
`;

export const Title = styled.h2`
  margin: 0;

  color: #fff;

  font-size: 19px;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.06);

  color: #bbb;

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    color: #fff;
  }
`;

export const Field = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;

  margin-bottom: 6px;

  color: #aaa;

  font-size: 12px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;

  padding: 10px 12px;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;

  background: rgba(255, 255, 255, 0.05);

  color: #fff;

  font-size: 14px;

  box-sizing: border-box;

  outline: none;

  &:focus {
    border-color: rgba(108, 99, 255, 0.6);
  }

  ::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;

  padding: 10px 12px;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;

  background: rgba(255, 255, 255, 0.05);

  color: #fff;

  font-size: 14px;

  box-sizing: border-box;

  resize: vertical;

  min-height: 80px;

  outline: none;

  font-family: inherit;

  &:focus {
    border-color: rgba(108, 99, 255, 0.6);
  }

  ::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const ErrorText = styled.div`
  margin-top: 6px;

  color: #f44336;

  font-size: 12px;
`;

export const Note = styled.p`
  margin: 0 0 18px;

  color: rgba(255, 255, 255, 0.65);

  font-size: 13px;

  line-height: 1.5;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;

  margin-top: 24px;
`;

export const Button = styled.button<{ variant: "primary" | "danger" | "ghost" }>`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 12px 16px;

  border-radius: 10px;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition: all 0.2s ease;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `
          border: 2px solid rgba(108, 99, 255, 0.5);
          background: linear-gradient(135deg, rgba(108, 99, 255, 0.3) 0%, rgba(108, 99, 255, 0.15) 100%);
          color: #6c63ff;
          &:hover {
            background: linear-gradient(135deg, rgba(108, 99, 255, 0.42) 0%, rgba(108, 99, 255, 0.26) 100%);
            border-color: rgba(108, 99, 255, 0.8);
          }
        `;
      case "danger":
        return `
          border: 2px solid rgba(244, 67, 54, 0.5);
          background: rgba(244, 67, 54, 0.15);
          color: #f44336;
          &:hover {
            background: rgba(244, 67, 54, 0.28);
            border-color: rgba(244, 67, 54, 0.8);
          }
        `;
      case "ghost":
      default:
        return `
          border: 2px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.05);
          color: #bbb;
          &:hover {
            background: rgba(255, 255, 255, 0.12);
            color: #fff;
          }
        `;
    }
  }}
`;
