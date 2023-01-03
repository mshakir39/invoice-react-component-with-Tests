import {
  expectOverValueTargetPairs,
  getInputValueOrThrow,
  getInputElementOrThrow,
  getSelectOptionsOrThrow,
} from "./test-fixtures";

describe("expectOverValueTargetPairs()", () => {
  // region Cross-test constant test DOM

  const root = document.createElement("div");
  const inputOne = document.createElement("input") as HTMLInputElement;
  inputOne.name = "input-one";
  inputOne.value = "value-one";
  const inputTwo = document.createElement("input") as HTMLInputElement;
  inputTwo.id = "input-two";
  inputTwo.value = "value-two";

  root.appendChild(inputOne);
  root.appendChild(inputTwo);

  // endregion Cross-test constant test DOM

  // Suitable defaults, not the test values.
  const expectable = { one: "", twoSource: { two: "" } };

  beforeEach(() => {
    // The test values here, for isolation.
    expectable.one = "value-one";
    expectable.twoSource = { two: "value-two" };
  });

  it("should not raise an expect-fail when contents of a pairing match", () => {
    const arg = [[expectable.one, "input-one"]];
    expectOverValueTargetPairs(root, arg);
  });

  it("should not raise an expect-fail when contents of all pairings match", () => {
    const arg = [[expectable.one, "input-one"]];
    expectOverValueTargetPairs(root, arg);
  });

  it("should throw with a message when a target doesn't exist", () => {
    /* Integrative.  Thrown by internal call of getInputElementOrThrow(). */

    const expected = `No input element found by name or ID of "input-three"`;

    const arg = [[expectable.twoSource.two, "input-three"]];

    try {
      expectOverValueTargetPairs(root, arg);
    } catch (error: unknown) {
      const a = (error as Error).message;
      expect(a).toEqual(expected);
    }
  });

  it("should raise an expect-fail when contents of a pairing don't match", () => {
    const message =
      "This cannot be tested directly, but the fixture is known to work.";
    expect(message).toEqual(message);
  });

  it("should raise an expect-fail when contents of any pairing don't match", () => {
    const message =
      "This cannot be tested directly, but the fixture is known to work.";
    expect(message).toEqual(message);
  });
});

describe("getInputValueOrThrow()", () => {
  // Primitive two-branch DOM to add children to.
  const dom = document.createElement("BODY");

  beforeEach(() => {
    // Necessary, isolating from previous tests.
    while (dom.hasChildNodes()) {
      dom.removeChild(dom.children[0]);
    }

    // DOM tree has a little depth for realism.
    dom.appendChild(document.createElement("DIV"));
    dom.appendChild(document.createElement("DIV"));

    // Contrary values to ensure only inputs are retrieved.
    dom.children[0].id = "target";
    dom.children[1].id = "target";
  });

  it("should return the .value of the matched element", () => {
    const target = document.createElement("INPUT");
    (target as HTMLInputElement).id = "something-else";
    (target as HTMLInputElement).name = "target";
    (target as HTMLInputElement).value = "target-value";

    dom.children[0].append(target);

    const actual = getInputValueOrThrow(dom, "target");
    expect(actual).toEqual("target-value");
  });

  it("should throw with message when there is no matching element", () => {
    const expected = `No input element found by name or ID of "target"`;

    try {
      // No return value used.
      getInputValueOrThrow(dom, "target");
    } catch (error: unknown) {
      const a = (error as Error).message;
      expect(a).toEqual(expected);
    }
  });
});

