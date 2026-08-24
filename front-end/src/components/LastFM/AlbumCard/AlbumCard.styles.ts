import styled from "@emotion/styled";

export const Card = styled.article`
  min-width: 0;
  position: relative;

  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.04);
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;

    transition: transform 0.25s ease;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: rgba(255, 255, 255, 0.06);
`;

export const Content = styled.div`
  padding: 10px 4px 0;
`;

export const AlbumName = styled.h3`
  margin: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 650;
`;

export const ArtistName = styled.p`
  margin: 3px 0 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
`;
