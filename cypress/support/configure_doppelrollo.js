var checkOut = require("./checkout.js");

module.exports = {

    configure_doppelrollo: function configure_doppelrollo() {

        //load configurator
        cy.visit('/doppelrollo/rayure-5014')
        cy.contains('Doppelrollo auf Maß konfigurieren').click()
       
        //select rollo type
        cy.contains('Doppelrollo mit Kassette').click({ force: true })

        //input height and weight
        cy.get('#hoehe input').type('1500')
        cy.get('#breite input').type('1000')

        // input quantity 
        cy.get('#configurator-price-cart > .add-to-cart input').clear().type('2')
        // cy.percySnapshot('2')

        //add to cart
        checkOut.add2Cart()
    }
}