var data =
{
    "produkt": "Broza 1889",
    "bestellnummer": "200000002",
    "schienenfarbe": "weiß",
    "breite": "1500",
    "hoehe": "1800",
    "wunschlaenge": "2300",
    "wunschseite": "beidseitig",
    "anmerkung": "Bitte die Schnur in angegebener Länge ändern. Lieben Dank! Meier"
}

module.exports = {

    configure_service_laengereSchnur: function configure_service_laengereSchnur() {

        //load service page
        cy.visit('/zusatzauftrag-laengere-fuehrungsschnuere')

        // input of data
        cy.get("#configurator-options > dl > :nth-child(2) > .input-box > input").wait(500).type(data.produkt)
        cy.get("#configurator-options > dl > :nth-child(5) > .input-box > input").wait(500).type(data.schienenfarbe)
        cy.get("#configurator-options > dl > :nth-child(8) > .input-box > input").wait(500).type(data.breite)
        cy.get("#configurator-options > dl > :nth-child(11) > .input-box > input").wait(500).type(data.hoehe)
        cy.get("#configurator-options > dl > :nth-child(14) > .input-box > input").wait(500).type(data.wunschlaenge)
        cy.get("#configurator-options > dl > :nth-child(16) > .input-box > select").wait(500).select(data.wunschseite)
        cy.get("#configurator-options > dl > .last > .input-box > textarea").wait(500).type(data.anmerkung)

        // input quantity 
        cy.get('#qty').clear().type('3')
        // cy.percySnapshot('15')

        //add to cart
        cy.get('.cart-container > button').click({ force: true })
    }
}