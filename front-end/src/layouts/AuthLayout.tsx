import type { ReactNode } from "react";

import { Container, Overlay, Card } from "./AuthLayout.styles";

import background from "../assets/images/background.png";

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <Container background={background}>
      <Overlay />

      <Card>{children}</Card>
    </Container>
  );
};

export default AuthLayout;
