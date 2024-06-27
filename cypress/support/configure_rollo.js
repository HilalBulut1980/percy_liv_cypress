var checkOut = require("./checkout.js");

module.exports = {

    configure_rollo: function configure_rollo() {

        //load configurator
        cy.visit('/rollo/basic-3687')
        cy.contains('Rollo auf Maß konfigurieren').click()
       
        //select rollo type
        cy.contains('mit Kassette').click()

        //input height and weight
        cy.get('#hoehe_in_mm input').type('2000')
        cy.get('#breite_in_mm input').type('1300')

        // input quantity 
        cy.get('#configurator-price-cart > .add-to-cart input').clear().type('2')
        // cy.percySnapshot('10')

        //add to cart
        checkOut.add2Cart()
    }
}