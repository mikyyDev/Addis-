import {
  Section,
  Container,
  Grid,
  StatCard,
  Number,
  Label,
} from "./Statistics.styles";

const Statistics = () => {
  return (
    <Section id="statistics">
      <Container>
        <Grid>
          <StatCard>
            <Number>10K+</Number>
            <Label>Songs</Label>
          </StatCard>

          <StatCard>
            <Number>500+</Number>
            <Label>Artists</Label>
          </StatCard>

          <StatCard>
            <Number>150+</Number>
            <Label>Albums</Label>
          </StatCard>

          <StatCard>
            <Number>95%</Number>
            <Label>User Satisfaction</Label>
          </StatCard>
        </Grid>
      </Container>
    </Section>
  );
};

export default Statistics;
