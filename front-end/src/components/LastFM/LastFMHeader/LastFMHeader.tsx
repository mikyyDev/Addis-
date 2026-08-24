import {
  Header,
  Title,
  Highlight,
  Subtitle,
  GlowOrb,
} from "./LastFMHeader.styles";

const LastFMHeader = () => {
  return (
    <Header>
      <GlowOrb />

      <Title>
        Discover your next{" "}
        <Highlight>favorite song</Highlight>
      </Title>

      <Subtitle>
        Explore music through Last.fm and bring the songs you love into your personal collection.
      </Subtitle>
    </Header>
  );
};

export default LastFMHeader;
