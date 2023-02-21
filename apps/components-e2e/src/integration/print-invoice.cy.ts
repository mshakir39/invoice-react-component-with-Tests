import "cypress-plugin-tab";
describe("Print Invoice page", () => {
  beforeEach(() => {
    cy.visit(
      `${Cypress.env(
        "STORYBOOK_PATH"
      )}&id=complex-print-invoice-print-invoice-custom--primary`
    );
  });
  it("should add and delete new Custom Row", () => {
    cy.get('[data-testid="addRowContainer"]').find("button").click();
    cy.get('[data-testid="table"]').scrollIntoView().should("be.visible");
    cy.get("#subTotal").contains("$ 200.00");
    cy.get("#amountDue").contains("$ 240.00");
    cy.get('[data-testid="table"]').find("tr").should("have.length", 7);
    cy.get("input")
      .eq(3)
      .type("testing", { force: true })
      .tab()
      .type("2")
      .tab()
      .type("2");

    cy.get("#subTotal").contains("$ 204.00");
    cy.get("#amountDue").contains("$ 244.80");
    cy.get("#deleteRow").click();
    cy.get('[data-testid="table"]').find("tr").should("have.length", 6);
    cy.get("#subTotal").contains("$ 200.00");
    cy.get("#amountDue").contains("$ 240.00");
  });
});
