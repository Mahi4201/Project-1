// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import sampletestcaselocators from "../POM/sampletestcaselocators.po"
import signupdata from "../fixtures/sampletestcasesdata.json"

Cypress.Commands.add('createanddeleteaccount',()=>{

        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
        cy.get(sampletestcaselocators.signinorloginlocator()).click()
        cy.contains('New User Signup!').should('be.visible')
        cy.get(sampletestcaselocators.signupnamelocator()).type(signupdata.signupusername)
        cy.get(sampletestcaselocators.signupemaillocator()).type(signupdata.signupmailid)
        cy.get(sampletestcaselocators.signupbuttonlocator()).click()
        cy.contains('Enter Account Information').should('be.visible')
        cy.get('input[value="Mr"]').check()
        cy.get('input[id="password"]').type(signupdata.signuppassword)
        cy.get('select[id="days"]').select("10")
        cy.get('select[id="months"]').select("3")
        cy.get('select[id="years"]').select("2002")
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('#first_name').type(signupdata.firstname)
        cy.get('#last_name').type(signupdata.lastname)
        cy.get('#company').type(signupdata.companyname)
        cy.get('#address1').type(signupdata.address)
        cy.get('#address2').type(signupdata.address2)
        cy.get('select[name="country"]').select(3)
        cy.get('#state').type(signupdata.state)
        cy.get('#city').type(signupdata.city)
        cy.get('#zipcode').type(signupdata.zipcode)
        cy.get('#mobile_number').type(signupdata.mobilenumber)
        cy.get('button[data-qa="create-account"]').click()
        cy.contains('Account Created!').should('be.visible')
        cy.get('a[data-qa="continue-button"]').click()
       
        })
    