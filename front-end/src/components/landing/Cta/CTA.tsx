import { Link } from "react-router-dom";

import {
  CTASection,
  CTAContainer,
  Title,
  TitleAccent,
  Description,
  Buttons,
  PrimaryButton,
  SecondaryButton,
} from "./CTA.styles";

const CTA = () => {
  return (
    <CTASection>
      <CTAContainer>
        <Title>
          Start building your <TitleAccent>music universe</TitleAccent>
        </Title>

        <Description>
          Join Freebuff and discover, import, and organize your music
          collection in one beautiful place.
        </Description>

        <Buttons>
          <Link to="/register">
            <PrimaryButton>Get Started</PrimaryButton>
          </Link>

          <Link to="/login">
            <SecondaryButton>Explore the experience</SecondaryButton>
          </Link>
        </Buttons>
      </CTAContainer>
    </CTASection>
  );
};

export default CTA;
