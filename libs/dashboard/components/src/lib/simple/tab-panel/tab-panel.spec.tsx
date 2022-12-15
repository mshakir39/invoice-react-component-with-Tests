import { render } from "@testing-library/react";

import TabPanel from "./tab-panel";

describe("TabPanel", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TabPanel index={0} />);
    expect(baseElement).toBeTruthy();
  });
});
