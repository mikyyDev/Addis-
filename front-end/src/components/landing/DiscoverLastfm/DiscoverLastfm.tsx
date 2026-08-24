import {
  Section,
  Container,
  Content,
  Title,
  TitleAccent,
  Features,
  FeatureItem,
  FeatureDot,
  FeatureText,
  Visual,
  LastfmLogo,
} from "./DiscoverLastfm.styles";

const FEATURES_LIST = [
  "Search songs and artists",
  "Find albums and tracks",
  "See detailed music info",
  "Search import music info",
  "Import to your library",
];

const DiscoverLastfm = () => {
  return (
    <Section id="about">
      <Container>
        <Content>
          <Title>
            Discover music with <TitleAccent>Last.fm</TitleAccent>
          </Title>

          <Features>
            {FEATURES_LIST.map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureDot />
                <FeatureText>{feature}</FeatureText>
              </FeatureItem>
            ))}
          </Features>
        </Content>

        <Visual>
          <LastfmLogo />
        </Visual>
      </Container>
    </Section>
  );
};

export default DiscoverLastfm;
