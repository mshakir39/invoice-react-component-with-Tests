import { render } from "@testing-library/react";
import SelectInput from "./select-input";

const AutocompleteSelector = "div.MuiAutocomplete-root";
const TextFieldSelector = "div.MuiTextField-root";

describe("SelectInput", () => {
  it("should render successfully", () => {
    // Not using test fixture here, for explicit simplest test.
    const { baseElement } = render(
      <SelectInput
        label="Test Instance"
        options={[{ label: "Test-Option" }]}
        dataTestId="test-instance"
      />
    );

    expect(baseElement).toBeTruthy();
  });

  it("should have data-testid set on outer autocomplete div to dataTestId provided", () => {
    const expectedDataTestId = "arg-data-test-id";
    const { baseElement } = renderBaseElement(expectedDataTestId);

    const outerAutocomplete = getOuterAutocompleteOrFail(baseElement);
    const actualDataTestId = outerAutocomplete?.getAttribute("data-testid");

    expect(actualDataTestId).toEqual(expectedDataTestId);
  });

  it("should have data-testid set on inner textfield div to provided dataTestId plus `-inner-text-field`", () => {
    const rootDataTestId = "arg-data-test-id";
    const { baseElement } = renderBaseElement(rootDataTestId);

    const outerAutocomplete = getOuterAutocompleteOrFail(baseElement);
    const innerTextField = getInnerTextFieldOrFail(outerAutocomplete);

    const actualDataTestId = innerTextField?.getAttribute("data-testid");

    expect(actualDataTestId).toEqual(rootDataTestId + "-inner-text-field");
  });
});

// region Local test fixtures

// region Specialized

function renderBaseElement(dataTestId: string) {
  return render(
    <SelectInput
      label="Test Instance"
      options={[{ label: "Test-Option" }]}
      dataTestId={dataTestId}
    />
  );
}

function getOuterAutocompleteOrFail(baseElement: Element): Element | null {
  const outerAutocomplete = baseElement.querySelector(AutocompleteSelector);
  throwIfNoSuchElement(outerAutocomplete, "autocomplete div");

  return outerAutocomplete;
}

function getInnerTextFieldOrFail(
  outerAutocomplete: Element | null
): Element | null | undefined {
  const innerTextField = outerAutocomplete?.querySelector(TextFieldSelector);
  throwIfNoSuchElement(innerTextField, "textfield div");

  return innerTextField;
}

// endregion Specialized

// region General

function throwIfNoSuchElement(
  element: Element | null | undefined,
  target: string
): void {
  // Throwing because Jest doesn't
  // support custom error messages.
  if (!element) {
    throw new Error(`No ${target} was found.`);
  }
}

// endregion General

// endregion Local test fixtures
