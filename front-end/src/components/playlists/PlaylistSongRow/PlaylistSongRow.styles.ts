import styled from "@emotion/styled";

export const Row = styled.div<{
  isDragging: boolean;
  isDragOver: boolean;
}>`
  display: grid;
  grid-template-columns: 48px 1fr 120px 120px;

  align-items: center;

  padding: 10px 16px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  background: ${({ isDragging }) =>
    isDragging ? "rgba(255, 255, 255, 0.06)" : "transparent"};

  opacity: ${({ isDragging }) => (isDragging ? 0.6 : 1)};

  cursor: grab;

  transition: background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 640px) {
    grid-template-columns: 36px 1fr auto;
    padding: 8px 10px;
    gap: 8px;
  }
`;

export const IndexCell = styled.span`
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
`;

export const TitleCell = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  min-width: 0;
  padding-left: 12px;
`;

export const Thumb = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  overflow: hidden;
  border-radius: 4px;

  background: rgba(255, 255, 255, 0.06);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const ThumbPlaceholder = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, 0.3);
`;

export const Info = styled.div`
  flex: 1;
  min-width: 0;
`;

export const SongTitle = styled.span`
  display: block;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
`;

export const SongArtist = styled.span`
  display: block;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: rgba(255, 255, 255, 0.5);
  font-size: 0.82rem;
`;

export const LinksCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const YtButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  padding: 5px 10px;

  border: 1px solid rgba(239, 68, 68, 0.4);
  border-radius: 6px;

  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;

  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.3px;

  transition: 0.15s;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
    border-color: rgba(239, 68, 68, 0.6);
  }
`;

export const SpButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  padding: 5px 10px;

  border: 1px solid rgba(30, 215, 96, 0.4);
  border-radius: 6px;

  background: rgba(30, 215, 96, 0.1);
  color: #1ed760;

  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.3px;

  transition: 0.15s;

  &:hover {
    background: rgba(30, 215, 96, 0.2);
    border-color: rgba(30, 215, 96, 0.6);
  }
`;

export const NoLinkText = styled.span`
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.75rem;
`;
