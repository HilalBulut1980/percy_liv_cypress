var data =
{
    "bestellnummer": "200000008",
    "breite": "1000",
    "hoehe": "1500",
    "wunschlaenge": "1500",
    "produkt": "Cadena 2280",
}

module.exports = {

    configure_service_schnurErsetzen: function configure_service_schnurErsetzen() {

        //load service page
        cy.visit('/reparaturauftrag-schnur-ersetzen')

        // input of data
        cy.get("#configurator-options > dl > :nth-child(2) > .input-box > input").wait(500).type(data.bestellnummer)
        cy.get("#configurator-options > dl > :nth-child(5) > .input-box > input").wait(500).type(data.produkt)
        cy.get("#configurator-options > dl > :nth-child(8) > .input-box > input").wait(500).type(data.breite)
        cy.get("#configurator-options > dl > :nth-child(11) > .input-box > input").wait(500).type(data.hoehe)
        cy.get("#configurator-options > dl > :nth-child(14) > .input-box > input").wait(500).type(data.wunschlaenge)

        // input quantity 
        cy.get('#qty').clear().type('2')
        // cy.percySnapshot('14')

        //add to cart
        cy.get('.cart-container > button').click({ force: true })
    }
}