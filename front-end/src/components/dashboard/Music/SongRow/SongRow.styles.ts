import styled from "@emotion/styled";

export const Row = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1.5fr 1.5fr 1fr 80px;
  align-items: center;
  padding: 12px 24px;
  border-radius: 14px;
  background: transparent;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const SongInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
`;

export const Cover = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.25s ease;
  }

  .dashboard-song-row:hover & img {
    transform: scale(1.04);
  }
`;

export const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
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

export const Artist = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Album = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Genre = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Actions = styled.div`
  display: flex;
  gap: 6px;
  opacity: 0;
  transition: opacity 0.2s ease;

  .dashboard-song-row:hover & {
    opacity: 1;
  }
`;

export const ActionButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(124, 58, 237, 0.2);
    color: #fff;
    transform: scale(1.08);
  }
`;
