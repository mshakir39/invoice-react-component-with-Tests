import { RouterContext } from "next/dist/shared/lib/router-context";
import React from "react";
import { SnackbarProvider } from "notistack";
import { CupolaThemeProvider } from "../src/lib/cupola-theme-provider/cupola-theme-provider";

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
    locale: "en", // optional
  },
};

export const decorators = [
  (Story) => (
    <CupolaThemeProvider>
      <SnackbarProvider>{Story()}</SnackbarProvider>
    </CupolaThemeProvider>
  ),
];
