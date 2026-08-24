import { useState } from "react";
import { MoreVertical, Music2, Pencil, Trash2 } from "lucide-react";

import type { Artist } from "../../../types/artist.types";

import {
  Card,
  ImageWrapper,
  ArtistImage,
  Placeholder,
  CardOverlay,
  MenuButton,
  Menu,
  MenuItem,
  DeleteMenuItem,
  Content,
  ArtistName,
  Stats,
} from "./ArtistCard.styles";

interface ArtistCardProps {
  artist: Artist;
  onEdit?: (artist: Artist) => void;
  onDelete?: (artist: Artist) => void;
}

const ArtistCard = ({ artist, onEdit, onDelete }: ArtistCardProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Card>
      <ImageWrapper>
        {artist.image ? (
          <ArtistImage src={artist.image} alt={artist.name} />
        ) : (
          <Placeholder>
            <Music2 size={42} />
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
                onEdit?.(artist);
              }}
            >
              <Pencil size={16} />
              Edit Artist
            </MenuItem>

            <DeleteMenuItem
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onDelete?.(artist);
              }}
            >
              <Trash2 size={16} />
              Delete Artist
            </DeleteMenuItem>
          </Menu>
        )}

        <Content>
          <ArtistName>{artist.name}</ArtistName>

          <Stats>
            {artist.albumCount ?? 0}
            {artist.albumCount === 1 ? " Album" : " Albums"}

            <span>•</span>

            {artist.songCount ?? 0}
            {artist.songCount === 1 ? " Song" : " Songs"}
          </Stats>
        </Content>
      </ImageWrapper>
    </Card>
  );
};

export default ArtistCard;
