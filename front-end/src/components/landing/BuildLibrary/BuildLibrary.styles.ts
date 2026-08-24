import styled from "@emotion/styled";

export const CTASection = styled.section`
  padding: 100px 0;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 300px;
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
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const Title = styled.h2`
  color: white;
  font-size: 2.8rem;
  font-weight: 700;
  margin: 0 0 40px;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Button = styled.button`
  padding: 18px 50px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #8b5cf6, #cdcbd0ee);
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4),
    0 0 60px rgba(139, 92, 246, 0.1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(139, 92, 246, 0.5),
      0 0 80px rgba(139, 92, 246, 0.15);
    background: linear-gradient(135deg, #9f67ff, #7c3aed);
  }

  &:active {
    transform: scale(0.98);
  }
`;
