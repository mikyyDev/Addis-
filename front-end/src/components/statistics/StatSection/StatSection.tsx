import type { ReactNode } from "react";

import {
  SectionCard,
  SectionHeader,
  SectionTitle,
  SectionCount,
} from "./StatSection.styles";

interface StatSectionProps {
  title: string;
  count?: string;
  children: ReactNode;
}

const StatSection = ({ title, count, children }: StatSectionProps) => {
  return (
    <SectionCard>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>

        {count && <SectionCount>{count}</SectionCount>}
      </SectionHeader>

      {children}
    </SectionCard>
  );
};

export default StatSection;
