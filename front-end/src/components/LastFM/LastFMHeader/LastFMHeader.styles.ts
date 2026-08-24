import styled from "@emotion/styled";

export const Header = styled.header`
  position: relative;

  margin-bottom: 36px;
`;

export const Label = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 16px;

  padding: 6px 14px;

  border: 1px solid rgba(108, 99, 255, 0.3);
  border-radius: 999px;

  background: rgba(108, 99, 255, 0.1);

  color: #a99cff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0 0 10px;

  color: #fff;

  font-size: 42px;
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.04em;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Highlight = styled.span`
  background: linear-gradient(135deg, #6c63ff, #a99cff, #ff6b9d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  margin: 0;

  color: rgba(255, 255, 255, 0.55);
  font-size: 17px;
  line-height: 1.6;
  font-weight: 400;

  max-width: 560px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const GlowOrb = styled.div`
  position: absolute;
  top: -60px;
  right: -40px;

  width: 240px;
  height: 240px;

  border-radius: 50%;

  background: radial-gradient(circle, rgba(108, 99, 255, 0.15), transparent 70%);

  pointer-events: none;

  filter: blur(40px);
`;
