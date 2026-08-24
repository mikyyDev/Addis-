// styles/theme.ts

export interface ThemeColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  background: string;
  backgroundLight: string;
  backgroundDark: string;
  surface: string;
  surfaceLight: string;
  surfaceDark: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  borderLight: string;
  borderDark: string;
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
}

export interface ThemeTypography {
  fontFamily: string;
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
    loose: number;
  };
}

export interface ThemeBreakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
}

export interface ThemeShadows {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  primary: string;
  secondary: string;
  glow: string;
}

export interface ThemeTransitions {
  fast: string;
  normal: string;
  slow: string;
  easing: {
    easeIn: string;
    easeOut: string;
    easeInOut: string;
    bounce: string;
  };
}

export interface Theme {
  colors: ThemeColors;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
  breakpoints: ThemeBreakpoints;
  shadows: ThemeShadows;
  transitions: ThemeTransitions;
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    full: string;
  };
  zIndex: {
    base: number;
    dropdown: number;
    sticky: number;
    fixed: number;
    modal: number;
    popover: number;
    tooltip: number;
    overlay: number;
    max: number;
  };
}

export const theme: Theme = {
  colors: {
    primary: "#6C63FF",
    primaryLight: "#8B83FF",
    primaryDark: "#4A42CC",
    secondary: "#FF6584",
    secondaryLight: "#FF8CA3",
    secondaryDark: "#CC4A6A",
    success: "#4CAF50",
    warning: "#FFC107",
    error: "#FF4757",
    info: "#4FC3F7",
    background: "#0A0A0A",
    backgroundLight: "#1A1A1A",
    backgroundDark: "#050505",
    surface: "rgba(255, 255, 255, 0.03)",
    surfaceLight: "rgba(255, 255, 255, 0.05)",
    surfaceDark: "rgba(255, 255, 255, 0.01)",
    text: "#FFFFFF",
    textSecondary: "#B0B0B0",
    textMuted: "#666666",
    border: "rgba(255, 255, 255, 0.05)",
    borderLight: "rgba(255, 255, 255, 0.1)",
    borderDark: "rgba(255, 255, 255, 0.02)",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
  },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
  },
  breakpoints: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  shadows: {
    sm: "0 1px 3px rgba(0, 0, 0, 0.12)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 8px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 12px 30px rgba(0, 0, 0, 0.2)",
    "2xl": "0 20px 40px rgba(0, 0, 0, 0.3)",
    primary: "0 4px 20px rgba(108, 99, 255, 0.3)",
    secondary: "0 4px 20px rgba(255, 101, 132, 0.3)",
    glow: "0 0 40px rgba(108, 99, 255, 0.15)",
  },
  transitions: {
    fast: "0.15s ease",
    normal: "0.3s ease",
    slow: "0.6s ease",
    easing: {
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeOut: "cubic-bezier(0, 0, 0.2, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },
  borderRadius: {
    none: "0",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "20px",
    "3xl": "24px",
    full: "9999px",
  },
  zIndex: {
    base: 1,
    dropdown: 100,
    sticky: 200,
    fixed: 300,
    modal: 400,
    popover: 500,
    tooltip: 600,
    overlay: 700,
    max: 999,
  },
};

export default theme;
