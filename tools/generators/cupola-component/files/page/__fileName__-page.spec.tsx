import { render } from "@testing-library/react";

import <%= className %>Page from "./<%= fileName %>-page";

describe("<%= className %>Page", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<<%= className %>Page />);
    expect(baseElement).toBeTruthy();
  });
});
