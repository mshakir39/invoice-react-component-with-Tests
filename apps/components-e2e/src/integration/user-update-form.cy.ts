describe("User Update Form", () => {
  beforeEach(() => {
    cy.visit(
      `${Cypress.env("STORYBOOK_PATH")}&id=complex-user-update-form--primary`
    );
  });
  it("should display Email Address validation", () => {
    cy.get("#email-adress").clear();
    cy.get("#email-adress-helper-text").should("contain", "Email is Required");

    cy.get("#email-adress").clear().type("abc");
    cy.get("#email-adress-helper-text").should(
      "contain",
      "Invalid Email Address"
    );
    cy.get('[type="submit"]').should("be.disabled");
  });

  it("Should any of the password fields are filled in, the other two must be filled in too", () => {
    // 1: Current password type
    cy.get("#current-password").type("12345678");

    cy.get("#new-pw-helper-text").should("contain", "New Password is Required");
    cy.get("#new-pw-confirm-helper-text").should(
      "contain",
      "Confirm New Password is Required"
    );
    cy.get('[type="submit"]').should("be.disabled");

    // 2: New password type
    cy.get("#current-password").clear();
    cy.get("#new-password").type("1234567890");

    cy.get("#current-pw-helper-text").should(
      "contain",
      "Current Password is Required"
    );
    cy.get("#new-pw-confirm-helper-text").should(
      "contain",
      "Confirm New Password is Required"
    );
    cy.get('[type="submit"]').should("be.disabled");

    // 3: Confirm new password type
    cy.get("#new-password").clear();
    cy.get("#confirm-new-password").type("01234567");

    cy.get("#current-pw-helper-text").should(
      "contain",
      "Current Password is Required"
    );
    cy.get("#new-pw-helper-text").should("contain", "New Password is Required");
    cy.get('[type="submit"]').should("be.disabled");
  });
  it("should display 'New Password has less than 8 characters'", () => {
    cy.get("#new-password").type("1234");

    cy.get("#new-pw-helper-text").should(
      "contain",
      "New Password has less than 8 characters"
    );
    cy.get('[type="submit"]').should("be.disabled");
  });
  it("should display 'New Password and Confirm New Password does not match'", () => {
    cy.get("#new-password").type("1234567890");
    cy.get("#confirm-new-password").type("123456789");

    cy.get("#new-pw-confirm-helper-text").should(
      "contain",
      "New Password and Confirm New Password does not match"
    );
    cy.get('[type="submit"]').should("be.disabled");
  });
});
