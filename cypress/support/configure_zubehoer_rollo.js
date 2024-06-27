module.exports = {

    configure_zubehoer_rollo: function configure_zubehoer_rollo() {

        //load zubehör page
        cy.visit('/bedienstab-rollo-dachfenster')
        cy.wait('@js_minify')
        cy.wait(1000)

        //select size
        cy.contains('Länge wählen').siblings('select').select('100 cm')

        // input quantity 
        cy.get('#qty').clear().type('1')
        // cy.percySnapshot('18')

        cy.get('.cart-container > button').click({ force: true })
    }
}