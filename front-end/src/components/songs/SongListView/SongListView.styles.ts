import styled from "@emotion/styled";

export const List = styled.div`
  display: flex;

  flex-direction: column;

  gap: 0;

  padding-bottom: 0.5rem;
`;

export const ListHeader = styled.div`
  display: flex;

  align-items: center;

  gap: 1rem;

  padding: 0.4rem 1rem;

  color: rgba(255, 255, 255, 0.4);

  font-size: 0.65rem;

  text-transform: uppercase;

  letter-spacing: 0.06em;
`;

export const HeaderIndex = styled.span`
  width: 26px;

  flex-shrink: 0;

  text-align: center;
`;

export const HeaderSong = styled.span`
  flex: 1;

  min-width: 0;
`;

export const HeaderArtist = styled.span`
  width: 160px;

  flex-shrink: 0;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const HeaderAlbum = styled.span`
  width: 180px;

  flex-shrink: 0;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const HeaderGenre = styled.span`
  width: 130px;

  flex-shrink: 0;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const HeaderDuration = styled.span`
  width: 70px;

  flex-shrink: 0;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const HeaderActions = styled.span`
  width: 48px;

  flex-shrink: 0;

  text-align: right;
`;
