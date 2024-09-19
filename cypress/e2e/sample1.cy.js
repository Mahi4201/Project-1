describe("campare the values", () => {
  it("campare the 2 products totel price ", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.contains("ADD TO CART").first().click();
    cy.contains("ADD TO CART").eq(0).click();
    cy.get('p[class="product-price"]')
      .first()
      .then((txt) => {
        var price1 = txt.text();
        cy.log(price1);

        cy.get('p[class="product-price"]')
          .eq(3)
          .then((txt1) => {
            var price2 = txt1.text();
            cy.log(price2);
            var num = Number(price1);
            var num1 = Number(price2);
            var num2 = num + num1;
            cy.log(num2);

            cy.get(
              'div[class="cart-info"]>table>tbody>tr:nth-child(2)>td:nth-child(3)'
            ).then((totelprice) => {
              var totelprice1 = totelprice.text();
              cy.log(totelprice1);
              var num3 = Number(totelprice1);
              //  cy.log(num3)
              expect(num2).to.equal(num3);
            });
          });
      });
  });

  it("campare the 2 products totel price ", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.contains("ADD TO CART").click();
  });

  it.only("order the products", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.contains("ADD TO CART").click();
    cy.get('img[alt="Cart"]').click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.get('p[class="product-name"]').then((productname) => {
      var name1 = productname.text();
      cy.log(name1);
      // cy.wait(3000)
      // expect(name1).to.equal('Brocolli - 1 Kg')

      cy.contains("Place Order").click();
      cy.get('select[style="width: 200px;"]').select("India");
      cy.get('input[type="checkbox"]').check();
      cy.contains("Proceed").click();
      cy.contains("Thank you, your order has been placed successfully").should(
        "be.visible"
      );
    });
  });
});
