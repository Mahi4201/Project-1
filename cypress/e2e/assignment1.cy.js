describe("assignments", () => {
  let finalprice;
  let arr = [];

  it("open Flipkart and print mobile names if mobile price is more than 15000", () => {
    cy.visit("https://www.flipkart.com/");

    // Close login popup if it appears
    cy.get("body").then(($body) => {
      if ($body.find("button._2KpZ6l._2doB4z").length > 0) {
        cy.get("button._2KpZ6l._2doB4z").click();
      }
    });

    cy.get('input[title="Search for Products, Brands and More"]').type(
      "Mobiles{enter}"
    );
    cy.wait(3000);

    // Get all price elements first
    cy.get('div[class="Nx9bqj _4b5DiR"]').then(($prices) => {
      for (let i = 0; i < $prices.length; i++) {
        let mobilesprice = $prices.eq(i).text();
        finalprice = mobilesprice.replace("₹", "").replace(/,/g, "");
        arr.push(Number(finalprice));
      }

      // Now iterate through the stored prices
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 15000) {
          // ✅ Check for price more than 15000
          cy.get('div[class="KzDlHZ"]')
            .eq(i)
            .then((text) => {
              const mobileName = text.text();
              cy.log(`Mobile: ${mobileName} - ₹${arr[i]}`);
            });
        }
      }
    });
  });
});

describe.only("assignments", () => {
  let Famount;
  let arr = [];
  let SorteAmount = []

  it("open Flipkart and print mobile names if mobile price is more than 15000", () => {
    cy.visit("https://www.makemytrip.com");
    cy.get('[for="departure"]').click()
    cy.get('[class="DayPicker-Body"]')
      .first()
      .find('[class=" todayPrice"]')
      .then(($prices) => {
        for (let i = 0; i < $prices.length; i++) {
          let amount = $prices.eq(i).text();
          Famount = amount.replace("₹", "").replace(/,/g, "");
          arr.push(Number(Famount));
        }
         SorteAmount = arr.sort();
         cy.log(SorteAmount)
      });
  });
});
