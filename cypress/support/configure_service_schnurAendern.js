var data =
{
    "bestellnummer": "200000002",
    "breite": "800",
    "hoehe": "1200",
    "wunschlaenge": "1800",
    "produkt": "Cadena 2278",
}

module.exports = {

    configure_service_aenderungSchnur: function configure_service_aenderungSchnur() {

        //load service page
        cy.visit('/aenderungsauftrag-schnurlaenge')

        // input of data
        cy.get("#configurator-options > dl > :nth-child(2) > .input-box > input").wait(500).type(data.bestellnummer)
        cy.get("#configurator-options > dl > :nth-child(5) > .input-box > input").wait(500).type(data.produkt)
        cy.get("#configurator-options > dl > :nth-child(8) > .input-box > input").wait(500).type(data.breite)
        cy.get("#configurator-options > dl > :nth-child(11) > .input-box > input").wait(500).type(data.hoehe)
        cy.get("#configurator-options > dl > :nth-child(14) > .input-box > input").wait(500).type(data.wunschlaenge)

        // input quantity 
        cy.get('#qty').clear().type('3')
        // cy.percySnapshot('13')

        //add to cart
        cy.get('.cart-container > button').click({ force: true })
    }
}