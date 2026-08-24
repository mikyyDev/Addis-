import { Disc3 } from "lucide-react";

import {
  Container,
  IconWrapper,
  Title,
  Description,
} from "./GenreEmpty.styles";

interface GenreEmptyProps {
  search: string;
  onAdd: () => void;
}

const GenreEmpty = ({ search, onAdd }: GenreEmptyProps) => {
  return (
    <Container>
      <IconWrapper>
        <Disc3 size={32} />
      </IconWrapper>

      <Title>{search ? "No matching genres found" : "No Genre found"}</Title>

      <Description>
        {search
          ? "Try a different search term or add a new genre."
          : "You haven't added any genre yet. Start building your music collection by adding your first genre."}
      </Description>

      {!search && (
        <button type="button" onClick={onAdd} style={{ marginTop: 16 }}>
          Add Genre
        </button>
      )}
    </Container>
  );
};

export default GenreEmpty;
