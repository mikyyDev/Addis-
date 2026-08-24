import styled from "@emotion/styled";

export const CTASection = styled.section`
  padding: 100px 0 120px;
  background: linear-gradient(180deg, #09090f 0%, #12101f 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(
      ellipse,
      rgba(139, 92, 246, 0.12) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const CTAContainer = styled.div`
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 20px;
  letter-spacing: -0.03em;

  @media (max-width: 680px) {
    font-size: 2rem;
  }
`;

export const TitleAccent = styled.span`
  background: linear-gradient(135deg, #8b5cf6, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 17px;
  line-height: 1.6;
  margin: 0 0 40px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  padding: 16px 40px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  transition: 0.2s ease;
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(139, 92, 246, 0.4);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const SecondaryButton = styled.button`
  padding: 16px 40px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }
`;
