// open chrome browser
// after 3sec it will open 
// google.com 
// after it is wait to5sec
// bengaluru 
// click on seach GamepadButton
// wait for 3sec
// goto img of section page 
// click the first image
// wait for 3sec 
// close the browser
import data from '../fixtures//example.json'
describe('google example scenerio',()=>{
    it('googl image test case',()=>{
        cy.visit('https://www.google.com/')
        cy.wait(3000)
        cy.get('textarea[aria-label="Search"]').click().type('Bangaluru')
        cy.wait(3000)
        cy.get('body').type('{esc}')
        cy.get('input[aria-label="Google Search"]').last().click()
        cy.wait(3000)
        cy.get('div[role="listitem"]').eq(3).click()
        cy.get('div[data-attrid="images universal"]').first().click()
        cy.wait(3000)
        cy.get('button[aria-label="Close"]').click()
    })
    it.only('googl image test case',()=>{
        cy.facebookloginPage(data.mailid,data.password)
        cy.contains(`The email address you entered isn't connected to an account. `).should('be.visible')
    })
})