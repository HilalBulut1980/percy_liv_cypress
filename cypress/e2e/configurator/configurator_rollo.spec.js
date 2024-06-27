let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - rollo configurator', function () {

    beforeEach(function () {

        cy.visit('/rollo/rollo-konfigurator')

    })

    it('rechteckige Rollos - ohne Kassette', function () {

        cy.wait('@js_minify') // js-files will be called only once

        // ******************* ohne Kassette - verschraubt am Fensterflügel *******************
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()


        cy.percySnapshot('Rollo - ohne Kassette')

        // ******************* Rollo-Farbe & Eigenschaften wählen *******************
        cy.get('.configurator-button-subsection').click()
        // cy.wait(2000)
        cy.percySnapshot('Rollo - oK - Stoff ändern')

        // ******************* ohne Kassette - an der Wand *******************
        cy.get('div[options-property="befestigung"] > ul > :nth-child(3)').click()
        // cy.wait(2000)
        cy.percySnapshot('Rollo - oK - an der Wand')

        // ******************* ohne Kassette - an der Decke *******************
        cy.get('div[options-property="befestigung"] > ul > :nth-child(4)').click()
        // cy.wait(2000)
        cy.percySnapshot('Rollo - oK - an der Decke')

        // ******************* ohne Kassette - Klemmträger *******************
        cy.get('div[options-property="befestigung"] > ul > :nth-child(2)').click()
        // cy.wait(2000)
        cy.percySnapshot('Rollo - oK - Klemmträger')

        // ******************* Halterung Metall ******************* --> RM32 Metall --> weitere Volanttypen somit sichtbar
        cy.get('div[options-property="halterungMaterial"] > :nth-child(3) > :nth-child(2)').click()
        // cy.wait(2000)
        cy.percySnapshot('Rollo - oK - Metallhalterung')

        // ******************* ohne Kassette - Aluleiste rund *******************
        cy.get('div[options-property="volant"] > ul > :nth-child(2)').click()
        // cy.wait(2000)
        cy.percySnapshot('Rollo - oK - Aluleiste rund')

        // ******************* ohne Kassette - Aluleiste flach *******************
        cy.get('div[options-property="volant"] > ul > :nth-child(3)').click()
        // cy.wait(2000)
        cy.percySnapshot('Rollo - oK - Aluleiste flach')

        // ******************* ohne Kassette - kein Volant *******************
        cy.get('div[options-property="volant"] > ul > :nth-child(1)').click() //kein Volant wählen, damit Pendelsicherung (30,00 eur) sichtbar wird
        // cy.wait(2000)
        cy.percySnapshot('Rollo - oK - kein Volant')

        // ******************* ohne Kassette - mit Pendelsicherung *******************
        cy.get('div[options-property="pendelsicherung"] > ul > :nth-child(2)').click()
        // cy.wait(2000)
        cy.percySnapshot('Rollo - oK - mit Pendelsicherung (30,00)')

        // ******************* Halterung Kunststoff ******************* --> RM32 Kunststoff --> damit Pendelsicherung (6,00 eur) sichtbar wird
        cy.get('div[options-property="halterungMaterial"] > :nth-child(3) > :nth-child(1)').click()
        // cy.wait(2000)
        cy.percySnapshot('Rollo - oK - mit Pendelsicherung (8,00)')

        // ******************* ohne Kassette - mit Motorbedienung *******************
        cy.get('div[options-property="bedienung"] > ul > :nth-child(2)').click()
        // cy.wait(2000)
        cy.percySnapshot('Rollo - oK - mit Motorbedienung')
    })

    it('rechteckige Rollos - mit Kassette', function () {


        // ******************* mit Kassette - verschraubt am Fensterflügel*******************
        cy.get('div[options-property="kassette"] > ul > :nth-child(2)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()


        cy.percySnapshot('Rollo - mit Kassette')

        // ******************* Rollo-Farbe & Eigenschaften wählen *******************
        cy.get('.configurator-button-subsection').click()
        cy.percySnapshot('Rollo - mK - Stoff ändern')

        // ******************* ohne Kassette - mit Motorbedienung *******************
        cy.get('div[options-property="bedienung"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Rollo - mK - mit Motorbedienung')
    })

    it('Mini-Rollos - LUX', function () {


        // ******************* Mini-Rollo wählen *******************
        cy.get('.tab_description').contains('Mini-Rollos').click({ force: true })
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));


        cy.percySnapshot('Mini-Rollo - LUX')

        // ******************* Mini-Rollo-Farbe & Eigenschaften wählen *******************
        cy.get('.configurator-button-subsection').click()
        cy.percySnapshot('Mini-Rollo - LUX: Stoff ändern')

        // ******************* MINI-LUX wählen *******************
        cy.get('div[options-property="rollotyp"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Mini-Rollo - MINI-LUX')

        // ******************* MINI-LUX: Führungsschiene wählen *******************
        cy.get('div[options-property="fuehrungsschiene"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Mini-Rollo - MINI-LUX: Führunsgschiene')

        // ******************* MINI-LUX: mit Klebeband am Fensterflügel *******************
        cy.get('div[options-property="befestigung"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Mini-Rollo - MINI-LUX: Klebeband')

        // ******************* MINI-LUX: Bedienseite rechts *******************
        cy.get('div[options-property="bedienseite"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Mini-Rollo - MINI-LUX: Bedienseite rechts')

        // ******************* MINI-LUX: Metallkette *******************
        cy.get('div[options-property="bedienungFabric"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Mini-Rollo - MINI-LUX: Metallkette')

        // ******************* MINI-LUX: kostenpflichtige Farbauswahl *******************
        cy.get('div[options-property="farbeKassette"] > ul > :nth-child(7)').click({ force: true })
        cy.percySnapshot('Mini-Rollo - MINI-LUX: Kassettenfarbe mahagoni')
    })

    it('Dachfensterrollos', function () {


        // ******************* Dachfenster-Rollos wählen *******************
        cy.get('.tab_description').contains('Dachfensterrollos').click({ force: true })
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()


        cy.percySnapshot('Dachfensterrollos')


        // ******************* Rollo-Farbe & Eigenschaften wählen *******************
        cy.get('.configurator-button-subsection').click()
        cy.percySnapshot('DF-Rollo - Stoff ändern')

        // ******************* Dachfenster-Rollos Velux + anderes Produkt *******************
        cy.get('span').contains('Velux').click()
        cy.get('.dfselect_wrapper > :nth-child(1) select').should('be.enabled').select('anderes Produkt').wait(1000)
        cy.percySnapshot('DF-Rollo - Velux - anderes Produkt')

        // ******************* Dachfenster-Rollos Velux + anderer Typ *******************
        cy.get('.dfselect_wrapper > :nth-child(1) select').should('be.enabled').select('GDL')
        cy.get('.dfselect_wrapper > :nth-child(2) select').should('be.enabled').select('anderer Typ').wait(1000)
        cy.percySnapshot('DF-Rollo - Velux - anderer Typ')

        // ******************* Dachfenster-Rollos Roto *******************
        cy.get('#hersteller > ul > :nth-child(2)').click()
        cy.percySnapshot('DF-Rollo - Roto')

        // ******************* Dachfenster-Rollos Fakro *******************
        cy.get('#hersteller > ul > :nth-child(3)').click()
        //if Fakro is selected slection 'Produkt' sholud be enabled before snaphot is taken
        cy.get('.dfselect_wrapper > :nth-child(1) select').should('be.enabled')
        cy.percySnapshot('DF-Rollo - Fakro')

        // ******************* Dachfenster-Rollos Anderer Hersteller *******************
        cy.get('#hersteller > ul > :nth-child(4)').click()
        cy.percySnapshot('DF-Rollo - Anderer Hersteller')

        // ******************* Dachfenster-Rollos - Bedienstab *******************
        cy.get('div[options-property="bedienstab"] > ul > :nth-child(2)').click()
        cy.percySnapshot('DF-Rollo - Bedienstab')
    })
})
