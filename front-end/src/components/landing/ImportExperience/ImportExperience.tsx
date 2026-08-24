import { useEffect, useState, useRef } from "react";

import {
  Section,
  Container,
  Content,
  Label,
  Title,
  TitleAccent,
  Subtitle,
  Flow,
  FlowStep,
  StepIcon,
  StepLabel,
  FlowArrow,
  Visual,
  SongCard,
  SongArtwork,
  SongInfo,
  SongTitle,
  SongArtist,
  SongAction,
  GlowOrb,
} from "./ImportExperience.styles";

const ImportExperience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section ref={sectionRef}>
      <Container>
        <Content>
          <Label>Seamless Import</Label>

          <Title>
            From discovery to <TitleAccent>your collection</TitleAccent>
          </Title>

          <Subtitle>
            One click. That's all it takes. Songs from Last.fm flow directly
            into your personal music library.
          </Subtitle>
        </Content>

        <Flow $visible={isVisible}>
          <FlowStep $visible={isVisible} $delay={0}>
            <StepIcon>🔍</StepIcon>
            <StepLabel>Discover</StepLabel>
          </FlowStep>

          <FlowArrow $visible={isVisible} $delay={0.3}>
            →
          </FlowArrow>

          <FlowStep $visible={isVisible} $delay={0.4}>
            <StepIcon>📥</StepIcon>
            <StepLabel>Import</StepLabel>
          </FlowStep>

          <FlowArrow $visible={isVisible} $delay={0.7}>
            →
          </FlowArrow>

          <FlowStep $visible={isVisible} $delay={0.8}>
            <StepIcon>🎵</StepIcon>
            <StepLabel>Your Library</StepLabel>
          </FlowStep>
        </Flow>

        <Visual $visible={isVisible}>
          <GlowOrb />

          <SongCard $visible={isVisible}>
            <SongArtwork>🎵</SongArtwork>

            <SongInfo>
              <SongTitle>Ethiopia</SongTitle>
              <SongArtist>Teddy Afro · Tikur Sew</SongArtist>
            </SongInfo>

            <SongAction $visible={isVisible}>
              {isVisible ? "✓ Added" : "+ Import"}
            </SongAction>
          </SongCard>
        </Visual>
      </Container>
    </Section>
  );
};

export default ImportExperience;
