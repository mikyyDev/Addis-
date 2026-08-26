import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 96px 0 112px;
  position: relative;
  overflow: hidden;
  background: rgba(12, 8, 28, 0.66);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);

  &::before {
    content: "";
    position: absolute;
    inset: -25%;
    background:
      radial-gradient(
        circle at 76% 24%,
        rgba(243, 88, 157, 0.28),
        transparent 30%
      ),
      radial-gradient(
        circle at 24% 78%,
        rgba(66, 26, 112, 0.38),
        transparent 36%
      );
    filter: blur(32px);
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
  color: #f4f0e8;
  text-align: left;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  margin: 0 0 54px;
  letter-spacing: 0;

  &::before {
    content: "02 / YOUR TOOLKIT";
    display: block;
    color: #ff6b6b;
    font-size: 11px;
    letter-spacing: 0.16em;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 24px 70px rgba(5, 3, 15, 0.24);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: rgba(24, 18, 43, 0.62);
  border: none;
  padding: 34px 26px 38px;
  text-align: left;
  transition: 0.3s ease;
  cursor: pointer;
  min-height: 170px;

  &:hover {
    transform: translateY(-8px);
    background: rgba(55, 30, 74, 0.72);
  }
`;

export const CardIconCircle = styled.div<{ $color: string }>`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ $color }) => $color}cc;
  border: 1px solid rgba(255, 255, 255, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin: 0 0 22px;
  transition: 0.3s ease;
`;

export const CardTitle = styled.h3`
  color: #f4f0e8;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 8px;
`;

export const CardCount = styled.p`
  color: #a1a1aa;
  font-size: 13px;
  margin: 0;
`;
