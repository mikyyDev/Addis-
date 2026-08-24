import styled from "@emotion/styled";

/* ==========================================
   PAGE SHELL
========================================== */

export const SettingsContainer = styled.div`
  position: relative;

  display: flex;

  min-height: 100vh;

  background: linear-gradient(
    135deg,
    #150a2b 0%,
    #2a1452 45%,
    #3b1d6e 70%,
    #4c1d95 100%
  );

  &::before {
    position: fixed;
    inset: 0;
    z-index: 0;

    content: "";
    pointer-events: none;

    background: radial-gradient(
      ellipse at top right,
      rgba(139, 92, 246, 0.25) 0%,
      transparent 60%
    );
  }
`;

export const MainContent = styled.main`
  position: relative;
  z-index: 1;

  flex: 1;

  display: flex;
  flex-direction: column;

  min-width: 0;
  min-height: 100vh;

  margin-left: clamp(300px, 22vw, 360px);

  padding: 42px 2rem 2rem;

  overflow-y: auto;

  @media (max-width: 1200px) {
    margin-left: 300px;
  }

  @media (max-width: 900px) {
    margin-left: 0;
    padding: 16px;
    min-height: 100vh;
  }
`;

/* ==========================================
   HEADER
========================================== */

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    rgba(108, 99, 255, 0.35),
    rgba(255, 255, 255, 0.06)
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.colors.primaryLight};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
`;

export const TextContainer = styled.div`
  min-width: 0;
`;

export const Title = styled.h1`
  margin: 0 0 4px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 26px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.04em;
`;

export const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.5;
`;

/* ==========================================
   CONTENT
========================================== */

export const Content = styled.div`
  min-width: 0;
`;

/* ==========================================
   CARDS
========================================== */

export const Card = styled.section`
  padding: 28px;
  backdrop-filter: blur(10px);

  & + & {
    margin-top: 24px;
  }

  @media (max-width: 640px) {
    padding: 20px 16px;
  }
`;

export const CardTitle = styled.h2`
  margin: 0 0 6px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: 650;
  letter-spacing: -0.02em;
`;

export const CardDescription = styled.p`
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.5;
`;

/* ==========================================
   PROFILE
========================================== */

export const PictureRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`;

export const Avatar = styled.div`
  width: 72px;
  height: 72px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  background: linear-gradient(
    135deg,
    rgba(108, 99, 255, 0.4),
    rgba(255, 255, 255, 0.08)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.primary};
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AvatarInitials = styled.span`
  color: white;
  font-size: 26px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const ChangePictureButton = styled.button`
  padding: 8px 16px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: rgba(108, 99, 255, 0.12);
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const ReadOnlyRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 2px solid rgba(255, 255, 255, 0.06);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  margin-bottom: 18px;
`;

export const ReadOnlyValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  text-align: right;
`;

/* ==========================================
   FORMS
========================================== */

export const Field = styled.div`
  margin-bottom: 18px;
`;

export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const InputWrapper = styled.div<{ hasError: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 12px 16px;
  border: 2px solid
    ${({ hasError }) => (hasError ? "#ef4444" : "rgba(255,255,255,.08)")};
  transition: all 0.3s ease;

  &:focus-within {
    border-color: ${({ hasError, theme }) =>
      hasError ? "#ef4444" : theme.colors.primary};
    box-shadow: ${({ hasError, theme }) =>
      hasError ? "0 0 0 3px rgba(239,68,68,.15)" : theme.shadows.primary};
  }
`;

export const InputIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  color: white;
  font-size: 15px;
  min-width: 0;

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }
`;

export const ErrorText = styled.p`
  margin: 8px 0 0;
  color: #ef4444;
  font-size: 13px;
  font-weight: 500;
  overflow-wrap: anywhere;
`;

export const SaveButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 6px;
  padding: 12px 28px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: linear-gradient(90deg, #7c3aed, #5b21b6);
  color: white;
  font-size: 15px;
  font-weight: 600;
  transition: 0.3s;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* ==========================================
   DANGER ZONE
========================================== */

export const DangerCard = styled(Card)`
  border-color: rgba(244, 63, 94, 0.35);
  background: rgba(244, 63, 94, 0.06);
`;

export const DangerTitle = styled(CardTitle)`
  color: #f87171;
`;

export const DangerDescription = styled(CardDescription)`
  color: rgba(255, 255, 255, 0.75);
`;

export const DangerButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 6px;
  padding: 12px 28px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: #ef4444;
  color: white;
  font-size: 15px;
  font-weight: 600;
  transition: 0.3s;

  &:hover:not(:disabled) {
    background: #dc2626;
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(239, 68, 68, 0.35);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* ==========================================
   MODAL
========================================== */

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ModalDialog = styled.div`
  width: 100%;
  max-width: 440px;
  background: #17141f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 28px;
  color: white;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

export const ModalTitle = styled.h3`
  margin: 0 0 8px;
  color: #f87171;
  font-size: 20px;
  font-weight: 700;
`;

export const ModalText = styled.p`
  margin: 0 0 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.6;
`;

export const DeleteList = styled.ul`
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    border-radius: 10px;
    background: rgba(244, 63, 94, 0.08);
    border: 1px solid rgba(244, 63, 94, 0.2);
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
  }

  @media (max-width: 480px) {
    gap: 6px;

    li {
      padding: 8px 10px;
      font-size: 13px;
    }
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  & > button {
    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;

export const CancelButton = styled.button`
  padding: 10px 22px;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

/* ==========================================
   TOAST
========================================== */

export const Toast = styled.div<{ type: "success" | "error" }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 16px 20px;
  border-radius: 8px;
  background: ${({ type }) =>
    type === "success" ? "rgba(76, 175, 80, 0.9)" : "rgba(244, 67, 54, 0.9)"};
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation:
    slideIn 0.3s ease,
    slideOut 0.3s ease 2.7s forwards;
  z-index: 999;
`;
