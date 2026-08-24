import { Plus, Search } from "lucide-react";

import { useAlbumStore } from "../../../store/album.store";

import {
  HeaderContainer,
  TitleSection,
  Title,
  Subtitle,
  Actions,
  SearchContainer,
  SearchIcon,
  SearchInput,
  AddButton,
} from "./AlbumHeader.styles";

const AlbumHeader = () => {
  const { albums, search, setSearch, openCreateModal } = useAlbumStore();

  const albumLabel = `${albums.length} ${
    albums.length === 1 ? "album" : "albums"
  }`;

  return (
    <HeaderContainer>
      <TitleSection>
        <Title>Albums</Title>

        <Subtitle>
          Your collection, your sound <span>{albumLabel}</span>
        </Subtitle>
      </TitleSection>

      <Actions>
        <SearchContainer>
          <SearchIcon>
            <Search size={18} />
          </SearchIcon>

          <SearchInput
            type="text"
            placeholder="Search albums..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </SearchContainer>

        <AddButton type="button" onClick={openCreateModal}>
          <Plus size={18} />
          Add Album
        </AddButton>
      </Actions>
    </HeaderContainer>
  );
};

export default AlbumHeader;
