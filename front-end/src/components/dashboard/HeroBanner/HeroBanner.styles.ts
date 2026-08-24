import styled from "@emotion/styled";

export const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: visible;
  min-height: 10px;
  border-radius: 35px;
  margin-bottom: 40px;
  padding: 0 60px;

  @media (max-width: 900px) {
    align-items: stretch;
    flex-direction: column;
    min-height: 360px;
    margin-bottom: 24px;
    padding: 0 24px 24px;
  }

  @media (max-width: 520px) {
    min-height: 330px;
    padding: 0 18px 20px;
  }
`;

export const BackgroundLayer = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 35px;
  overflow: hidden;
  z-index: 0;
  background:
    radial-gradient(
      circle at 25% 60%,
      rgba(255, 120, 140, 0.5),
      rgba(80, 40, 70, 0.3) 30%,
      transparent 55%
    ),
    linear-gradient(
      100deg,
      rgba(25, 10, 50, 0.95) 0%,
      rgba(75, 30, 110, 0.8) 40%,
      rgba(55, 20, 90, 0.9) 100%
    ),
    #0f0620;
  backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.16);
`;

export const LeftSide = styled.div`
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: flex-end;
  width: 280px;
  flex-shrink: 0;
  z-index: 2;

  @media (max-width: 900px) {
    width: 100%;
    height: 125px;
    align-self: flex-start;
  }
`;

export const ArtistImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 125%;
  width: auto;
  max-width: none;
  object-fit: contain;
  user-select: none;
  pointer-events: none;

  @media (max-width: 900px) {
    left: 12px;
    height: 155px;
  }
`;

export const RightSide = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  color: white;
  padding: 30px 0 30px 40px;
  flex: 1;

  @media (max-width: 900px) {
    padding: 0;
  }
`;

export const Subtitle = styled.span`
  font-size: 1.15rem;
  color: #d4c8f0;
  font-weight: 400;
  letter-spacing: 0.3px;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 1.05;

  @media (max-width: 900px) {
    font-size: 2.35rem;
  }

  @media (max-width: 520px) {
    font-size: 1.9rem;
  }
`;

export const Badge = styled.div`
  width: 72px;
  height: 72px;
  background: white;
  color: #24114a;
  font-weight: 800;
  font-size: 0.7rem;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-12deg);
  flex-shrink: 0;
  clip-path: polygon(
    50% 0%,
    61% 20%,
    82% 12%,
    78% 34%,
    100% 40%,
    85% 56%,
    96% 75%,
    74% 74%,
    68% 96%,
    50% 80%,
    32% 96%,
    26% 74%,
    4% 75%,
    15% 56%,
    0% 40%,
    22% 34%,
    18% 12%,
    39% 20%
  );
`;

export const Album = styled.h3`
  margin: 2px 0 0;
  font-size: 1.6rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 1px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 18px;

  @media (max-width: 520px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const PlayButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 30px;
  border: none;
  border-radius: 40px;
  background: white;
  color: black;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255, 255, 255, 0.15);
  }
`;

export const FollowButton = styled.button`
  padding: 13px 34px;
  border-radius: 40px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;
