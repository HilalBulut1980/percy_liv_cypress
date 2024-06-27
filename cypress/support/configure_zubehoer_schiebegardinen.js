module.exports = {

    configure_zubehoer_schiebegardinen: function configure_zubehoer_schiebegardinen() {

        //load zubehör page
        cy.visit('/schiebegardine-magnetclip')

        // input quantity 
        cy.get('#qty').clear().type('6')
        // cy.percySnapshot('19')

        //add to cart
        cy.get('.cart-container > button').click({ force: true })
    }
}