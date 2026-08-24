import { useState } from "react";

import { MoreVertical, Pencil, Trash2, Disc3 } from "lucide-react";

import type { Album } from "../../../types/album.types";

import {
  Card,
  ImageWrapper,
  AlbumImage,
  Placeholder,
  CardOverlay,
  Content,
  AlbumName,
  ArtistName,
  ReleaseYear,
  MenuButton,
  Menu,
  MenuItem,
  DeleteMenuItem,
} from "./AlbumCard.styles";

interface AlbumCardProps {
  album: Album;

  onEdit?: (album: Album) => void;

  onDelete?: (album: Album) => void;
}

const AlbumCard = ({ album, onEdit, onDelete }: AlbumCardProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Card>
      <ImageWrapper>
        {album.image ? (
          <AlbumImage
            src={album.image}
            alt={album.name}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <Placeholder>
            <Disc3 size={52} strokeWidth={1.4} />
          </Placeholder>
        )}

        <CardOverlay />

        <MenuButton
          type="button"
          onClick={(event) => {
            event.stopPropagation();

            setMenuOpen((previous) => !previous);
          }}
        >
          <MoreVertical size={20} />
        </MenuButton>

        {menuOpen && (
          <Menu>
            <MenuItem
              type="button"
              onClick={() => {
                setMenuOpen(false);

                onEdit?.(album);
              }}
            >
              <Pencil size={16} />
              Edit Album
            </MenuItem>

            <DeleteMenuItem
              type="button"
              onClick={() => {
                setMenuOpen(false);

                onDelete?.(album);
              }}
            >
              <Trash2 size={16} />
              Delete Album
            </DeleteMenuItem>
          </Menu>
        )}

        <Content>
          <AlbumName title={album.name}>{album.name}</AlbumName>

          <ArtistName>{album.artistId?.name ?? "Unknown Artist"}</ArtistName>

          {album.releaseYear && <ReleaseYear>{album.releaseYear}</ReleaseYear>}
        </Content>
      </ImageWrapper>
    </Card>
  );
};

export default AlbumCard;
