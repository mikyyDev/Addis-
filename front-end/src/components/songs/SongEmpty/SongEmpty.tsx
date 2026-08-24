import { Music2, SearchX } from "lucide-react";

import { Container, Icon, Title, Description } from "./SongEmpty.styles";

interface Props {
  hasSongs?: boolean;
}

const SongEmpty = ({ hasSongs = false }: Props) => {
  return (
    <Container>
      <Icon>
        {hasSongs ? <SearchX size={70} /> : <Music2 size={70} />}
      </Icon>

      <Title>{hasSongs ? "No Matches" : "No Songs Yet"}</Title>

      <Description>
        {hasSongs
          ? "No songs match your current search or filters. Try a different combination."
          : "Start building your music library by adding your first song."}
      </Description>
    </Container>
  );
};

export default SongEmpty;
