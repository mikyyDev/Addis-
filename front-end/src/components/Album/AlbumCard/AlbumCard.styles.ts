import styled from "@emotion/styled";

export const Card = styled.article`
  position: relative;

  min-width: 0;
`;

export const ImageWrapper = styled.div`
  position: relative;

  width: 100%;

  aspect-ratio: 1 / 1;

  overflow: hidden;

  border-radius: 14px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  background: rgba(255, 255, 255, 0.06);

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);

    border-color: rgba(255, 255, 255, 0.18);
  }
`;

export const AlbumImage = styled.img`
  width: 100%;

  height: 100%;

  display: block;

  object-fit: cover;
`;

export const Placeholder = styled.div`
  width: 100%;

  height: 100%;

  display: flex;

  align-items: center;

  justify-content: center;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.03)
  );

  color: ${({ theme }) => theme.colors.primary};
`;

export const CardOverlay = styled.div`
  position: absolute;

  inset: 0;

  background: linear-gradient(
    to top,
    rgba(8, 7, 15, 0.96) 0%,
    rgba(8, 7, 15, 0.58) 35%,
    rgba(8, 7, 15, 0.04) 72%
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

export const AlbumName = styled.h3`
  margin: 0 0 5px;

  color: white;

  font-size: 17px;

  font-weight: 700;

  line-height: 1.3;

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;
`;

export const ArtistName = styled.p`
  margin: 0;

  color: rgba(255, 255, 255, 0.78);

  font-size: 13px;

  font-weight: 500;

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;
`;

export const ReleaseYear = styled.span`
  display: inline-flex;

  margin-top: 6px;

  padding: 4px 8px;

  border-radius: 6px;

  background: rgba(255, 255, 255, 0.1);

  color: rgba(255, 255, 255, 0.85);

  font-size: 11px;

  font-weight: 600;

  backdrop-filter: blur(6px);
`;

export const MenuButton = styled.button`
  position: absolute;

  top: 12px;

  right: 12px;

  z-index: 10;

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
    background: rgba(0, 0, 0, 0.72);

    transform: scale(1.05);
  }
`;

export const Menu = styled.div`
  position: absolute;

  top: 54px;

  right: 12px;

  z-index: 20;

  width: 155px;

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
