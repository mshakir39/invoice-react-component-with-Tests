import { render } from "@testing-library/react";
import CupolaThemeProvider from "./cupola-theme-provider";

describe("CupolaThemeProvider", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <CupolaThemeProvider>
        <h1>hello theme</h1>
      </CupolaThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
