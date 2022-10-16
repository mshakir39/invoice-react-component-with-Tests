describe("components", () => {
  it("should display Accept", () => {
    cy.visit(`${Cypress.env("STORYBOOK_PATH")}&id=simple-accept-button--basic`);
    cy.get("[data-testid=\"accept-btn\"")
      .contains("something else")
      .click()
      .get("#button-clicked-div")
      .contains("Button Clicked");
  });
});
