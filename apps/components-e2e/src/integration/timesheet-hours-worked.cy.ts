import { expect } from "chai";

describe("Timesheet Hours Worked component", () => {
  beforeEach(() => {
    cy.visit(
      `${Cypress.env(
        "STORYBOOK_PATH"
      )}&id=complex-timesheet-hours-worked--primary`
    );
  });
  it("should display title", () => {
    cy.get(".MuiGrid-root")
      .should("contain", "Start Date")
      .should("contain", "End Date")
      .should("contain", "Hours Worked")
      .should("contain", "Hours Worked")
      .should("contain", "Utilization Rate %");
  });
  it("should display value ", () => {
    cy.get('[data-testid="start-date"]').should("contain", "2022-12-19");
    cy.get('[data-testid="end-date"]').should("contain", "2022-12-25");
    cy.get('[data-testid="total-hours-worked"]').should("contain", "32");
    cy.get('[data-testid="hours-available"]').should("contain", "40");
    cy.get('[data-testid="utilization-rate"]').should("contain", "80");

    cy.get("#text-area-test-data")
      .invoke("val")
      .should((dump) => {
        expect(dump).to.equal(
          '{"startDate":"2022-12-19","endDate":"2022-12-25","totalHoursWorked":32,"hoursAvailable":40,"utilizationRate":80}'
        );
      });
  });
});
