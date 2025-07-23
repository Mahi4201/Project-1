
import sampletestcaselocators from "../POM/sampletestcaselocators.po"
import signupdata1 from "../fixtures/sampletestcasesdata1.json"
import carddetails from "../fixtures/paymentdata1.json"


describe('E-commerce test cases',()=>{

    beforeEach('lunch the application',()=>{

        cy.visit('http://automationexercise.com')
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
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

    let recommendedproductdetails = [
        "Stylish Dress",
        "Rs. 1500"
    ]

    let address1 = [
        "1/105,Bengaluru near 8th mail",
        "near 8th mail manjunath nagar,Bengaluru",
        "Karnataka",
        "564765",
        "1234567890",
        "Bengaluru"
    ]


   
    it('verify user can create an account and delete the account in the application',()=>{
    
     cy.createanddeleteaccount()
     cy.contains(sampletestcaselocators.deleteaccountbutton()).click()
     cy.contains('Account Deleted!').should('be.visible')
     cy.get(sampletestcaselocators.continuebutton()).click()
     cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')

    })
    it('verify user can login the application',()=>{
        cy.createanddeleteaccount()
        cy.get(sampletestcaselocators.logoutbutton()).click()
       cy.loginaccount()
        cy.contains(sampletestcaselocators.deleteaccountbutton()).click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.get(sampletestcaselocators.continuebutton()).click()
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
    })

    it('verify user can login to the application with incrruct emailid and password',()=>{
       
        cy.get(sampletestcaselocators.signinorloginlocator()).click()
        cy.get(sampletestcaselocators.loginemaillocator()).type(signupdata1.invalidemailid)
        cy.get(sampletestcaselocators.loginpasswordlocator()).type(signupdata1.invalidpassword)
        cy.get(sampletestcaselocators.loginbuttonlocator()).click()
        cy.contains('Your email or password is incorrect!').should('be.visible')
    })

    it('verify user can logout the application',()=>{
        cy.createanddeleteaccount()
        cy.get(sampletestcaselocators.logoutbutton()).click()
        cy.contains('Login to your account').should('be.visible')
        
    })
    it('verify user can get the error massage Email Address already exist!',()=>{
        cy.get(sampletestcaselocators.signinorloginlocator()).click()
        cy.get(sampletestcaselocators.signupnamelocator()).type("Mahesh")
        cy.get(sampletestcaselocators.signupemaillocator()).type("mahesh1@gmail.com")
        cy.get(sampletestcaselocators.signupbuttonlocator()).click()
        cy.contains('Email Address already exist!').should('be.visible')
    })
    it('verify user can submit the contact us form in the application',()=>{
        cy.get(sampletestcaselocators.contactusbutton()).click()
        cy.get(sampletestcaselocators.contactformnamelocator()).type(signupdata1.signupusername)
        cy.get(sampletestcaselocators.contactformemaillocator()).type(signupdata1.signupmailid)
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
        cy.contains(' Test Cases').click()
        cy.contains('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:').should('be.visible')
     })

    it('verify the products and product details in the application',()=>{
        cy.get(sampletestcaselocators.productbutton()).click()
        cy.contains('All Products').should('be.visible')
        cy.get(sampletestcaselocators.viewproductbutton()).click()
        for(let details in productdetails){
            cy.contains(productdetails[details]).should('be.visible')
        }

    })

    it('verify the search button and search the product in the application',()=>{
            
            cy.get(sampletestcaselocators.productbutton()).click()
            cy.contains('All Products').should('be.visible')
            cy.get(sampletestcaselocators.searchproductbutton()).click().type('Stylish Dress')
            cy.get(sampletestcaselocators.clicksearchbutton()).click()
            cy.contains('Searched Products').should('be.visible')
            cy.contains('Stylish Dress').should('be.visible')
        
        })

     it('verify subsscription in the home page',()=>{
        cy.get(sampletestcaselocators.subscriptionbutton()).scrollIntoView()
        cy.get(sampletestcaselocators.subscriptionbutton()).click().type(signupdata1.signupmailid)
        cy.get(sampletestcaselocators.clickonsubscribelocator()).click()
        cy.contains('You have been successfully subscribed!').should('be.visible')

     })
     it('verify subsscription in the cart page',()=>{
        cy.contains(sampletestcaselocators.cartbutton()).click()
        cy.get(sampletestcaselocators.subscriptionbutton()).scrollIntoView()
        cy.get(sampletestcaselocators.subscriptionbutton()).click().type(signupdata1.signupmailid)
        cy.get(sampletestcaselocators.clickonsubscribelocator()).click()
        cy.contains('You have been successfully subscribed!').should('be.visible')

    })

    it('verify user add the 2 products and verify the quantity and total price',()=>{

        let product1finalprice
        let product2finalprice
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

       
    })

    it('verify the product quantity in cart',()=>{

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

    it('verify user can order the product rigister while checkout',()=>{

     cy.get(sampletestcaselocators.product2addtocartbutton()).first().click()
     cy.get(sampletestcaselocators.continueshopingbutton()).click()
     cy.contains(sampletestcaselocators.cartbutton()).click()
     cy.contains('Shopping Cart').should('be.visible')
     cy.get(sampletestcaselocators.proceedtocheckoutbutton()).click()
     cy.get('a[href="/login"]').last().click()
     cy.createanddeleteaccount()
     cy.contains('Logged in as Mahesh').should('be.visible')
     cy.contains(sampletestcaselocators.cartbutton()).click()

     cy.proceedtocheckout()

    })

    it('verify user can order the product rigister before checkout',()=>{

        cy.createanddeleteaccount()
        cy.contains('Logged in as Mahesh').should('be.visible')
        cy.get(sampletestcaselocators.product1addtocartbutton()).first().click()
        cy.get(sampletestcaselocators.continueshopingbutton()).click()
        cy.contains(sampletestcaselocators.cartbutton()).click()
        cy.contains('Shopping Cart').should('be.visible')
        cy.proceedtocheckout()

    })

    it('verify user can order the product login before checkout',()=>{
        cy.createanddeleteaccount()
        cy.get(sampletestcaselocators.logoutbutton()).click()
        cy.contains('Login to your account').should('be.visible')
        cy.loginaccount()
        cy.get(sampletestcaselocators.product2addtocartbutton()).first().click()
        cy.get(sampletestcaselocators.continueshopingbutton()).click()
        cy.contains(sampletestcaselocators.cartbutton()).click()
        cy.contains('Shopping Cart').should('be.visible')
        cy.proceedtocheckout()

    })

    it('verify user can remove the product from the cart',()=>{

        cy.get(sampletestcaselocators.product2addtocartbutton()).first().click()
        cy.get(sampletestcaselocators.continueshopingbutton()).click()
        cy.contains(sampletestcaselocators.cartbutton()).click()
        cy.contains('Shopping Cart').should('be.visible')
        cy.get(sampletestcaselocators.removeproductincartlocator()).click()
        cy.contains('Cart is empty! Click here to buy products.').should('be.visible')
       

    })

    it('verify catagiry of products',()=>{
    
    cy.contains('Category').should('be.visible')
    cy.get('a[href="#Women"]').click()
    cy.get('a[href="/category_products/1"]').click()
    cy.contains('Women - Dress Products').should('be.visible')
    cy.get('a[href="#Men"]').click()
    cy.get('a[href="/category_products/3"]').click()
    cy.contains('Men - Tshirts Products').should('be.visible')

    })

    it('verify product brands',()=>{
     
        cy.get(sampletestcaselocators.productbutton()).click()
        cy.contains('Brands').should('be.visible')
         cy.get('a[href="/brand_products/Babyhug"]').click()
         cy.contains('Brand - Babyhug Products').should('be.visible')
         cy.get('a[href="/brand_products/Polo"]').click()
         cy.contains('Brand - Polo Products').should('be.visible')
     
      })

      it('verify user can review a product',()=>{

       cy.get(sampletestcaselocators.productbutton()).click()
       cy.contains('All Products').should('be.visible')
       cy.get(sampletestcaselocators.viewproductbutton()).click()
       cy.contains('Write Your Review').should('be.visible')
       cy.get('input[id="name"]').type(signupdata1.signupusername)
       cy.get('input[id="email"]').type(signupdata1.signupmailid)
       cy.get('textarea[id="review"]').type('This product is very good Quality')
       cy.get('button[id="button-review"]').click()
       cy.contains('Thank you for your review.').should('be.visible')



      })

      it('verify user can add the recommended iterms to the cart',()=>{

        cy.get('div[class="recommended_items"]').scrollIntoView()
        cy.contains('recommended items').should('be.visible')
        cy.get('a[data-product-id="4"]').last().click()
        cy.contains(sampletestcaselocators.viewcartbutton()).click()
        for(let recommendedproduct in recommendedproductdetails){
            cy.contains(recommendedproductdetails[recommendedproduct]).should('be.visible')
        }

      })

      it('verify user can scroll up using arrow button and scroll down functionality',()=>{

        cy.get('#footer').first().scrollIntoView()
        cy.contains('Subscription').should('be.visible')
        cy.get('#scrollUp').click()
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
      })

      it('verify user can scroll up without using arrow button and scroll down functionality',()=>{

        cy.get('#footer').first().scrollIntoView()
        cy.contains('Subscription').should('be.visible')
        cy.get('div[class="col-sm-6"]').first().scrollIntoView()
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
      })


      it('verify address details in checkout page',()=>{

       let rigisteredaddress = {
        rigisteredcompany : "TCS",
        rigisteredaddress1 : "1/105,Bengaluru near 8th mail",
        rigisteredaddress2 : "near 8th mail manjunath nagar,Bengaluru",
        rigisteredmobilenumber : "1234567890",
        rigisteredstatecityandpincode : "Bengaluru Karnataka 564765"

       }
        cy.createanddeleteaccount()
        cy.contains('Logged in as Mahesh').should('be.visible')
        cy.get(sampletestcaselocators.product1addtocartbutton()).first().click()
        cy.get(sampletestcaselocators.continueshopingbutton()).click()
        cy.contains(sampletestcaselocators.cartbutton()).click()
        cy.contains('Blue Top').should('be.visible')
        cy.get(sampletestcaselocators.proceedtocheckoutbutton()).click()
        cy.get('li[class="address_address1 address_address2"]').eq(0).then(($company)=>{
            let delivarycompanyname = $company.text()
            expect(delivarycompanyname).to.equal(rigisteredaddress[rigisteredcompany])
        })
        


      })

      it.only('download invoice after purchase an order',()=>{


        cy.get(sampletestcaselocators.product1addtocartbutton()).first().click()
        cy.get(sampletestcaselocators.continueshopingbutton()).click()
        cy.contains(sampletestcaselocators.cartbutton()).click()
        cy.contains('Blue Top').should('be.visible')
        cy.get(sampletestcaselocators.proceedtocheckoutbutton()).click()
        cy.get(sampletestcaselocators.continueshopingbutton()).click()
        cy.createanddeleteaccount()
        cy.contains(sampletestcaselocators.cartbutton()).click()
        cy.get(sampletestcaselocators.proceedtocheckoutbutton()).click()
        for(let addressdetails1 in address1){
            cy.contains(address1[addressdetails1]).should('be.visible')
        }
        
       cy.get('textarea[class="form-control"]').type('This product is very good Quality')
       cy.contains('Place Order').click()
       cy.get(sampletestcaselocators.cardnamelocator()).type(carddetails.cardname)
       cy.get(sampletestcaselocators.cardnumberlocator()).type(carddetails.cardnumber)
       cy.get(sampletestcaselocators.cardcvclocator()).type(carddetails.cardcvc)
       cy.get(sampletestcaselocators.cardexpairemonthlocator()).type(carddetails.cardexpairemonth)
       cy.get(sampletestcaselocators.cardexpaireyearlocator()).type(carddetails.cardexpaireyear)
       cy.get(sampletestcaselocators.payandconfirmorderlocator()).click()
       cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
       cy.get('a[class="btn btn-default check_out"]').click('cypress/downloads',"order1invoice.txt")
       cy.get(sampletestcaselocators.continuebutton()).click()
       cy.contains(sampletestcaselocators.deleteaccountbutton()).click()
       cy.get(sampletestcaselocators.continuebutton()).click()
       cy.contains('Your account has been permanently deleted!').should('be.visible')
        
      })

   

})