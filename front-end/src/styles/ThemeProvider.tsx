import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import type { ReactNode } from "react";
import { theme } from "./theme";

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
