import {
  HeroContainer,
  HeroContent,
  LeftContent,
  RightContent,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
  StatsContainer,
  StatBox,
  PortraitShell,
  SideStack,
  InfoCircle,
  MicImage,
} from "./Hero.styles";

import portraitImage from "../../../assets/images/the Girl singing.jpg";
import micImage from "../../../assets/images/mic.avif";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <LeftContent>
          <p>Feel the Beat, Your Way.</p>
          <h1>Stream. Discover. Play. Anytime, Anywhere.</h1>

          <p>
            Experience music like never before. Discover new tracks, create
            playlists, and let the rhythm move you.
          </p>

          <ButtonContainer>
            <PrimaryButton>Sign Up</PrimaryButton>
            <SecondaryButton>FOLLOW</SecondaryButton>
          </ButtonContainer>

          <StatsContainer>
            <StatBox>
              <h3>345K</h3>
              <p>Customers</p>
            </StatBox>
            <StatBox>
              <h3>345K</h3>
              <p>Tracks</p>
            </StatBox>
          </StatsContainer>
        </LeftContent>

        <RightContent>
          <PortraitShell>
            <img src={portraitImage} alt="Singer portrait" />
          </PortraitShell>
          <SideStack>
            <InfoCircle>
              <div>
                <h4>90%</h4>
                <p>Peoples In The World Loves To Listen Music</p>
              </div>
            </InfoCircle>
            <MicImage src={micImage} alt="Microphone" />
          </SideStack>
        </RightContent>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
