import { render } from "@testing-library/react";

import TabbedDisplay from "./tabbed-display";

describe("TabbedDisplay", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <TabbedDisplay tabLabels={[]} children={[]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
