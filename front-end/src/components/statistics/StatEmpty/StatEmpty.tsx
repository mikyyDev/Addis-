import type { ReactNode } from "react";

import { EmptyState } from "./StatEmpty.styles";

interface StatEmptyProps {
  children: ReactNode;
}

const StatEmpty = ({ children }: StatEmptyProps) => {
  return <EmptyState>{children}</EmptyState>;
};

export default StatEmpty;
