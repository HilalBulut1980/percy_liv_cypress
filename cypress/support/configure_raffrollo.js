var checkOut = require("./checkout.js");

module.exports = {

    configure_raffrollo: function configure_raffrollo() {

        //load configurator
        cy.visit('/raffrollo/yuna-9260')
        cy.contains('Raffrollo auf Maß konfigurieren').click()

        //input height and weight
        cy.get('#hoehe_in_mm input').type('250')
        cy.get('#breite_in_mm input').type('120')

        // input quantity 
        cy.get('#qty').clear().type('2')
        // cy.percySnapshot('9')

        //add to cart
        checkOut.add2Cart()
    }
}