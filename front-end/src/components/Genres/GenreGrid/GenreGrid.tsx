import type { Genre } from "../../../types/genre.types";

import GenreCard from "../GenreCard/GenreCard";

import { Grid, EmptyState, EmptyTitle, EmptyMessage } from "./GenreGrid.styles";

interface GenreGridProps {
  genres: Genre[];
  songCounts?: Map<string, number>;

  onEdit: (genre: Genre) => void;

  onDelete: (genre: Genre) => void;

  onGenreClick?: (genre: Genre) => void;
}

const GenreGrid = ({
  genres,
  songCounts,
  onEdit,
  onDelete,
  onGenreClick,
}: GenreGridProps) => {
  if (genres.length === 0) {
    return (
      <EmptyState>
        <EmptyTitle>No genres found</EmptyTitle>

        <EmptyMessage>
          Create your first genre to start organizing your music.
        </EmptyMessage>
      </EmptyState>
    );
  }

  return (
    <Grid>
      {genres.map((genre) => (
        <GenreCard
          key={genre._id}
          genre={genre}
          songCount={songCounts?.get(genre._id) ?? 0}
          onEdit={onEdit}
          onDelete={onDelete}
          onClick={onGenreClick}
        />
      ))}
    </Grid>
  );
};

export default GenreGrid;
