let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - schiebegardinen configurator', function () {

    beforeEach(function () {

        cy.visit('/schiebegardinen/schiebegardinen-konfigurator')
    })

    it('Schiebegardine GS: einzelne Paneele', function () {

        // ******************* Schiebegardine GS: einzelne Paneele *******************
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()

        cy.percySnapshot('Schiebegardine EP')

        // ******************* Schiebegardine-Farbe & Eigenschaften wählen *******************
        cy.get('.configurator-button-subsection').click()
        cy.percySnapshot('Schiebegardine EP: Stoff ändern')

        // ******************* Einzelpaneel mit PW *******************
        cy.get('div[options-property="paneelwagen"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Schiebegardine EP: mit Paneelwagen')

        // ******************* Einzelpaneel mit PW grau *******************
        cy.get('div[options-property="farbeEndstabPaneelwagen"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Schiebegardine EP: mit Paneelwagen silber')

        // ******************* Einzelpaneel mit Beschwerungsstab *******************
        cy.get('div[options-property="endstab"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Schiebegardine EP: mit Beschwerungsstab')

        // ******************* Einzelpaneel mit Designprofil *******************
        cy.get('div[options-property="endstab"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Schiebegardine EP: mit Designprofil')
    })

    it('Schiebegardine Gesamtsystem', function () {

        // ******************* Schiebegardine Gesamtsystem *******************
        // cy.get('div[options-property="type"] > ul > :nth-child(2)').click()
        cy.contains('Schiebegardine mit Schienensystem').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.percySnapshot('Schiebegardine GS')

        // ******************* Schiebegardine GS: 1 Paneel (Mindestmaß) *******************
        cy.get('#breite_in_mm input').clear().type('300')
        cy.get('#hoehe_in_mm input').clear().type('300')
        // click out
        cy.get('h1').contains('Paneele anpassen').click()
        cy.percySnapshot('Schiebegardine GS: 1 Paneel')

        // ******************* Schiebegardine GS: 2 Paneele *******************
        cy.get('#breite_in_mm input').clear().type('551')
        cy.get('#hoehe_in_mm input').clear().type('2000')
        cy.percySnapshot('Schiebegardine GS: 2 Paneele')

        // ******************* Schiebegardine GS: 3 Paneele *******************
        cy.get('#breite_in_mm input').clear().type('2351')
        cy.get('#hoehe_in_mm input').clear().type('2000')
        cy.percySnapshot('Schiebegardine GS: 3 Paneele')

        // ******************* Schiebegardine GS: 4 Paneele *******************
        cy.get('#breite_in_mm input').clear().type('3501')
        cy.get('#hoehe_in_mm input').clear().type('2000')
        cy.percySnapshot('Schiebegardine GS: 4 Paneele')

        // ******************* Schiebegardine GS: 5 Paneele *******************
        cy.get('#breite_in_mm input').clear().type('4651')
        cy.get('#hoehe_in_mm input').clear().type('2000')
        cy.percySnapshot('Schiebegardine GS: 5 Paneele')

        // ******************* Schiebegardine GS: 6 Paneele *******************
        cy.get('#breite_in_mm input').clear().type('5801')
        cy.get('#hoehe_in_mm input').clear().type('2000')
        cy.percySnapshot('Schiebegardine GS: 6 Paneele')

        // ******************* Schiebegardine GS: 7 Paneele *******************
        cy.get('#breite_in_mm input').clear().type('5900')
        cy.get('#hoehe_in_mm input').clear().type('2000')
        cy.get('#paneelnumber input').clear().type('7')
        // click out
        cy.get('h1').contains('Paneele anpassen').click()
        cy.percySnapshot('Schiebegardine GS: 7 Paneele')

        // ******************* Schiebegardine GS: 8 Paneele *******************
        cy.get('#breite_in_mm input').clear().type('5900')
        cy.get('#hoehe_in_mm input').clear().type('2000')
        cy.get('#paneelnumber input').clear().type('8')
        // click out
        cy.get('h1').contains('Paneele anpassen').click()
        cy.percySnapshot('Schiebegardine GS: 8 Paneele')

        // ******************* Schiebegardine GS: Schienenlauf 3 *******************
        cy.get('#breite_in_mm input').clear().type('1400')
        cy.get('div[options-property="schienenlaeufe"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Schiebegardine GS: Schienenlauf 3')

        // ******************* Schiebegardine GS: Schienenlauf 4 *******************
        cy.get('#breite_in_mm input').clear().type('1750')
        cy.get('div[options-property="schienenlaeufe"] > ul > :nth-child(3)').click()
        cy.percySnapshot('Schiebegardine GS: Schienenlauf 4')

        // ******************* Schiebegardine GS: Schienenlauf 5 *******************
        cy.get('#breite_in_mm input').clear().type('2200')
        cy.get('div[options-property="schienenlaeufe"] > ul > :nth-child(4)').click()
        cy.percySnapshot('Schiebegardine GS: Schienenlauf 5')

        // ******************* Schiebegardine GS: Alugriff *******************
        cy.get('div[options-property="bediengriff"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Schiebegardine GS: Alugriff')

        // ******************* Schiebegardine GS: Kunststoffgriff *******************
        cy.get('div[options-property="bediengriff"] > ul > :nth-child(3)').click()
        cy.percySnapshot('Schiebegardine GS: Kunststoffgriff')
    })
})