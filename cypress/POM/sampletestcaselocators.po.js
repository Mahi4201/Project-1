class signinandlogin{
    signinorloginlocator(){
        return 'a[href="/login"]'
    }
    signupnamelocator(){
        return 'input[placeholder="Name"]'
    }
    signupemaillocator(){
    return 'input[data-qa="signup-email"]'
    }
    loginemaillocator(){
     return 'input[data-qa="login-email"]'
    }
    loginpasswordlocator(){
     return 'input[placeholder="Password"]'
    }
    signupbuttonlocator(){
        return 'button[data-qa="signup-button"]'
    }
    loginbuttonlocator(){
        return 'button[data-qa="login-button"]'
    }
    deleteaccountbutton(){
        return ' Delete Account'
    }
    continuebutton(){
        return 'a[data-qa="continue-button"]'
    }
    logoutbutton(){
        return 'a[href="/logout"]'
    }
    productbutton(){
        return 'a[href="/products'
    }
    subscriptionbutton(){
        return '#susbscribe_email'
    }
    cartbutton(){
        return ' Cart'
    }
    product1addtocartbutton(){
        return 'a[data-product-id="1"]'
    }
    product2addtocartbutton(){
        return 'a[data-product-id="2"]'
    }
    continueshopingbutton(){
        return 'button[data-dismiss="modal"]'
    }
    viewcartbutton(){
        return 'View Cart'
    }
    searchproductbutton(){
        return 'input[placeholder="Search Product"]'
    }
    contactusbutton(){
        return 'a[href="/contact_us"]'
    }
    viewproductbutton(){
        return 'a[href="/product_details/1"]'
    }
    clicksearchbutton(){
        return 'button[class="btn btn-default btn-lg"]'
    }
    fileuplodebutton(){
        return 'input[type="file"]'
    }
    contactformsubmitbbutton(){
        return 'input[type="submit"]'
    }
    contactformemaillocator(){
        return 'input[placeholder="Email"]'
    }
    contactformsubjectlocator(){
        return 'input[placeholder="Subject"]'
    }
    contactformnamelocator(){
        return 'input[placeholder="Name"]'
    }
    contactformmassagelocator(){
        return '#message'
    }
    clickonsubscribelocator(){
        return 'i[class="fa fa-arrow-circle-o-right"]'
    }

}


const signinandloginlocators = new signinandlogin()
export default signinandloginlocators