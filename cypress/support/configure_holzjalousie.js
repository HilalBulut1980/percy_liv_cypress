var checkOut = require("./checkout.js");

module.exports = {

    configure_holzjalousie: function configure_holzjalousie() {

        //load configurator
        cy.visit('/jalousie/holz-jalousie-konfigurator?lamellengroesse=50mm')

        //change lamellen color
        cy.contains('Natural Mahagoni 6523').click()
       
        //input height and weight
        cy.get('#hoehe_in_mm input').type('1650')
        cy.get('#breite_in_mm input').type('1200')

        // input quantity 
        cy.get('#configurator-price-cart > .add-to-cart input').clear().type('2')
        // cy.percySnapshot('4')

        //add to cart
        checkOut.add2Cart()
    }
}