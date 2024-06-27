module.exports = {

    configure_zubehoer_plissee: function configure_zubehoer_plissee() {

        //load zubehör page
        cy.visit('/sockelplatten')
        cy.wait('@js_minify')
        cy.wait(1000)

        //change color
        cy.get('.input-box select').select('weiß')

        // input quantity 
        cy.get('#qty').clear().type('4')
        // cy.percySnapshot('17')

        //add to cart
        cy.get('.cart-container > button').click({ force: true })
    }
}