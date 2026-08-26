import styled from "@emotion/styled";
import drakeImage from "../../../assets/images/Drake.jpg";

export const Section = styled.section`
  padding: 100px 0;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: -100px;
    transform: translateY(-50%);
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 100, 100, 0.07) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 30%;
    left: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(139, 92, 246, 0.06) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const Content = styled.div`
  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 30px;
  letter-spacing: -0.02em;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const TitleAccent = styled.span`
  color: #ff6b6b;
`;

export const Features = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const FeatureDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b6b, #ff8e53);
  flex-shrink: 0;
  box-shadow: 0 0 10px rgba(255, 107, 107, 0.4);
`;

export const FeatureText = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 500;
`;

export const Visual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    order: -1;
  }
`;

export const LastfmLogo = styled.div`
  width: 320px;
  max-width: 100%;
  height: 185px;
  border-radius: 20px;
  background-image:
    linear-gradient(135deg, rgba(18, 14, 30, 0.12), rgba(18, 14, 30, 0.2)),
    url(${drakeImage});
  background-size: cover;
  background-position: center 28%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.28),
    0 0 70px rgba(5, 4, 14, 0.16);
  position: relative;
  overflow: hidden;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 25px 60px rgba(0, 0, 0, 0.34),
      0 0 90px rgba(5, 4, 14, 0.2);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1),
      transparent 48%,
      rgba(5, 4, 14, 0.12)
    );
  }
`;
