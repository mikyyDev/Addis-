import styled from "@emotion/styled";

export const Card = styled.article`
  min-width: 0;
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;

    transition: transform 0.25s ease;
  }

  &:hover img {
    transform: scale(1.05);
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
  text-align: center;
`;

export const ArtistName = styled.h3`
  margin: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  font-weight: 650;
`;

export const Listeners = styled.p`
  margin: 3px 0 0;

  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
`;

export const OpenButton = styled.button`
  width: 100%;

  margin-top: 10px;
  padding: 8px 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;

  background: rgba(255, 255, 255, 0.06);

  color: ${({ theme }) => theme.colors.text};

  font-size: 12px;
  font-weight: 600;

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background: rgba(108, 99, 255, 0.2);
    border-color: rgba(108, 99, 255, 0.45);
  }
`;
