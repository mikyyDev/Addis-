import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
`;

export const TabBar = styled.div`
  display: flex;
  gap: 28px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding-bottom: 0;
`;

export const Tab = styled.button<{ $active: boolean }>`
  position: relative;
  padding: 10px 2px;

  border: none;
  background: none;

  color: ${({ $active }) => ($active ? "#fff" : "rgba(255, 255, 255, 0.4)")};
  font-size: 15px;
  font-weight: ${({ $active }) => ($active ? "700" : "500")};
  cursor: pointer;
  transition: color 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const TabIndicator = styled.span`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  border-radius: 3px 3px 0 0;
  background: linear-gradient(135deg, #7c3aed, #a855f7);
`;

export const ContentGrid = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  gap: 6px 24px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

/* ─── Song Row (matches mockup) ─── */

export const SongCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 4px;
  border-radius: 0;
  background: transparent;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-radius: 10px;
  }
`;

export const SongArtwork = styled.div`
  position: relative;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const ArtworkPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(124, 58, 237, 0.3),
    rgba(168, 85, 247, 0.15)
  );
  color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  font-weight: 700;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.2s ease;
`;

export const PlayBtn = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);
`;

export const SongText = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const SongTitle = styled.h4`
  margin: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
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

/* ─── Playlist Row (compact like songs) ─── */

export const PlaylistCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 4px;
  border-radius: 0;
  background: transparent;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-radius: 10px;
  }
`;

export const PlaylistArtwork = styled.div`
  position: relative;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const PlaylistInfo = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const PlaylistName = styled.h4`
  margin: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PlaylistCount = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.45);
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

/* ─── Album Row (compact like songs) ─── */

export const AlbumCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 4px;
  border-radius: 0;
  background: transparent;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-radius: 10px;
  }
`;

export const AlbumArtwork = styled.div`
  position: relative;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const AlbumInfo = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const AlbumName = styled.h4`
  margin: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const AlbumArtist = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.45);
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
