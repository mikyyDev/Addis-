import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  background: #09090f;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

export const Content = styled.div`
  text-align: center;
  max-width: 640px;
`;

export const Label = styled.span`
  display: inline-block;
  color: #ff7ab5;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  margin: 0 0 20px;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

export const TitleAccent = styled.span`
  background: linear-gradient(135deg, #6c63ff, #ff6584);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.55);
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 0;
`;

export const Flow = styled.div<{ $visible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 8px;
  }
`;

export const FlowStep = styled.div<{ $visible: boolean; $delay: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : 16)}px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition-delay: ${({ $delay }) => $delay}s;

  @media (max-width: 600px) {
    padding: 16px 20px;
  }
`;

export const StepIcon = styled.div`
  font-size: 1.8rem;
  line-height: 1;
`;

export const StepLabel = styled.span`
  color: rgba(255, 255, 255, 0.75);
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
`;

export const FlowArrow = styled.span<{ $visible: boolean; $delay: number }>`
  color: rgba(108, 99, 255, 0.6);
  font-size: 1.4rem;
  font-weight: 700;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.4s ease;
  transition-delay: ${({ $delay }) => $delay}s;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Visual = styled.div<{ $visible: boolean }>`
  position: relative;
  width: 100%;
  max-width: 480px;

  display: flex;
  justify-content: center;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : 24)}px);
  transition: opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s;
`;

export const SongCard = styled.div<{ $visible: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 18px 20px;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px);

  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
`;

export const SongArtwork = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(108, 99, 255, 0.3), rgba(255, 101, 132, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  flex-shrink: 0;
`;

export const SongInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const SongTitle = styled.div`
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SongArtist = styled.div`
  color: rgba(255, 255, 255, 0.45);
  font-size: 13px;
  font-weight: 500;
  margin-top: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SongAction = styled.span<{ $visible: boolean }>`
  color: #4caf50;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.4s ease 1s;
`;

export const GlowOrb = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(108, 99, 255, 0.25), transparent 70%);
  filter: blur(50px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;
