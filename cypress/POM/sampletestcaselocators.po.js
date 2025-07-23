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
    proceedtocheckoutbutton(){
        return 'a[class="btn btn-default check_out"]'
    }
    gender2(){
        return 'input[value="Mrs"]'
    }
    gender1(){
        return 'input[value="Mr"]'
    }
    signuppasswordlocator(){
        return 'input[id="password"]'
    }
    signupfirstnamelocator(){
        return '#first_name'
    }
    signuplastnamelocator(){
        return '#last_name'
    }
    signupcompanylocator(){
        return '#company'
    }
    signupaddress1locator(){
        return '#address1'
    }
    signupaddress2locator(){
        return '#address2'
    }
    signupstatelocator(){
        return '#state'
    }
    signupcitylocator(){
        return '#city'
    }
    signupzipcodelocator(){
        return '#zipcode'
    }
    signupmobilenumberlocator(){
        return '#mobile_number'
    }
    createaccountbuttonlocator(){
        return 'button[data-qa="create-account"]'
    }
    signupdaylocator(){
        return 'select[id="days"]'
    }
    signupmonthlocator(){
        return 'select[id="months"]'
    }
    signupyearlocator(){
        return 'select[id="years"]'
    }
    signupcountrylocator(){
        return 'select[name="country"]'
    }
    commentmassagelocator(){
        return 'textarea[name="message"]'
    }
    placeorderlocator(){
        return 'a[class="btn btn-default check_out"]'
    }
    cardnamelocator(){
        return 'input[name="name_on_card"]'
    }
    cardnumberlocator(){
        return 'input[data-qa="card-number"]'
    }
    cardcvclocator(){
        return 'input[data-qa="cvc"]'
    }
    cardexpairemonthlocator(){
        return 'input[name="expiry_month"]'
    }
    cardexpaireyearlocator(){
        return 'input[data-qa="expiry-year"]'
    }
    payandconfirmorderlocator(){
        return 'button[data-qa="pay-button"]'
    }
    removeproductincartlocator(){
        return 'a[data-product-id="2"]'
    }


}


const signinandloginlocators = new signinandlogin()
export default signinandloginlocators