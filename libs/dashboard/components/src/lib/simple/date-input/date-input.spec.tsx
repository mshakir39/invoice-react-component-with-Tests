import { render } from "@testing-library/react";

import DateInput from "./date-input";
import { Dayjs } from "dayjs";

describe("DateInput", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <DateInput
        value={""}
        onChange={(newValue: Dayjs | null) => {
          console.log("Hello: ", newValue);
        }}
        label="Test Instance"
        dataTestId="test-instance"
      />
    );

    expect(baseElement).toBeTruthy();
  });
});
