var data =
{
    "bestellnummer": "200000001",
    "breite": "1500",
    "hoehe": "2200",
    "kuerzung": "1200",
    "produkt": "Ambience 1357",
}

module.exports = {

    configure_service_breiteKuerzen: function configure_service_breiteKuerzen() {

        //load service page
        cy.visit('/aenderungsauftrag-breite')

        // input of data
        cy.get("#configurator-options > dl > :nth-child(2) > .input-box > input").wait(500).type(data.bestellnummer)
        cy.get("#configurator-options > dl > :nth-child(5) > .input-box > input").wait(500).type(data.produkt)
        cy.get("#configurator-options > dl > :nth-child(8) > .input-box > input").wait(500).type(data.breite)
        cy.get("#configurator-options > dl > :nth-child(11) > .input-box > input").wait(500).type(data.hoehe)
        cy.get("#configurator-options > dl > :nth-child(14) > .input-box > input").wait(500).type(data.kuerzung)

        // input quantity 
        cy.get('#qty').clear().type('2')
        // cy.percySnapshot('12')

        //add to cart
        cy.get('.cart-container > button').click({ force: true })
    }
}