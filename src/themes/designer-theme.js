import { theme } from "@chakra-ui/core";

const designTheme = {
  ...theme,
  fonts: {
    heading: '"Hind Vadodara", sans-serif',
    body: "Hind Vadodara, system-ui, sans-serif",
    mono: "Hind Vadodara, Menlo, monospace",
  },
  fontSizes: {
    ...theme.fontSizes,
    "5xl": "2.75rem"
  },
  colors: {
    ...theme.colors,
    primary: {
      500: "#29043e",
      400: "#2e0545",
      300: "#33054d",
      200: "#471e5f",
      100: "#5c3771",
    },
    secondary: {
      500: "#cc6f02",
      400: "#e67d03",
      300: "#ff8b03",
      200: "#ff971c",
      100: "#ffa235",
    },
    neutral: {
      600: "#000000",
      500: "#4a4b53",
      400: "#737581",
      300: "#e1e1e1",
      200: "#f4f5f7",
      100: "#ffffff",
    },
    success: {
      300: "#2a9d8f",
      200: "#3fa79a",
      100: "#55b1a5"
    },
    error: {
      300: "#a4243b",
      200: "#ad3a4f",
      100: "#b65062"
    },
    warning: {
      300: "#cc5803",
      200: "#d1691c",
      100: "#d67935"
    },
    background: {
      light: "#fcfcfc"
    }
  },
};

export default designTheme;
