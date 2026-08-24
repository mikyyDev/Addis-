import { Link } from "react-router-dom";

import { Container } from "./AuthFooter.styles";

interface Props {
  text: string;

  linkText: string;

  to: string;
}

const AuthFooter = ({
  text,

  linkText,

  to,
}: Props) => {
  return (
    <Container>
      {text}

      <Link to={to}>{linkText}</Link>
    </Container>
  );
};

export default AuthFooter;
