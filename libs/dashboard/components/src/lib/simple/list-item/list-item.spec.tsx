import { render } from "@testing-library/react";

import ListItem from "./list-item";

describe("ListItem", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ListItem
        href={"/test"}
        listItemText={"test item"}
        parent={"test parent"}
        open={false}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
