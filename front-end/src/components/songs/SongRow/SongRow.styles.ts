import styled from "@emotion/styled";

export const Row = styled.div`
  display: flex;

  align-items: center;

  gap: 1rem;

  padding: 0.7rem 1rem;

  transition: 0.2s;

  cursor: pointer;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(136, 98, 182, 0.42),
      rgba(123, 76, 177, 0.34)
    );

    border-color: rgba(255, 255, 255, 0.14);
  }
`;

export const IndexCell = styled.span`
  width: 26px;

  flex-shrink: 0;

  display: flex;

  align-items: center;

  justify-content: center;
`;

export const IndexNumber = styled.span`
  color: rgba(255, 255, 255, 0.4);

  font-size: 0.85rem;

  .song-row:hover & {
    display: none;
  }
`;

export const IndexPlay = styled.span`
  display: none;

  color: #a78bfa;

  .song-row:hover & {
    display: flex;
  }
`;

export const SongCell = styled.div`
  flex: 1;

  min-width: 0;

  display: flex;

  align-items: center;

  gap: 0.8rem;
`;

export const Thumb = styled.img`
  width: 46px;

  height: 46px;

  object-fit: cover;

  border-radius: 10px;

  flex-shrink: 0;
`;

export const Title = styled.div`
  color: white;

  font-weight: 600;

  font-size: 0.95rem;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;
`;

export const Artist = styled.div`
  width: 160px;

  flex-shrink: 0;

  color: rgba(255, 255, 255, 0.55);

  font-size: 0.88rem;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Album = styled.div`
  width: 180px;

  flex-shrink: 0;

  color: rgba(255, 255, 255, 0.7);

  font-size: 0.88rem;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const GenreBadges = styled.div`
  display: flex;

  gap: 0.35rem;

  width: 130px;

  flex-shrink: 0;

  flex-wrap: wrap;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const GenreBadge = styled.span`
  padding: 0.2rem 0.55rem;

  border-radius: 30px;

  background: rgba(139, 92, 246, 0.25);

  color: #d8b4fe;

  font-size: 0.72rem;

  white-space: nowrap;
`;

export const Duration = styled.span`
  width: 70px;

  flex-shrink: 0;

  color: rgba(255, 255, 255, 0.4);

  font-size: 0.85rem;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Actions = styled.div`
  width: 48px;

  flex-shrink: 0;

  display: flex;

  justify-content: flex-end;
`;
