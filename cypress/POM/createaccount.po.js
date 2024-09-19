class locators{
    firstnamelocator() {
        return "#firstname"
    }
    lastnamelocator(){
        return "#lastname"
    }
    mailidlocator(){
        return "#email_address"
    }
    passwordlocator(){
        return "#password"
    }
    confirmpasswordlocator(){
        return "#password-confirmation"
    }
    createbuttonlocator(){
        return 'button[id="send2"]'
    }

}
const createaccountlocators = new locators()
    export default createaccountlocators

