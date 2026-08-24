import {
  Section,
  Container,
  SectionTitle,
  CardGrid,
  Card,
  CardIconCircle,
  CardTitle,
  CardCount,
} from "./KeyFeatures.styles";

const FEATURES = [
  { icon: "🎵", title: "Songs", count: "Manage your tracks", color: "#8b5cf6" },
  { icon: "🎤", title: "Artists", count: "Follow artists", color: "#ec4899" },
  { icon: "💿", title: "Albums", count: "Collect albums", color: "#06b6d4" },
  { icon: "🌍", title: "Genres", count: "Explore genres", color: "#f59e0b" },
  { icon: "📋", title: "Playlists", count: "Create playlists", color: "#10b981" },
  { icon: "🔍", title: "Music Discovery", count: "Find new music", color: "#ef4444" },
];

const KeyFeatures = () => {
  return (
    <Section id="features">
      <Container>
        <SectionTitle>Key Features</SectionTitle>

        <CardGrid>
          {FEATURES.map((feature, index) => (
            <Card key={index}>
              <CardIconCircle $color={feature.color}>
                {feature.icon}
              </CardIconCircle>
              <CardTitle>{feature.title}</CardTitle>
              <CardCount>{feature.count}</CardCount>
            </Card>
          ))}
        </CardGrid>
      </Container>
    </Section>
  );
};

export default KeyFeatures;
