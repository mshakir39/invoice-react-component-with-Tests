import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Accordion from "./accordion";

describe("Accordion", () => {
  it.only("should render successfully", () => {
    const { baseElement } = render(
      <Accordion label="Test Instance" dataTestId="test-instance" />
    );
    const accordionIcon = baseElement.querySelector("svg");

    expect(accordionIcon?.childElementCount).toBe(2);
    expect(accordionIcon).toBeVisible();
    expect(baseElement).toBeInTheDocument();
  });
});
