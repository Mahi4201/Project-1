import createaccountlocators from "../../POM/createaccount.po";

describe("verify the user can create an account", () => {
    Cypress.on("uncaught:exception",()=>{
        return false
    })
  beforeEach("url", () => {
    cy.visit(
      "https://magento-demo.mageplaza.com/default/customer/account/create/"
    );
  });

  it("create an account with valid details", () => {
    var randomnames = (Math.random() + 1).toString(36).substring(2);
    cy.get(createaccountlocators.firstnamelocator()).type(randomnames);
    cy.get(createaccountlocators.lastnamelocator()).type(randomnames);
    cy.get(createaccountlocators.mailidlocator()).type(
      randomnames + "@gmail.com"
    );
    var randompassword = (Math.random() + 1).toString(36).substring(2);
    cy.get(createaccountlocators.passwordlocator()).type(randompassword + "#1");
    cy.get(createaccountlocators.confirmpasswordlocator()).type(
      randompassword + "#1"
    );
    cy.get(createaccountlocators.createbuttonlocator()).first().click();
    cy.contains("Thank you for registering with Main Website Store.").should(
      "be.visible"
    );
  });

  it("verify wrong email address in create an account ", () => {
    var randomnames = (Math.random() + 1).toString(36).substring(2);
    cy.get(createaccountlocators.firstnamelocator()).type(randomnames);
    cy.get(createaccountlocators.lastnamelocator()).type(randomnames);
    cy.get(createaccountlocators.mailidlocator()).type(randomnames);
    var randompassword = (Math.random() + 1).toString(36).substring(2);
    cy.get(createaccountlocators.passwordlocator()).type(randompassword + "#1");
    cy.get(createaccountlocators.confirmpasswordlocator()).type(
      randompassword + "#1"
    );
    cy.get(createaccountlocators.createbuttonlocator()).first().click();
    cy.contains("Please enter a valid email address (Ex: johndoe@domain.com).");
  });

  it("verify password in create an account ", () => {
    var randompassword = (Math.random() + 1).toString(36).substring(2);
    cy.get(createaccountlocators.passwordlocator()).type(randompassword);
    cy.contains("Password Strength: Weak").should("be.visible");
    cy.contains(
      "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters."
    ).should("be.visible");
  });

  it("verify confirm password in create an account ", () => {
    var randomnames = (Math.random() + 1).toString(36).substring(2);
    cy.get(createaccountlocators.firstnamelocator()).type(randomnames);
    cy.get(createaccountlocators.lastnamelocator()).type(randomnames);
    cy.get(createaccountlocators.mailidlocator()).type(
      randomnames + "@gmail.com"
    );
    var randompassword = (Math.random() + 1).toString(36).substring(2);
    cy.get(createaccountlocators.passwordlocator()).type(randompassword + "#1");
    cy.get(createaccountlocators.confirmpasswordlocator()).type(
      randompassword + "fgjjhjh"
    );
    cy.get(createaccountlocators.createbuttonlocator()).first().click();
    cy.contains("Please enter the same value again.").should("be.visible");
  });

  it("enter N number of characters in the firstname and lastname in create an account ", () => {
    var randomnames = (Math.random() + 1).toString(36).substring(2);
    cy.get(createaccountlocators.firstnamelocator()).type(
      randomnames + "gnbgvndbvbcvnbvchfjmnfjghrhfhg"
    );
    cy.get(createaccountlocators.lastnamelocator()).type(
      randomnames + "cgjngncgryt576987ghf7tiyiuy7iyyu"
    );
    cy.get(createaccountlocators.mailidlocator()).type(
      randomnames + "@gmail.com"
    );
    var randompassword = (Math.random() + 1).toString(36).substring(2);
    cy.get(createaccountlocators.passwordlocator()).type(
      randompassword + "M#1"
    );
    cy.contains("Password Strength: Very Strong").should("be.visible");
    cy.get(createaccountlocators.confirmpasswordlocator()).type(
      randompassword + "M#1"
    );
    cy.get(createaccountlocators.createbuttonlocator()).first().click();
    cy.contains("Thank you for registering with Main Website Store.").should(
      "be.visible"
    );
  });

  it("verify create an account without entering the details", () => {
    cy.get(createaccountlocators.createbuttonlocator()).first().click();
    cy.contains("This is a required field.").should("be.visible");
  });

  it("verify check boxes in create an account", () => {
    cy.get("#is_subscribed").check().should("be.checked");
    cy.get("#assistance_allowed_checkbox").check().should("be.checked");
    var randompassword = (Math.random() + 1).toString(36).substring(2);
    cy.get(createaccountlocators.passwordlocator()).type(
      randompassword + "M#1"
    );
    cy.get(createaccountlocators.confirmpasswordlocator()).type(
      randompassword + "M#1"
    );
    cy.get("#show-password").check().should("be.checked");
  });

  it("trying to login with same email id in create an account", () => {
    var randomnames = (Math.random() + 1).toString(36).substring(2);
    cy.get(createaccountlocators.firstnamelocator()).type(randomnames);
    cy.get(createaccountlocators.lastnamelocator()).type(randomnames);
    cy.get(createaccountlocators.mailidlocator()).type("mahesh3210@gmail.com");
    var randompassword = (Math.random() + 1).toString(36).substring(2);
    cy.get(createaccountlocators.passwordlocator()).type(randompassword + "#1");
    cy.get(createaccountlocators.confirmpasswordlocator()).type(
      randompassword + "#1"
    );
    cy.get(createaccountlocators.createbuttonlocator()).first().click();
    cy.contains("There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.").should(
      "be.visible"
    );
  });
});
