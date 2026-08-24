import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;

  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(8px);

  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  font-weight: 500;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.18);
    color: #fff;
  }
`;

export const GenreHero = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding: 8px 0;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const GenreTitle = styled.h1`
  margin: 0;
  color: #fff;
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, #fff, #c4b5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

export const GenreMeta = styled.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 15px;
  font-weight: 500;
`;

export const SongList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const SongRow = styled.div`
  display: grid;
  grid-template-columns: 32px 48px 1fr auto 40px;
  align-items: center;
  gap: 14px;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease;

  .song-index {
    color: rgba(255, 255, 255, 0.3);
    font-size: 14px;
    font-weight: 500;
    font-variant-numeric: tabular-nums;
    text-align: center;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }

  &:hover .song-index {
    color: transparent;
  }

  &:hover .play-overlay {
    opacity: 1;
  }

  @media (max-width: 768px) {
    grid-template-columns: 48px 1fr auto 36px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 40px 1fr 32px;
    gap: 8px;
    padding: 8px 10px;
  }
`;

export const Artwork = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

export const ArtworkPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.3);
`;

export const SongInfo = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const SongTitle = styled.h4`
  margin: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SongArtist = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.45);
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SongAlbum = styled.span`
  color: rgba(255, 255, 255, 0.35);
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PlayButton = styled.button`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(124, 58, 237, 0.25);
    color: #fff;
    transform: scale(1.08);
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 60px 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.35);
  font-size: 14px;
`;

export const EmptyIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.25);
`;
