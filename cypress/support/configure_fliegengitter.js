var checkOut = require("./checkout.js");

module.exports = {

    configure_fliegengitter: function configure_fliegengitter() {

        var product = 'Fliegengitter'

        //load configurator
        cy.visit('/insektenschutz/fliegengitter')

        //change color
        cy.contains('Goldeiche').click()

        //input height and weight
        cy.get('#options_height').type('2000')
        cy.get('#options_width').type('900')

        // input quantity 
        cy.get('#qty').clear().type('2')
        // cy.percySnapshot('3')

        //go to cart
        cy.get('.cart-container > button').click({ force: true })
    }
}