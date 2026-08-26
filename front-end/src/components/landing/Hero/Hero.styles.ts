import styled from "@emotion/styled";

export const HeroContainer = styled.section`
  min-height: 100svh;
  background: transparent;
  display: flex;
  align-items: stretch;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 700px;
    height: 700px;
    left: 20%;
    top: 100%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(243, 88, 157, 0.45) 0%,
      rgba(163, 61, 193, 0.3) 36%,
      rgba(66, 26, 112, 0) 72%
    );
    pointer-events: none;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 28px;
  max-width: 1360px;
  margin: 0 auto;
  width: 90%;
  align-items: center;
  padding: 130px 52px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding-top: 110px;
    gap: 34px;
  }

  @media (max-width: 680px) {
    padding: 96px 20px 28px;
  }

  @media (max-width: 480px) {
    padding: 80px 16px 20px;
  }
`;

export const LeftContent = styled.div`
  color: white;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;

  p:first-of-type {
    font-size: 2.85rem;
    line-height: 1.18;
    margin: 0 0 14px;
    max-width: 590px;
    letter-spacing: -0.02em;
    color: #ffffff;
    font-weight: 700;

    @media (max-width: 680px) {
      font-size: 2.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 6px 0 24px;
    line-height: 1.2;
    color: #f2eeff;
    letter-spacing: -0.02em;
  }

  p:nth-of-type(2) {
    font-size: 1.02rem;
    line-height: 1.6;
    margin: 0 0 34px;
    max-width: 560px;
    color: #dedaf3;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 18px;
  margin-bottom: 52px;

  @media (max-width: 680px) {
    flex-direction: column;
    max-width: 320px;
  }

  @media (max-width: 480px) {
    margin-bottom: 32px;
  }
`;

export const PrimaryButton = styled.button`
  background: white;
  color: #0f1025;
  border: none;
  padding: 14px 44px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  min-width: 235px;
  width: 100%;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
  }
`;

export const SecondaryButton = styled.button`
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: 1px solid rgba(203, 185, 255, 0.28);
  padding: 13px 44px;
  border-radius: 999px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  min-width: 235px;
  width: 100%;
  box-shadow: inset 0 -8px 24px rgba(131, 77, 255, 0.28);
  transition: 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    transform: translateY(-2px);
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
  align-items: center;

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }
`;

export const StatBox = styled.div`
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(200, 200, 200, 0.8) 100%
  );
  padding: 18px 1.5rem;
  border-radius: 1.5rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  color: #1a0033;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 130px;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }

  h3 {
    margin: 0;
    font-size: 1.9rem;
    font-weight: 700;
    color: #1a0033;
  }

  p {
    margin: 0;
    font-size: 10px;
    color: #333;
    font-weight: 600;
    text-transform: none;
    letter-spacing: 0.02em;
    line-height: 1.3;
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;

  @media (max-width: 1000px) {
    justify-content: center;
  }

  @media (max-width: 680px) {
    transform: scale(0.75);
    transform-origin: top center;
    margin: -20px auto 0;
  }

  @media (max-width: 480px) {
    transform: scale(0.58);
    margin: -40px auto -20px;
  }
`;

export const PortraitShell = styled.div`
  width: 320px;
  height: 540px;
  border-radius: 160px;
  border: 3px solid rgba(248, 247, 255, 0.72);
  padding: 10px;
  box-sizing: border-box;
  transition: 0.3s ease;
  flex-shrink: 0;

  &:hover {
    border-color: rgba(139, 92, 246, 0.6);
    box-shadow: 0 0 40px rgba(139, 92, 246, 0.15);
  }
`;

export const PortraitImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 160px;
  background: linear-gradient(180deg, #ffbc26 0%, #f7a400 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
`;

export const SideStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;
`;

export const InfoCircle = styled.div`
  width: 210px;
  height: 210px;
  border-radius: 50%;
  background: #5f647c;
  color: #f6f6fd;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 24px;
  box-sizing: border-box;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(95, 100, 124, 0.3);
  }

  h4 {
    margin: 0 0 6px;
    font-size: 3.2rem;
    font-weight: 500;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.4;
    color: #e3e4ef;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 160px;
    padding: 16px;

    h4 {
      font-size: 2.2rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

export const MicCircle = styled.div`
  width: 210px;
  height: 300px;
  border-radius: 120px;
  background:
    radial-gradient(
      circle at 70% 25%,
      rgba(255, 255, 255, 0.45) 0%,
      rgba(255, 255, 255, 0) 38%
    ),
    linear-gradient(180deg, #f89ba5 0%, #f58f9d 48%, #f3a0a3 100%);
  display: grid;
  place-items: center;
  font-size: 5rem;

  @media (max-width: 480px) {
    width: 160px;
    height: 220px;
    border-radius: 90px;
    font-size: 3.5rem;
  }
`;
