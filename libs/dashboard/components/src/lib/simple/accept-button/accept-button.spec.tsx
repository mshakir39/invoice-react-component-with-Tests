import { render } from "@testing-library/react";

import AcceptButton from "./accept-button";

describe("AcceptButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AcceptButton />);
    expect(baseElement).toBeTruthy();
  });
});
