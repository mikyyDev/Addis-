import styled from "@emotion/styled";

export const Card = styled.article`
  position: relative;

  border-radius: 12px;
  overflow: hidden;

  cursor: pointer;

  transition: 0.3s ease;
  aspect-ratio: 1 / 1.15;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  }

  &:hover .play-overlay {
    opacity: 1;
  }
`;

export const CoverImage = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;

  display: block;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.3) 40%,
    rgba(0, 0, 0, 0) 60%
  );
`;

export const PlaceholderBg = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: rgba(255, 255, 255, 0.35);
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 1.2rem;
`;

export const Title = styled.h3`
  margin: 0;

  color: #fff;
  font-size: 1.2rem;
  font-weight: 800;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.p`
  margin: 4px 0 0;

  color: rgba(255, 255, 255, 0.65);
  font-size: 0.82rem;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;
`;

export const SongCountBadge = styled.span`
  display: inline-flex;
  align-items: center;

  padding: 4px 12px;

  border-radius: 20px;

  background: rgba(217, 119, 6, 0.25);
  color: #f59e0b;

  font-size: 0.78rem;
  font-weight: 700;
`;

export const DateText = styled.span`
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.78rem;
`;

export const PlayOverlay = styled.div`
  position: absolute;
  bottom: 4.5rem;
  right: 1.2rem;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #1db954;
  color: #000;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);

  opacity: 0;
  transform: translateY(8px);
  transition: 0.25s ease;
`;
