import { Plus, Search } from "lucide-react";

import {
  Header,
  TitleWrapper,
  Title,
  Subtitle,
  Actions,
  SearchContainer,
  SearchIcon,
  SearchInput,
  AddButton,
} from "./GenreHeader.styles";

interface GenreHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
  onAdd: () => void;
}

const GenreHeader = ({ search, onSearchChange, onAdd }: GenreHeaderProps) => {
  return (
    <Header>
      <TitleWrapper>
        <Title>Genres</Title>

        <Subtitle>
          Organize your music by genre and discover your favorite songs faster.
        </Subtitle>
      </TitleWrapper>

      <Actions>
        <SearchContainer>
          <SearchIcon>
            <Search size={18} />
          </SearchIcon>

          <SearchInput
            type="text"
            placeholder="Search genres..."
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </SearchContainer>

        <AddButton type="button" onClick={onAdd}>
          <Plus size={18} />
          Add Genre
        </AddButton>
      </Actions>
    </Header>
  );
};

export default GenreHeader;
