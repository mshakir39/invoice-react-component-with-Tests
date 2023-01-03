import { expect } from "@jest/globals";

/* Because sometimes there are a lot of values to check at once. */
export function expectOverValueTargetPairs(
  root: Element,
  valueTargetPairs: (string | undefined)[][]
) {
  for (const pair of valueTargetPairs) {
    const actual = getInputValueOrThrow(root, pair[1] || "no-such-target");
    expect(actual).toEqual(pair[0]);
  }
}

/* Handles value cases more easily than what Jest provides. */
export function getInputValueOrThrow(root: Element, nameOrId: string): string {
  const element = getInputElementOrThrow(root, nameOrId);
  const asInput = element as HTMLInputElement;

  return asInput.value;
}

/* Handles cases that are not well matched to what Jest provides. */
export function getInputElementOrThrow(
  root: Element,
  nameOrId: string
): Element {
  // First attempt to find, by name.
  let target = root.querySelector(`input[name="${nameOrId}" i]`);

  // Second attempt to find, by ID.
  if (!target) {
    target = root.querySelector(`input[id="${nameOrId}" i]`);
  }

  // Both attempts failed at this level or leafward.
  if (!target) {
    throw new Error(`No input element found by name or ID of "${nameOrId}"`);
  }

  // Or one of them succeeded.
  return target;
}

/* Handles option cases more easily than what Jest provides. */
export function getSelectOptionsOrThrow(
  root: Element,
  leafNameOrId: string
): string[] {
  // The final input element is found first;
  // options are on an ancestor with iffy name.
  const leaf = getInputElementOrThrow(root, leafNameOrId);

  let ancestor = leaf.parentElement;

  while (ancestor) {
    // Targeted node was found.
    if (ancestor.hasAttribute("options")) {
      break;
    }

    // Traverse rootward.
    ancestor = ancestor.parentElement;
  }

  if (!ancestor) {
    throw new Error(
      `No options were found on an ancestor of element "${leafNameOrId}"`
    );
  }

  const raw = ancestor.getAttribute("options") as string;

  // Consistent output from edge case.
  if (raw === "") {
    return [];
  }

  // Common case.
  const options = raw.split(",");
  return options;
}
