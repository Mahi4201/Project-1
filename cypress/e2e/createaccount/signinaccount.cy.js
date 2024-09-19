import signinlocator from "../../POM/signinaccount.po";

describe("verify the signin accounts", () => {
  beforeEach("url", () => {
    cy.visit(
      "https://magento-demo.mageplaza.com/default/customer/account/create/"
    );
    cy.contains("Sign In").click();
    cy.contains("Customer Login").should("be.visible");
  });

  it("verify the signin accounts with valid creds", () => {
    cy.get(signinlocator.signinemailidlocator()).type("mahesh3210@gmail.com");
    cy.get(signinlocator.signinpasswordlocator()).type("Mahi#4201");
    cy.get(signinlocator.signinbuttonlocator()).click();
    cy.contains("mahesh3210@gmail.com").should("be.visible");
  });

  it("verify the signin accounts without entering the details", () => {
    cy.get(signinlocator.signinbuttonlocator()).click();
    cy.wait(3000);
    cy.contains("A login and a password are required.").should("be.visible");
  });

  it("verify the signin accounts with valid emailid invalid password", () => {
    cy.get(signinlocator.signinemailidlocator()).type("mahesh3210@gmail.com");
    cy.get(signinlocator.signinpasswordlocator()).type("Mahi#4201656");
    cy.get(signinlocator.signinbuttonlocator()).click();
    cy.contains(
      "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
    ).should("be.visible");
  });

  it("verify the show password check box in signin accounts", () => {
    cy.get("#show-password").check().should("be.checked");
  });

  it("verify the forgot password in signin accounts", () => {
    cy.contains("Forgot Your Password?").click();
    cy.contains(
      "Please enter your email address below to receive a password reset link."
    ).should("be.visible");
  });

  it("verify the create account in signin page", () => {
    cy.get('a[class="action create primary"]').click()
    cy.contains("Create New Customer Account").should("be.visible")

  })


});
