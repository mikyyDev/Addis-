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
  max-width: 500px;
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

  margin-bottom: 16px;
`;

export const Title = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 18px;
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

export const TrackPreview = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const TrackImage = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const TrackInfo = styled.div`
  min-width: 0;
`;

export const TrackName = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 600;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TrackArtistName = styled.div`
  color: #aaa;
  font-size: 12px;
`;

export const TrackSource = styled.div`
  color: #6c63ff;
  font-size: 11px;
  margin-top: 2px;
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

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const FieldRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const CreateButton = styled.button<{ disabled?: boolean }>`
  padding: 10px 16px;
  border-radius: 6px;
  border: 1px solid rgba(108, 99, 255, 0.3);
  background: rgba(108, 99, 255, 0.15);
  color: #6c63ff;
  font-size: 12px;
  white-space: nowrap;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: 0.15s;

  &:hover:not(:disabled) {
    background: rgba(108, 99, 255, 0.25);
  }
`;

export const CancelCreateButton = styled.button`
  padding: 10px 16px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: #aaa;
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ErrorText = styled.div`
  margin-bottom: 16px;
  padding: 10px 12px;
  border-radius: 6px;

  background: rgba(244, 67, 54, 0.15);
  color: #f44336;
  font-size: 12px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const Button = styled.button<{ variant: "primary" | "ghost" }>`
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

  ${({ variant }) =>
    variant === "primary"
      ? `
        border: 2px solid rgba(108, 99, 255, 0.5);
        background: linear-gradient(135deg, rgba(108, 99, 255, 0.3) 0%, rgba(108, 99, 255, 0.15) 100%);
        color: #6c63ff;
        &:hover:not(:disabled) {
          background: linear-gradient(135deg, rgba(108, 99, 255, 0.42) 0%, rgba(108, 99, 255, 0.26) 100%);
          border-color: rgba(108, 99, 255, 0.8);
        }
      `
      : `
        border: 2px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.05);
        color: #bbb;
        &:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
        }
      `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
