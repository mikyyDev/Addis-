import styled from "@emotion/styled";

export const Card = styled.div`
  position: relative;
  min-width: 0;
`;

export const ImageWrapper = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 1.12 / 1;

  overflow: hidden;

  border-radius: 10px;

  background: rgba(255, 255, 255, 0.06);

  border: 1px solid rgba(255, 255, 255, 0.08);

  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.18);
  }
`;

export const ArtistImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  display: block;
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.06);

  color: ${({ theme }) => theme.colors.primary};
`;

export const CardOverlay = styled.div`
  position: absolute;

  inset: 0;

  background: linear-gradient(
    to top,
    rgba(8, 7, 15, 0.96) 0%,
    rgba(8, 7, 15, 0.55) 35%,
    rgba(8, 7, 15, 0.05) 70%
  );

  pointer-events: none;
`;

export const Content = styled.div`
  position: absolute;

  left: 16px;
  right: 16px;
  bottom: 16px;

  z-index: 2;
`;

export const ArtistName = styled.h3`
  margin: 0 0 6px;

  color: white;

  font-size: 18px;
  font-weight: 700;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Stats = styled.p`
  margin: 0;

  color: rgba(255, 255, 255, 0.78);

  font-size: 13px;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 7px;
`;

export const MenuButton = styled.button`
  position: absolute;

  top: 12px;
  right: 12px;

  z-index: 5;

  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.45);

  color: white;

  cursor: pointer;

  backdrop-filter: blur(8px);

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: scale(1.05);
  }
`;

export const Menu = styled.div`
  position: absolute;

  top: 54px;
  right: 12px;

  z-index: 20;

  width: 150px;

  padding: 6px;

  border: 1px solid rgba(255, 255, 255, 0.1);

  border-radius: 12px;

  background: rgba(25, 24, 32, 0.96);

  backdrop-filter: blur(16px);

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.45);
`;

export const MenuItem = styled.button`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 10px;

  padding: 10px 12px;

  border: none;
  border-radius: 8px;

  background: transparent;

  color: ${({ theme }) => theme.colors.text};

  font-size: 14px;

  text-align: left;

  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const DeleteMenuItem = styled(MenuItem)`
  color: #ff6b6b;

  &:hover {
    background: rgba(255, 80, 80, 0.1);
  }
`;
