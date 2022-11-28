import { render } from "@testing-library/react";

import ProjectPage from "./project-page";

describe("Projects Page", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ProjectPage />);
    expect(baseElement).toBeTruthy();
  });
});
