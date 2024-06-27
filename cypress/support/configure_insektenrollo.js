var checkOut = require("./checkout.js");

module.exports = {

    configure_insektenrollo: function configure_insektenrollo() {

        var product = 'Insektenschutzrollo'

        //load configurator
        cy.visit('/insektenschutz/insektenschutz-rollo')

        //change color
        cy.contains('Eiche').click()

        //input height and weight
        cy.get('#options_height').type('2050')
        cy.get('#options_width').type('1400')

        // input quantity 
        cy.get('#qty').clear().type('2')
        // cy.percySnapshot('5')

        //go to cart
        cy.get('.cart-container > button').click({ force: true })
    }
}