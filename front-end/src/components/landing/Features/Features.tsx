import FeatureCard from "./FeatureCard";
import {
  Section,
  Container,
  SectionTitle,
  SectionSubtitle,
  CardGrid,
} from "./Features.styles";

const Features = () => {
  return (
    <Section id="features">
      <Container>
        <SectionSubtitle>FEATURES</SectionSubtitle>

        <SectionTitle>Everything You Need</SectionTitle>

        <CardGrid>
          <FeatureCard
            icon="🎵"
            title="Manage Songs"
            description="Create, edit, delete and organize your music collection effortlessly."
          />

          <FeatureCard
            icon="🎤"
            title="Artists"
            description="Keep all artist information organized in one place."
          />

          <FeatureCard
            icon="💿"
            title="Albums"
            description="Group songs into albums with a beautiful interface."
          />

          <FeatureCard
            icon="📊"
            title="Statistics"
            description="Visualize your music library with interactive charts."
          />
        </CardGrid>
      </Container>
    </Section>
  );
};

export default Features;
