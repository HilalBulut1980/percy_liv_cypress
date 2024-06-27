var checkOut = require("./checkout.js");

module.exports = {

    configure_vorhang: function configure_vorhang() {

        //load configurator
        cy.visit('/vorhaenge/dekoschal/bovino')

        //change color
        cy.get('.color-title').contains('Rot').click()
       
        //input height and weight
        cy.get('#breite input').type('200')
        cy.get('#hoehe input').type('280')

        // input quantity 
        cy.get('#qty').clear().type('2')
        // cy.percySnapshot('16')

        //add to cart
        checkOut.add2Cart()
    }
}