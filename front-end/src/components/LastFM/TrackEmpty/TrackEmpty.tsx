import { Music } from "lucide-react";

import { Container, IconWrapper, Title, Message } from "./TrackEmpty.styles";

interface TrackEmptyProps {
  title?: string;
  message?: string;
}

const TrackEmpty = ({
  title = "Search for music",
  message = "Search for a song or artist to discover music.",
}: TrackEmptyProps) => {
  return (
    <Container>
      <IconWrapper>
        <Music size={32} />
      </IconWrapper>

      <Title>{title}</Title>

      <Message>{message}</Message>
    </Container>
  );
};

export default TrackEmpty;
