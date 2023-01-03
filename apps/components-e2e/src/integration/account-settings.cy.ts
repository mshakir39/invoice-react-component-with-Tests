import { expect } from "chai";
describe("Account Settings", () => {
  beforeEach(() => {
    cy.visit(
      `${Cypress.env("STORYBOOK_PATH")}&id=complex-account-settings--primary`
    );
  });

  it("should display Panel Header", () => {
    cy.get('[data-testid="SettingsIcon"]').should("be.visible");
    cy.get(".MuiTypography-root")
      .should("be.visible")
      .and("contain", "Account Settings");
    cy.get('[data-testid="ExpandMoreIcon"]').should("be.visible");
  });

  it("should submit Email Address Update", () => {
    cy.get('[data-testid="ExpandMoreIcon"]').click();
    cy.get("#email-address").clear().type("cyptesstest@gmail.com");
    // submit form
    cy.get('[type="submit"]').click();
    // check data after submitted
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        '{"email":"cyptesstest@gmail.com","currPw":"","newPw":"","newPwConfirm":""}'
      );
    });
    cy.get("#text-area-test-data")
      .invoke("val")
      .should((text) => {
        expect(text).to.contain(
          '{"email":"cyptesstest@gmail.com","currPw":"","newPw":"","newPwConfirm":""}'
        );
      });
  });

  it("should submit User Form Update", () => {
    cy.get('[data-testid="ExpandMoreIcon"]').click();
    // type User Update form
    cy.get("#current-password").type("12345678");
    cy.get("#new-password").type("01234567");
    cy.get("#confirm-new-password").type("01234567");
    // submit form
    cy.get('[type="submit"]').click();
    // check data after submitted
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        '{"email":"abc@gmail.com","currPw":"12345678","newPw":"01234567","newPwConfirm":"01234567"}'
      );
    });
    cy.get("#text-area-test-data")
      .invoke("val")
      .should((text) => {
        expect(text).to.contain(
          '{"email":"abc@gmail.com","currPw":"12345678","newPw":"01234567","newPwConfirm":"01234567"}'
        );
      });
  });
});
