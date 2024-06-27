var checkOut = require("./checkout.js");

module.exports = {

    configure_kissenhuelle: function configure_kissenhuelle() {

        //load configurator
        cy.visit('/kissenhuelle/bosco')

        //change color
        cy.contains('Lavendel').click()

        //select size
        cy.contains('Stück 50x50cm').click()
        
        // input quantity 
        cy.get('#qty').clear().type('2')
        // cy.percySnapshot('7')

        //add to cart
        checkOut.add2Cart()
    }
}