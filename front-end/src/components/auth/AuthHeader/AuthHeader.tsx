import { Container, Title, Subtitle, FaviconImage } from "./AuthHeader.styles";

interface Props {
  title: string;
  subtitle: string;
}

const AuthHeader = ({ title, subtitle }: Props) => {
  return (
    <Container>
      <FaviconImage src="/favicon.webp" alt="Addis ሙዚቃ" />

      <Title>{title}</Title>

      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default AuthHeader;
