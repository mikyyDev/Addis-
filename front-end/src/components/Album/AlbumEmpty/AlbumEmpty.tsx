import { Disc3 } from "lucide-react";

import {
  Container,
  IconWrapper,
  Title,
  Description,
} from "./AlbumEmpty.styles";

const AlbumEmpty = () => {
  return (
    <Container>
      <IconWrapper>
        <Disc3 size={32} />
      </IconWrapper>

      <Title>No albums found</Title>

      <Description>
        You haven't added any albums yet. Start building your music collection
        by adding your first album.
      </Description>
    </Container>
  );
};

export default AlbumEmpty;
