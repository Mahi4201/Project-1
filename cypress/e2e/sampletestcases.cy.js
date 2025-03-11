
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

    let bothproductnames = [
        "Blue Top",
        "Men Tshirt"
    ]

    it('verify user has rigister the application',()=>{
    
    cy.createanddeleteaccount()
     cy.contains(sampletestcaselocators.deleteaccountbutton()).click()
     cy.contains('Account Deleted!').should('be.visible')
     cy.get(sampletestcaselocators.continuebutton()).click()
     cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')

    })
    it('verify user can login the application',()=>{
        cy.createanddeleteaccount()
        cy.get(sampletestcaselocators.logoutbutton()).click()
        cy.get(sampletestcaselocators.loginemaillocator()).type(signupdata.signupmailid)
        cy.get(sampletestcaselocators.loginpasswordlocator()).type(signupdata.signuppassword)
        cy.get(sampletestcaselocators.loginbuttonlocator()).click()
        cy.contains('Logged in as Mahesh').should('be.visible')
        cy.contains(sampletestcaselocators.deleteaccountbutton()).click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.get(sampletestcaselocators.continuebutton()).click()
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
    })

    it('verify user can login to the application with incrruct emailid and password',()=>{
        cy.createanddeleteaccount()
        cy.get(sampletestcaselocators.logoutbutton()).click()
        cy.get(sampletestcaselocators.loginemaillocator()).type(signupdata.invalidemailid)
        cy.get(sampletestcaselocators.loginpasswordlocator()).type(signupdata.invalidpassword)
        cy.get(sampletestcaselocators.loginbuttonlocator()).click()
        cy.contains('Your email or password is incorrect!').should('be.visible')
    })

    it('verify user can logout the application',()=>{
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
        cy.get(sampletestcaselocators.signinorloginlocator()).click()
        cy.get(sampletestcaselocators.loginemaillocator()).type(signupdata.signupmailid)
        cy.get(sampletestcaselocators.loginpasswordlocator()).type(signupdata.signuppassword)
        cy.get(sampletestcaselocators.loginbuttonlocator()).click()
        cy.contains('Logged in as Mahesh')
        cy.get(sampletestcaselocators.logoutbutton()).click()
        cy.contains('Login to your account').should('be.visible')
        
    })
    it('verify user can get the error massage for invalid emailid and invalid password',()=>{
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
        cy.get(sampletestcaselocators.signinorloginlocator()).click()
        cy.get(sampletestcaselocators.signupnamelocator()).type(signupdata.signupusername)
        cy.get(sampletestcaselocators.signupemaillocator()).type(signupdata.signupmailid)
        cy.get(sampletestcaselocators.signupbuttonlocator()).click()
        cy.contains('Email Address already exist!').should('be.visible')
    })
    it('verify user can submit the contact us form in the application',()=>{
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
        cy.get(sampletestcaselocators.contactusbutton()).click()
        cy.get(sampletestcaselocators.contactformnamelocator()).type(signupdata.signupusername)
        cy.get(sampletestcaselocators.contactformemaillocator()).type(signupdata.signupmailid)
        cy.get(sampletestcaselocators.contactformsubjectlocator()).type('Issue in testcases')
        cy.get(sampletestcaselocators.contactformmassagelocator()).type('please write the more test cases for automation and api')     
        cy.get(sampletestcaselocators.fileuplodebutton()).selectFile('D:/E-Commerce project/Project-1/cypress/fixtures/API Testing notes.txt')
        cy.get(sampletestcaselocators.contactformsubmitbbutton()).click()
        cy.on("window:alert", () => {
           return true
          })
        cy.contains('Success! Your details have been submitted successfully.')

        })

    it('verify test case page is visible in the application',()=>{
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
        cy.contains(' Test Cases').click()
        cy.contains('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:').should('be.visible')
     })

    it('verify the products and product details in the application',()=>{
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
        cy.get(sampletestcaselocators.productbutton()).click()
        cy.contains('All Products').should('be.visible')
        cy.get(sampletestcaselocators.viewproductbutton()).click()
        for(let details in productdetails){
            cy.contains(productdetails[details]).should('be.visible')
        }

    })

    it('verify the search button and search the product in the application',()=>{
            cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
            cy.get(sampletestcaselocators.productbutton()).click()
            cy.contains('All Products').should('be.visible')
            cy.get(sampletestcaselocators.searchproductbutton()).click().type('Stylish Dress')
            cy.get(sampletestcaselocators.clicksearchbutton()).click()
            cy.contains('Searched Products').should('be.visible')
            cy.contains('Stylish Dress').should('be.visible')
        
        })

     it('verify subsscription in the home page',()=>{
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
        cy.get(sampletestcaselocators.subscriptionbutton()).scrollIntoView()
        cy.get(sampletestcaselocators.subscriptionbutton()).click().type(signupdata.signupmailid)
        cy.get(sampletestcaselocators.clickonsubscribelocator()).click()
        cy.contains('You have been successfully subscribed!').should('be.visible')

     })
     it('verify subsscription in the cart page',()=>{
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
        cy.contains(sampletestcaselocators.cartbutton()).click()
        cy.get(sampletestcaselocators.subscriptionbutton()).scrollIntoView()
        cy.get(sampletestcaselocators.subscriptionbutton()).click().type(signupdata.signupmailid)
        cy.get(sampletestcaselocators.clickonsubscribelocator()).click()
        cy.contains('You have been successfully subscribed!').should('be.visible')

    })

    it('verify user add the 2 products and verify the quantity and total price',()=>{

        let product1finalprice
        let product2finalprice
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
        cy.get(sampletestcaselocators.productbutton()).click()
        cy.contains('All Products').should('be.visible')
        cy.get('div[class="overlay-content"]>h2').first().then(($product1price)=>{
            let product1price = $product1price.text().replace('Rs. ', '')
               product1finalprice = Number(product1price)
              cy.log(product1finalprice)
                  
        })
        cy.get(sampletestcaselocators.product1addtocartbutton()).first().click()
        cy.get(sampletestcaselocators.continueshopingbutton()).click()
        cy.get('div[class="overlay-content"]>h2').eq(1).then(($product2price)=>{
            let product2price = $product2price.text().replace('Rs. ', '')
               product2finalprice = Number(product2price)
              cy.log(product2finalprice)
             
        })
        cy.get(sampletestcaselocators.product2addtocartbutton()).first().click()
        cy.contains(sampletestcaselocators.viewcartbutton()).click()

        for( let productnames in bothproductnames){
            cy.contains(bothproductnames[productnames]).should('be.visible')
        }
        cy.get('table[id="cart_info_table"]>tbody>tr:nth-child(1)>td:nth-child(3)>p').then(($product1priceincart)=>{
            let product1priceincart = $product1priceincart.text().replace('Rs. ','')
            let product1finalpriceincart = Number(product1priceincart)
            cy.log(product1finalpriceincart)
            expect(product1finalpriceincart).to.equal(product1finalprice)
        })
        cy.get('table[id="cart_info_table"]>tbody>tr:nth-child(2)>td:nth-child(3)>p').then(($product2priceincart)=>{
            let product2priceincart = $product2priceincart.text().replace('Rs. ','')
            let product2finalpriceincart = Number(product2priceincart)
            cy.log(product2finalpriceincart)
            expect(product2finalpriceincart).to.equal(product2finalprice)
        })

        // cy.get('table[id="cart_info_table"]>tbody>tr').each(($row) => {
        //     cy.wrap($row).find('td.cart_quantity').then(($quantity) => {
        //         let quantity = Number($quantity.text())
        //         cy.log('Quantity: ', quantity)
        //         expect(quantity).to.equal(1)
        //     })
        // })

    })

    it.only('verify the product quantity in cart',()=>{

        let productfinalquantity
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
        cy.get(sampletestcaselocators.viewproductbutton()).click()
        for(let details in productdetails){
            cy.contains(productdetails[details]).should('be.visible')
        }
        cy.get('#quantity').click().clear().type(4)
        cy.get('button[class="btn btn-default cart"]').click()
        cy.contains(sampletestcaselocators.viewcartbutton()).click()
        cy.get('button[class="disabled"]').then(($productquantityincart)=>{
            let productquantityincart = $productquantityincart.text()
            let productfinalquantityincart = Number(productquantityincart)
            expect(productfinalquantityincart).to.equal(4)
        })
    })











})