import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 112px 0 96px;
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(7, 6, 19, 0.98), rgba(19, 10, 35, 0.96)),
    radial-gradient(
      circle at 18% 20%,
      rgba(243, 88, 157, 0.1),
      transparent 38%
    ),
    radial-gradient(
      circle at 85% 75%,
      rgba(108, 99, 255, 0.12),
      transparent 42%
    );
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.1;
    pointer-events: none;
    background: repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 30px,
      rgba(255, 255, 255, 0.08) 31px,
      transparent 32px
    );
    mask-image: linear-gradient(transparent, #000 30%, #000 70%, transparent);
  }

  &::before {
    content: "";
    position: absolute;
    inset: -25%;
    background:
      radial-gradient(
        circle at 18% 35%,
        rgba(243, 88, 157, 0.12),
        transparent 32%
      ),
      radial-gradient(
        circle at 82% 70%,
        rgba(163, 61, 193, 0.1),
        transparent 34%
      );
    filter: blur(36px);
    pointer-events: none;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const SectionTitle = styled.h2`
  color: #fff;
  text-align: left;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  margin: 0 0 54px;
  letter-spacing: 0;
  line-height: 1;

  &::before {
    content: "01 / THE FLOW";
    display: block;
    color: #ff7ab5;
    font-size: 11px;
    letter-spacing: 0.16em;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const StepsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex: 1;
  padding: 20px 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const StepIconCircle = styled.div<{ $color: string }>`
  width: 58px;
  height: 58px;
  border-radius: 16px;
  background: ${({ $color }) => $color}cc;
  border: 1px solid rgba(255, 255, 255, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  transition: 0.3s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.2);
    pointer-events: none;
    opacity: 0;
    transition: 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.08);
    box-shadow: 0 10px 20px ${({ $color }) => $color}45;

    &::after {
      opacity: 1;
    }
  }
`;

export const StepLabel = styled.span`
  color: rgba(255, 255, 255, 0.82);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  max-width: 120px;

  @media (max-width: 900px) {
    max-width: none;
  }
`;

export const StepArrow = styled.span`
  color: #d51007;
  font-size: 28px;
  margin: 0 4px;
  font-weight: 300;

  @media (max-width: 900px) {
    display: none;
  }
`;
