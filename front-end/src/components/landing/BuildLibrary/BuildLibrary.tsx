import { Link } from "react-router-dom";

import {
  CTASection,
  CTAContainer,
  Title,
  Button,
} from "./BuildLibrary.styles";

const BuildLibrary = () => {
  return (
    <CTASection>
      <CTAContainer>
        <Title>Build your music library today.</Title>

        <Link to="/register">
          <Button>Get Started</Button>
        </Link>
      </CTAContainer>
    </CTASection>
  );
};

export default BuildLibrary;
