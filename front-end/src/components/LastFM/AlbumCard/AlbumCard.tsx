import { useState } from "react";

import { Disc3 } from "lucide-react";

import type { LastFMAlbum } from "../../../types/lastfm.types";

import {
  Card,
  ImageWrapper,
  ImagePlaceholder,
  Content,
  AlbumName,
  ArtistName,
} from "./AlbumCard.styles";

interface AlbumCardProps {
  album: LastFMAlbum;
  onOpen: (album: LastFMAlbum) => void;
}

const AlbumCard = ({ album, onOpen }: AlbumCardProps) => {
  const [imageError, setImageError] = useState(false);

  const hasImage = album.image && !imageError;

  return (
    <Card onClick={() => onOpen(album)}>
      <ImageWrapper>
        {hasImage ? (
          <img
            src={album.image!}
            alt={`${album.name} by ${album.artist}`}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <ImagePlaceholder>
            <Disc3 size={34} />
          </ImagePlaceholder>
        )}
      </ImageWrapper>

      <Content>
        <AlbumName title={album.name}>{album.name}</AlbumName>
        <ArtistName title={album.artist}>{album.artist}</ArtistName>
      </Content>
    </Card>
  );
};

export default AlbumCard;
