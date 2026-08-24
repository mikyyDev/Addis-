import { Card, CardIcon, CardTitle, CardDescription } from "./Features.styles";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card>
      <CardIcon>{icon}</CardIcon>

      <CardTitle>{title}</CardTitle>

      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

export default FeatureCard;
