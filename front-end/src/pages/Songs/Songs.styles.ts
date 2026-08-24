import styled from "@emotion/styled";

export const SongsContainer = styled.div`
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

interface ToastProps {
  type: "success" | "error";
}

export const Toast = styled.div<ToastProps>`
  position: fixed;

  bottom: 2rem;

  left: 50%;

  transform: translateX(-50%);

  z-index: 1100;

  padding: 0.85rem 1.4rem;

  border-radius: 14px;

  color: white;

  font-weight: 600;

  font-size: 0.9rem;

  background: ${({ type }) =>
    type === "success" ? "rgba(34, 197, 94, 0.95)" : "rgba(239, 68, 68, 0.95)"};

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);

  animation: toast-in 0.25s ease;

  @keyframes toast-in {
    from {
      opacity: 0;

      transform: translateX(-50%) translateY(12px);
    }

    to {
      opacity: 1;

      transform: translateX(-50%) translateY(0);
    }
  }
`;
