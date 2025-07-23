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


require('cypress-downloadfile/lib/downloadFileCommand');
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })











import sampletestcaselocators from "../POM/sampletestcaselocators.po"
import signupdata1 from "../fixtures/sampletestcasesdata1.json"
import carddetails from "../fixtures/paymentdata1.json"

let useremailid
let userpassword

let address = [
     "1/105,Bengaluru near 8th mail",
     "near 8th mail manjunath nagar,Bengaluru",
     "Karnataka",
     "564765",
     "1234567890",
     "Bengaluru"
 ]


       Cypress.Commands.add('createanddeleteaccount',()=>{

               cy.get(sampletestcaselocators.signinorloginlocator()).first().click()
               cy.contains('New User Signup!').should('be.visible')
               cy.get(sampletestcaselocators.signupnamelocator()).type(signupdata1.signupusername)
               var randomnames = (Math.random() + 1).toString(36).substring(2);
               useremailid = randomnames + "@gmail.com"
               userpassword = randomnames + "@123"
               cy.get(sampletestcaselocators.signupemaillocator()).type(useremailid)
               cy.get(sampletestcaselocators.signupbuttonlocator()).click()
               cy.contains('Enter Account Information').should('be.visible')
               cy.get(sampletestcaselocators.gender1()).check()
               cy.get(sampletestcaselocators.signuppasswordlocator()).type(userpassword)
               cy.get(sampletestcaselocators.signupdaylocator()).select("10")
               cy.get(sampletestcaselocators.signupmonthlocator()).select("3")
               cy.get(sampletestcaselocators.signupyearlocator()).select("2002")
               cy.get('#newsletter').check()
               cy.get('#optin').check()
               cy.get(sampletestcaselocators.signupfirstnamelocator()).type(signupdata1.firstname)
               cy.get(sampletestcaselocators.signuplastnamelocator()).type(signupdata1.lastname)
               cy.get(sampletestcaselocators.signupcompanylocator()).type(signupdata1.companyname)
               cy.get(sampletestcaselocators.signupaddress1locator()).type(signupdata1.address)
               cy.get(sampletestcaselocators.signupaddress2locator()).type(signupdata1.address2)
               cy.get(sampletestcaselocators.signupcountrylocator()).select(3)
               cy.get(sampletestcaselocators.signupstatelocator()).type(signupdata1.state)
               cy.get(sampletestcaselocators.signupcitylocator()).type(signupdata1.city)
               cy.get(sampletestcaselocators.signupzipcodelocator()).type(signupdata1.zipcode)
               cy.get(sampletestcaselocators.signupmobilenumberlocator()).type(signupdata1.mobilenumber)
               cy.get(sampletestcaselocators.createaccountbuttonlocator()).click()
               cy.contains('Account Created!').should('be.visible')
               cy.get(sampletestcaselocators.continuebutton()).click()
              
               })

               Cypress.Commands.add('loginaccount',()=>{

                    cy.get(sampletestcaselocators.signinorloginlocator()).click()
                    cy.get(sampletestcaselocators.loginemaillocator()).type(useremailid)
                    cy.get(sampletestcaselocators.loginpasswordlocator()).type(userpassword)
                    cy.get(sampletestcaselocators.loginbuttonlocator()).click()
                    cy.contains('Logged in as Mahesh').should('be.visible')
               })




              Cypress.Commands.add('proceedtocheckout',()=>{
               cy.get(sampletestcaselocators.proceedtocheckoutbutton()).click()
               for(let addressdetails in address){
                   cy.contains(address[addressdetails]).should('be.visible')
               }
               cy.get(sampletestcaselocators.commentmassagelocator()).type("This product is very good Quality")
               cy.get(sampletestcaselocators.placeorderlocator()).click()
               cy.get(sampletestcaselocators.cardnamelocator()).type(carddetails.cardname)
               cy.get(sampletestcaselocators.cardnumberlocator()).type(carddetails.cardnumber)
               cy.get(sampletestcaselocators.cardcvclocator()).type(carddetails.cardcvc)
               cy.get(sampletestcaselocators.cardexpairemonthlocator()).type(carddetails.cardexpairemonth)
               cy.get(sampletestcaselocators.cardexpaireyearlocator()).type(carddetails.cardexpaireyear)
               cy.get(sampletestcaselocators.payandconfirmorderlocator()).click()
               cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
               cy.contains(sampletestcaselocators.deleteaccountbutton()).click()
               cy.get(sampletestcaselocators.continuebutton()).click()
          
          })
    


          Cypress.Commands.add('facebookloginPage',(mailid,password)=>{
               cy.visit('https://www.facebook.com/')
               cy.get('input[data-testid="royal-email"]').click().type(mailid)
               cy.get('[data-testid="royal-pass"]').click().type(password)
               cy.get('button[data-testid="royal-login-button"]').click()
               cy.wait(5000)
          })