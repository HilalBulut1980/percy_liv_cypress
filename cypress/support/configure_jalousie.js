var checkOut = require("./checkout.js");

module.exports = {

    configure_jalousie: function configure_jalousie() {

        //load configurator
        cy.visit('/jalousie/jalousie-konfigurator?lamellengroesse=16mm')
       
        //input height and weight
        cy.get('#hoehe_in_mm input').type('1800')
        cy.get('#breite_in_mm input').type('1400')

        // input quantity 
        cy.get('#configurator-price-cart > .add-to-cart input').clear().type('2')
        // cy.percySnapshot('6')

        //add to cart
        checkOut.add2Cart()
    }
}