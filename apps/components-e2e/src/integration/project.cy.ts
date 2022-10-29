describe("components", () => {
  it("should display Accept", () => {
    cy.visit(`${Cypress.env("STORYBOOK_PATH")}&id=project-page--primary`);
    cy.getEl("test-id").contains("Project Home Page");
  });
});

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    getEl: (identifier: string) => Cypress.Chainable<JQuery<HTMLElement>>;
  }
}

// get element by custom test-only id
Cypress.Commands.add(
  "getEl",
  (identifier: string): Cypress.Chainable<JQuery<HTMLElement>> => {
    return cy.get(`[data-testid="${identifier}"]`);
  }
);
