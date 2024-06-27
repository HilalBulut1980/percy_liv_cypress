var checkOut = require("./checkout.js");

module.exports = {

    configure_plissee: function configure_plissee() {

        //load configurator
        cy.visit('/plissee/lindura-1583')
        cy.contains('Plissee auf Maß konfigurieren').click()

        //input height and weight
        cy.get('#hoehe input').type('1500')
        cy.get('#breite input').type('1500')

        // input quantity 
        cy.get('#configurator-price-cart > .add-to-cart input').clear().type('2')
        // cy.percySnapshot('8')

       //add to cart
        checkOut.add2Cart()
    }
}