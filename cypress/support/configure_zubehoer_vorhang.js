module.exports = {

    configure_zubehoer_vorhang: function configure_zubehoer_vorhang() {

        //load zubehör page
        cy.visit('/gardinenstangen/zylinder2')

        // input quantity 
        cy.get('#qty').clear().type('2')
        // cy.percySnapshot('20')

        //go to cart
        cy.get('.cart-container > button').click({ force: true })
    }
}