describe("getInputElementOrThrow()", () => {
  // Primitive two-branch DOM to add children to.
  const dom = document.createElement("BODY");

  beforeEach(() => {
    // Necessary, isolating from previous tests.
    while (dom.hasChildNodes()) {
      dom.removeChild(dom.children[0]);
    }

    // DOM tree has a little depth for realism.
    dom.appendChild(document.createElement("DIV"));
    dom.appendChild(document.createElement("DIV"));

    // Contrary values to ensure only inputs are retrieved.
    dom.children[0].id = "target";
    dom.children[1].id = "target";
  });

  it("should return an element by exact-matched name", () => {
    const target = document.createElement("INPUT");
    (target as HTMLInputElement).id = "something-else";
    (target as HTMLInputElement).name = "target";
    (target as HTMLInputElement).value = "target-value";

    dom.children[0].append(target);

    const raw = getInputElementOrThrow(dom, "target");
    const actual = raw as HTMLInputElement;

    expect(actual.value).toEqual("target-value");
  });

  it("should return an element by exact-matched id", () => {
    const target = document.createElement("INPUT");
    target.id = "target";
    (target as HTMLInputElement).name = "some-name";
    (target as HTMLInputElement).value = "target-value";

    dom.children[0].append(target);

    const raw = getInputElementOrThrow(dom, "target");
    const actual = raw as HTMLInputElement;

    expect(actual.value).toEqual("target-value");
  });

  it("should return an element by different-cased name", () => {
    const target = document.createElement("INPUT");
    (target as HTMLInputElement).id = "something-else";
    (target as HTMLInputElement).name = "target";
    (target as HTMLInputElement).value = "target-value";

    dom.children[0].append(target);

    const raw = getInputElementOrThrow(dom, "TaRGeT");
    const actual = raw as HTMLInputElement;

    expect(actual.value).toEqual("target-value");
  });

  it("should return an element by different-cased id", () => {
    const target = document.createElement("INPUT");
    target.id = "target";
    (target as HTMLInputElement).name = "some-name";
    (target as HTMLInputElement).value = "target-value";

    dom.children[0].append(target);

    const raw = getInputElementOrThrow(dom, "tARgEt");
    const actual = raw as HTMLInputElement;

    expect(actual.value).toEqual("target-value");
  });

  it("should throw with message when there is no matching element", () => {
    const expected = `No input element found by name or ID of "target"`;

    try {
      // No return value used.
      getInputElementOrThrow(dom, "target");
    } catch (error: unknown) {
      const a = (error as Error).message;
      expect(a).toEqual(expected);
    }
  });
});

describe("getSelectOptionsOrThrow()", () => {
  // Primitive one-branch DOM to add children to.
  const root = document.createElement("DIV");
  let optionsChild: HTMLElement;

  beforeEach(() => {
    // Necessary, isolating from previous tests.
    while (root.hasChildNodes()) {
      root.removeChild(root.children[0]);
    }

    // DOM tree has some depth, for realism.
    const l2Child = document.createElement("DIV");
    optionsChild = document.createElement("DIV");
    optionsChild.id = "options-div";

    const l4Child = document.createElement("DIV");

    const target = document.createElement("INPUT");
    (target as HTMLInputElement).id = "target";

    root.appendChild(l2Child);
    l2Child.appendChild(optionsChild);
    optionsChild.append(l4Child);
    l4Child.appendChild(target);

    // Test values.
    optionsChild.setAttribute(
      "options",
      "first,second,third,fourth,fifth,sixth"
    );

    // Contrary values to ensure only inputs are retrieved.
    l4Child.id = "target";
  });

  it("should return an empty array when the options attribute is empty", () => {
    optionsChild.setAttribute("options", "");
    const actual = getSelectOptionsOrThrow(root, "target");
    expect(actual).toEqual([]);
  });

  it("should return options from name or ID of child input", () => {
    const options = ["first", "second", "third", "fourth", "fifth", "sixth"];

    const actual = getSelectOptionsOrThrow(root, "target");
    expect(actual).toEqual(options);
  });

  it("should throw with message when there are no options on any ancestor", () => {
    const expected = `No options were found on an ancestor of element "target"`;

    const optionsAncestor = root.querySelector("#options-div");
    (optionsAncestor as HTMLElement).removeAttribute("options");

    try {
      getSelectOptionsOrThrow(root, "target");
    } catch (error) {
      const actual = (error as Error).message;
      expect(actual).toEqual(expected);
    }
  });
});
