import { Edit3, MoreVertical, Trash2, Music2 } from "lucide-react";

import { useState } from "react";

import type { Genre } from "../../../types/genre.types";

import {
  Card,
  IconWrapper,
  GenreIcon,
  Info,
  GenreName,
  SongCount,
  ActionsButton,
  ActionsMenu,
  ActionButton,
  Divider,
} from "./GenreCard.styles";

interface GenreCardProps {
  genre: Genre;

  songCount?: number;

  onEdit: (genre: Genre) => void;

  onDelete: (genre: Genre) => void;

  onClick?: (genre: Genre) => void;
}

const GenreCard = ({
  genre,
  songCount = 0,
  onEdit,
  onDelete,
  onClick,
}: GenreCardProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCardClick = () => {
    if (onClick) {
      onClick(genre);
    }
  };

  return (
    <Card
      onClick={handleCardClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <IconWrapper>
        <GenreIcon>
          <Music2 size={22} />
        </GenreIcon>
      </IconWrapper>

      <Info>
        <GenreName title={genre.name}>{genre.name}</GenreName>

        <SongCount>
          {songCount} {songCount === 1 ? "song" : "songs"}
        </SongCount>
      </Info>

      <ActionsButton
        type="button"
        aria-label={`Actions for ${genre.name}`}
        onClick={(event) => {
          event.stopPropagation();

          setMenuOpen((previous) => !previous);
        }}
      >
        <MoreVertical size={19} />
      </ActionsButton>

      {menuOpen && (
        <ActionsMenu onClick={(event) => event.stopPropagation()}>
          <ActionButton
            type="button"
            onClick={() => {
              setMenuOpen(false);
              onEdit(genre);
            }}
          >
            <Edit3 size={16} />

            <span>Edit</span>
          </ActionButton>

          <Divider />

          <ActionButton
            type="button"
            $danger
            onClick={() => {
              setMenuOpen(false);
              onDelete(genre);
            }}
          >
            <Trash2 size={16} />

            <span>Delete</span>
          </ActionButton>
        </ActionsMenu>
      )}
    </Card>
  );
};

export default GenreCard;
