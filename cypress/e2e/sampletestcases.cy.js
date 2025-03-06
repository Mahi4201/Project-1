
import sampletestcaselocators from "../POM/sampletestcaselocators.po"
import signupdata from "../fixtures/sampletestcasesdata.json"

describe('E-commerce test cases',()=>{

    beforeEach('lunch the application',()=>{
        cy.visit('http://automationexercise.com')
    })

    let productdetails = [
        "Category", 
        "Availability", 
        "Condition", 
        "Brand"
    ]

    it('verify user has rigister the application',()=>{
    
    cy.createanddeleteaccount()
     cy.contains(' Delete Account').click()
     cy.contains('Account Deleted!').should('be.visible')
     cy.get('a[data-qa="continue-button"]').click()
     cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')

    })
    it('verify user can login the application',()=>{
        cy.createanddeleteaccount()
        cy.get('a[href="/logout"]').click()
        cy.get(sampletestcaselocators.loginemaillocator()).type(signupdata.signupmailid)
        cy.get(sampletestcaselocators.loginpasswordlocator()).type(signupdata.signuppassword)
        cy.get(sampletestcaselocators.loginbuttonlocator()).click()
        cy.contains('Logged in as Mahesh')
        cy.contains(' Delete Account').click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.get('a[data-qa="continue-button"]').click()
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
    })

    it('verify user can login to the application with incrruct emailid and password',()=>{
        cy.createanddeleteaccount()
        cy.get('a[href="/logout"]').click()
        cy.get(sampletestcaselocators.loginemaillocator()).type(signupdata.invalidemailid)
        cy.get(sampletestcaselocators.loginpasswordlocator()).type(signupdata.invalidpassword)
        cy.get(sampletestcaselocators.loginbuttonlocator()).click()
        cy.contains('Your email or password is incorrect!').should('be.visible')
    })

    it('verify user can logout the application',()=>{
        cy.get(sampletestcaselocators.signinorloginlocator()).click()
        cy.get(sampletestcaselocators.loginemaillocator()).type(signupdata.signupmailid)
        cy.get(sampletestcaselocators.loginpasswordlocator()).type(signupdata.signuppassword)
        cy.get(sampletestcaselocators.loginbuttonlocator()).click()
        cy.contains('Logged in as Mahesh')
        cy.get('a[href="/logout"]').click()
        cy.contains('Login to your account').should('be.visible')
        
    })
    it('verify user can get the error massage for invalid emailid and invalid password',()=>{

        cy.get(sampletestcaselocators.signinorloginlocator()).click()
        cy.get(sampletestcaselocators.signupnamelocator()).type(signupdata.signupusername)
        cy.get(sampletestcaselocators.signupemaillocator()).type(signupdata.signupmailid)
        cy.get(sampletestcaselocators.signupbuttonlocator()).click()
        cy.contains('Email Address already exist!').should('be.visible')
    })
    it('verify user can submit the contact form in the application',()=>{
     cy.get('a[href="/contact_us"]').click()
     cy.get('input[placeholder="Name"]').type(signupdata.signupusername)
     cy.get('input[placeholder="Email"]').type(signupdata.signupmailid)
     cy.get('input[placeholder="Subject"]').type('Issue in testcases')
     cy.get('#message').type('please write the more test cases for automation and api')     
     cy.get('input[type="file"]').selectFile('D:/E-Commerce project/Project-1/cypress/fixtures/API Testing notes.txt')
     cy.get('input[type="submit"]').click()
     cy.on("window:alert", () => {
        return true
      })
     cy.contains('Success! Your details have been submitted successfully.')
    })

     it('verify test case page is visible in the application',()=>{
        cy.contains(' Test Cases').click()
        cy.contains('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:').should('be.visible')
     })
     it('verify the products and product details in the application',()=>{

        cy.get('a[href="/products"]').click()
        cy.contains('All Products').should('be.visible')
        cy.get('a[href="/product_details/1"]').click()
        for(let details in productdetails){
            cy.contains(productdetails[details]).should('be.visible')
        }

    })

     it('verify the search button and search the product in the application',()=>{
            cy.get('a[href="/products"]').click()
            cy.contains('All Products').should('be.visible')
            cy.get('input[placeholder="Search Product"]').click().type('Stylish Dress')
            cy.get('button[class="btn btn-default btn-lg"]').click()
            cy.contains('Searched Products')
            cy.contains('Stylish Dress').should('be.visible')
        
        })

     


})