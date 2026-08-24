import { UserRound } from "lucide-react";

import { useArtistStore } from "../../../store/artist.store";

import {
  Container,
  IconWrapper,
  Title,
  Description,
  Button,
} from "./ArtistEmpty.styles";

const ArtistEmpty = () => {
  const { search, openCreateModal } = useArtistStore();

  const isSearching = search.trim().length > 0;

  if (isSearching) {
    return (
      <Container>
        <IconWrapper>
          <UserRound size={32} />
        </IconWrapper>

        <Title>No artists found</Title>

        <Description>Try searching for a different artist.</Description>
      </Container>
    );
  }

  return (
    <Container>
      <IconWrapper>
        <UserRound size={32} />
      </IconWrapper>

      <Title>No artists yet</Title>

      <Description>
        Add your first artist to start building your music library.
      </Description>

      <Button type="button" onClick={openCreateModal}>
        Add Artist
      </Button>
    </Container>
  );
};

export default ArtistEmpty;
