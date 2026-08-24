import { Plus, Search } from "lucide-react";
import { useArtistStore } from "../../../store/artist.store";

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
} from "./ArtistHeader.styles";

const ArtistHeader = () => {
  const { artists, search, setSearch, openCreateModal } = useArtistStore();

  const artistLabel = `${artists.length} ${
    artists.length === 1 ? "artist" : "artists"
  }`;

  return (
    <HeaderContainer>
      <TitleSection>
        <Title>Artists</Title>

        <Subtitle>
          Your people, your sound <span>{artistLabel}</span>
        </Subtitle>
      </TitleSection>

      <Actions>
        <SearchContainer>
          <SearchIcon>
            <Search size={18} />
          </SearchIcon>

          <SearchInput
            type="text"
            placeholder="Search artists..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </SearchContainer>

        <AddButton type="button" onClick={openCreateModal}>
          <Plus size={18} />
          Add Artist
        </AddButton>
      </Actions>
    </HeaderContainer>
  );
};

export default ArtistHeader;
