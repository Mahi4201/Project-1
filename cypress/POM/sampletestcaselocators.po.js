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

}


const signinandloginlocators = new signinandlogin()
export default signinandloginlocators