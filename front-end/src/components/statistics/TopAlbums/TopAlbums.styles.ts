import styled from "@emotion/styled";

export const AlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 18px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 14px;
  }
`;

export const AlbumCard = styled.div<{ $rank: number }>`
  cursor: default;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const AlbumArtwork = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(108, 99, 255, 0.15),
    rgba(255, 255, 255, 0.04)
  );
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 10px;
`;

export const AlbumPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.2);
`;

export const AlbumOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 10px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.2s ease;
`;

export const AlbumSongCount = styled.span`
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(108, 99, 255, 0.8);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
`;

export const AlbumRank = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  color: rgba(255, 255, 255, 0.8);
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AlbumInfo = styled.div`
  min-width: 0;
`;

export const AlbumTitle = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 2px;
`;

export const AlbumArtistName = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
