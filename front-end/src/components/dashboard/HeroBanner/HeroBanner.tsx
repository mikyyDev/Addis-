import { Play } from "lucide-react";

import artistImage from "../../../assets/images/artist.png";

import {
  Container,
  BackgroundLayer,
  LeftSide,
  ArtistImage,
  RightSide,
  Subtitle,
  TitleRow,
  Title,
  Badge,
  Album,
  Buttons,
  PlayButton,
  FollowButton,
} from "./HeroBanner.styles";

const HeroBanner = () => {
  return (
    <Container>
      <BackgroundLayer />

      <LeftSide>
        <ArtistImage src={artistImage} alt="Featured Artist" />
      </LeftSide>

      <RightSide>
        <Subtitle>Moments In Between</Subtitle>

        <TitleRow>
          <Title>RUTH B.</Title>
          <Badge>NEW</Badge>
        </TitleRow>

        <Album>NEW ALBUM</Album>

        <Buttons>
          <PlayButton>
            <Play size={18} fill="currentColor" />
            PLAY NOW
          </PlayButton>
          <FollowButton>FOLLOW</FollowButton>
        </Buttons>
      </RightSide>
    </Container>
  );
};

export default HeroBanner;
