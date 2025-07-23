describe('verify termination reason in orange hgm',()=>{

    let terminationreason = "fake candidate"

    it('verify the terminaion reason',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/auth/login')
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.get('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq(2).click()
        cy.get('span[class="oxd-topbar-body-nav-tab-item"]').click()
        cy.get('a[role="menuitem"]').last().click()
        cy.get('button[type="button"]').eq(4).click()
        cy.get('input[class="oxd-input oxd-input--active"]').last().type(terminationreason)
        cy.get('button[type="submit"]').click()
        
    })
})