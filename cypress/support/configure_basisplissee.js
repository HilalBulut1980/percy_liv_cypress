var checkOut = require("./checkout.js");

module.exports = {

    configure_basisplissee: function configure_basisplissee() {

        //load configurator
        cy.visit('/plissee/puro-4256')
        cy.contains('Plissee auf Maß konfigurieren').click()

        //input height and weight
        cy.get('#hoehe input').type('1700')
        cy.get('#breite input').type('1100')

        // input quantity 
        cy.get('#configurator-price-cart > .add-to-cart input').clear().type('2')

        // cy.percySnapshot('1')
       //add to cart
        checkOut.add2Cart()
    }
}