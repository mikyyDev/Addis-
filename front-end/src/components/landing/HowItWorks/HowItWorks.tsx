import {
  Section,
  Container,
  SectionTitle,
  StepsRow,
  Step,
  StepIconCircle,
  StepLabel,
  StepArrow,
} from "./HowItWorks.styles";

const STEPS = [
  { icon: "🔍", label: "Search Music", color: "#8b5cf6" },
  { icon: "🎧", label: "Discover on Last.fm", color: "#ec4899" },
  { icon: "📥", label: "Import to Library", color: "#06b6d4" },
  { icon: "🎵", label: "Organize Your Music", color: "#f59e0b" },
  { icon: "▶️", label: "Listen on Spotify / YouTube", color: "#10b981" },
];

const HowItWorks = () => {
  return (
    <Section id="how-it-works">
      <Container>
        <SectionTitle>How It Works</SectionTitle>

        <StepsRow>
          {STEPS.map((step, index) => (
            <Step key={index}>
              <StepIconCircle $color={step.color}>
                {step.icon}
              </StepIconCircle>
              <StepLabel>{step.label}</StepLabel>

              {index < STEPS.length - 1 && <StepArrow>›</StepArrow>}
            </Step>
          ))}
        </StepsRow>
      </Container>
    </Section>
  );
};

export default HowItWorks;
