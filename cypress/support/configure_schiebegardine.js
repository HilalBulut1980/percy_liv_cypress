var checkOut = require("./checkout.js");

module.exports = {

    configure_schiebegardine: function configure_schiebegardine() {

        //load configurator
        cy.visit('/schiebegardinen/salomo-7346')
        cy.contains('Schiebegardine auf Maß konfigurieren').click()

        //input height and weight
        cy.get('#hoehe_in_mm input').type('2800')
        cy.get('#breite_in_mm input').type('1000')

        // input quantity 
        cy.get('#qty').clear().type('2')
        // cy.percySnapshot('11')

        //add to cart
        checkOut.add2Cart()
    }
}