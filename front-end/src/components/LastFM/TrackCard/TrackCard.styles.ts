import styled from "@emotion/styled";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const Row = styled.article<{ $isPlaying?: boolean }>`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 10px 14px;

  border-radius: 10px;

  background: ${({ $isPlaying }) =>
    $isPlaying ? "rgba(108, 99, 255, 0.12)" : "transparent"};

  transition: background 0.2s ease;

  cursor: default;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }

  @media (max-width: 768px) {
    padding: 10px 8px;
    gap: 10px;
  }
`;

export const IndexNumber = styled.span`
  width: 28px;
  flex-shrink: 0;

  text-align: center;

  color: rgba(255, 255, 255, 0.35);
  font-size: 14px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ArtworkWrapper = styled.div`
  position: relative;

  width: 48px;
  height: 48px;
  flex-shrink: 0;

  overflow: hidden;
  border-radius: 8px;

  background: rgba(255, 255, 255, 0.06);

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;

    transition:
      transform 0.25s ease,
      filter 0.25s ease;
  }

  &:hover img {
    transform: scale(1.06);
    filter: brightness(0.7);
  }

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
  }
`;

export const ArtworkOverlay = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.4);

  opacity: 0;
  transition: opacity 0.2s ease;
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, 0.35);
`;

export const TrackInfo = styled.div`
  flex: 1;
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const TrackTitle = styled.h3`
  margin: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: #fff;
  font-size: 15px;
  font-weight: 600;

  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: #a99cff;
  }
`;

export const TrackArtist = styled.button`
  display: inline-block;

  max-width: 280px;

  margin: 0;
  padding: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  border: none;
  background: none;

  color: rgba(255, 255, 255, 0.55);
  font-size: 13px;

  text-align: left;

  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: #a99cff;
    text-decoration: underline;
  }
`;

export const LibraryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  padding: 3px 8px;
  margin-top: 2px;

  border: 1px solid rgba(76, 175, 80, 0.35);
  border-radius: 999px;

  background: rgba(76, 175, 80, 0.1);

  color: #4caf50;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  width: fit-content;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  flex-shrink: 0;

  @media (max-width: 600px) {
    gap: 4px;
  }
`;

export const IconButton = styled.button`
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;

  background: transparent;

  color: rgba(255, 255, 255, 0.5);

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    transform: translateY(-1px);
  }

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

export const FavoriteButton = styled(IconButton)<{ $active: boolean }>`
  border-color: ${({ $active }) =>
    $active ? "rgba(255, 107, 107, 0.4)" : "rgba(255, 255, 255, 0.12)"};

  background: ${({ $active }) =>
    $active ? "rgba(255, 107, 107, 0.12)" : "transparent"};

  color: ${({ $active }) => ($active ? "#ff6b6b" : "rgba(255, 255, 255, 0.5)")};

  &:hover {
    background: ${({ $active }) =>
      $active ? "rgba(255, 107, 107, 0.22)" : "rgba(255, 255, 255, 0.08)"};
    border-color: rgba(255, 107, 107, 0.5);
    color: #ff6b6b;
  }
`;

export const ImportButton = styled.button<{ $inLibrary: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;

  height: 34px;
  padding: 0 14px;

  border: 1px solid
    ${({ $inLibrary }) =>
      $inLibrary ? "rgba(76, 175, 80, 0.35)" : "rgba(108, 99, 255, 0.4)"};
  border-radius: 8px;

  background: ${({ $inLibrary }) =>
    $inLibrary ? "rgba(76, 175, 80, 0.1)" : "rgba(108, 99, 255, 0.12)"};

  color: ${({ $inLibrary }) => ($inLibrary ? "#4caf50" : "#a99cff")};
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;

  cursor: ${({ $inLibrary }) => ($inLibrary ? "default" : "pointer")};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ $inLibrary }) =>
      $inLibrary ? "rgba(76, 175, 80, 0.1)" : "rgba(108, 99, 255, 0.24)"};
    border-color: ${({ $inLibrary }) =>
      $inLibrary ? "rgba(76, 175, 80, 0.35)" : "rgba(108, 99, 255, 0.7)"};
  }

  @media (max-width: 600px) {
    padding: 0 10px;
    font-size: 11px;
    height: 30px;
  }
`;

export const SourceMenu = styled.div`
  position: absolute;
  right: 12px;
  bottom: 50px;
  z-index: 30;

  width: 200px;

  padding: 6px;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;

  background: rgba(18, 18, 28, 0.97);
  backdrop-filter: blur(20px);

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);

  animation: menuIn 0.15s ease-out;

  @keyframes menuIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SourceMenuItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 12px;

  border: none;
  border-radius: 8px;

  background: transparent;

  color: #fff;
  font-size: 13px;

  text-align: left;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }

  svg {
    flex-shrink: 0;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const SourceDivider = styled.div`
  height: 1px;
  margin: 4px 8px;
  background: rgba(255, 255, 255, 0.08);
`;

export const RowRelative = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const MobileActions = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;
