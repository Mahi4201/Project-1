
import signinlocator from "../../POM/signinaccount.po"
import accountdata1 from "../../fixtures/account1data.json"
import createaccountlocators from "../../POM/createaccount.po";

describe("verify the user can create an account", () => {
    Cypress.on("uncaught:exception",()=>{
        return false
    })
  beforeEach("url", () => {
    cy.visit("https://magento-demo.mageplaza.com/default/");
    cy.get('li[data-label="or"]').first().click()
    cy.get(signinlocator.signinemailidlocator()).type(accountdata1.emailid)
    cy.get(signinlocator.signinpasswordlocator()).type(accountdata1.password)
    cy.get(signinlocator.signinbuttonlocator()).click()
    cy.get('button[tabindex="-1"]').first().click()
    cy.contains("My Account").click({force:true})
    cy.contains("Account Information").should("be.visible")
  });

  it("edit the user name in the account information ", () => {

    cy.get('a[class="action edit"]').first().click()
    cy.get(createaccountlocators.firstnamelocator()).clear().type("nagesh")
    cy.get(createaccountlocators.lastnamelocator()).clear().type("bandi")
    cy.get('button[title="Save"]').click()
    cy.contains("You saved the account information.").should("be.visible")
    cy.contains("nagesh bandi").should("be.visible")
  })
  it("edit the email id in the account information ", () => {

    cy.get('a[class="action edit"]').first().click()
    cy.get('#change-email').click()
    cy.get(signinlocator.signinemailidlocator()).clear().type("mahesh1@gmail.com")
    cy.get('#current-password').type(accountdata1.password)
    cy.get('button[title="Save"]').click()
    cy.contains("You saved the account information.").should("be.visible")

  })





});
