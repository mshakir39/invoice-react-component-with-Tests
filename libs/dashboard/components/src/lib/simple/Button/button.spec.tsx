import { render, fireEvent } from "@testing-library/react";
import MyButton from "./button";

describe.only("MyButton", () => {
  it("should render with label and color", () => {
    const { getByText } = render(
      <MyButton label="Click me" variant="contained" color="primary" />
    );

    expect(getByText("Click me").textContent).toBe("Click me");
  });

  it("should fire onClick event", () => {
    const onClick = jest.fn();

    const { container } = render(
      <MyButton
        label="Click me"
        variant="contained"
        color="primary"
        onClick={onClick}
      />
    );

    const buttonElement = container.getElementsByTagName("button")[0];
    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalled();
  });
});
