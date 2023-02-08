import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { ReactNode } from "react";

export const defaultPalette = {
  primary: {
    main: "rgba(204, 100, 2, 1)",
    light: "rgba(204, 100, 2, 0.3)",
  },
  secondary: {
    main: "rgba(50, 54, 67, 1)",
    light: "rgba(50, 54, 67, 0.3)",
  },
  text: {
    primary: "#141414",
    secondary: "#F1F1F1",
  },
  background: {
    default: "#F1F1F1",
  },
  warning: {
    main: "#b9221e",
  },
};

const CupolaTheme = createTheme({
  palette: defaultPalette,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,

            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "26px",
            letterSpacing: "0.46px",
            textTransform: "uppercase",

            flex: "none",
            order: 0,
            flexGrow: 0,
          }),
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.text.secondary,

            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "26px",
            letterSpacing: "0.46px",
            textTransform: "uppercase",

            flex: "none",
            order: 0,
            flexGrow: 0,
          }),
        },
        {
          props: { variant: "contained", color: "warning" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.warning.main,
            color: theme.palette.text.secondary,

            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "26px",
            letterSpacing: "0.46px",
            textTransform: "uppercase",

            flex: "none",
            order: 0,
            flexGrow: 0,
          }),
        },
      ],
    },
  },
});

/* eslint-disable-next-line */
export interface CupolaThemeProviderProps {
  children: ReactNode;
}

export const CupolaThemeProvider: React.FC<CupolaThemeProviderProps> = ({
  children,
}) => {
  return <ThemeProvider theme={CupolaTheme}>{children}</ThemeProvider>;
};

export default CupolaThemeProvider;
