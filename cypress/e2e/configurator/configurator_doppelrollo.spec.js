let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - doppelrollo configurator', function () {

    beforeEach(function () {

        cy.visit('/doppelrollo/doppelrollo-konfigurator')
    })

    it('Doppelrollo Mini zum Klemmen', function () {

        // ******************* Doppelrollo Mini zum Klemmen *******************
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));  
        cy.checkFreshChat()
        
        cy.percySnapshot('Doppelrollo mini zum Klemmen')

        // ******************* Doppelrollo-Farbe & Eigenschaften wählen *******************
        cy.get('.configurator-button-subsection').click()
        cy.percySnapshot('Doppelrollo - mini - Stoff ändern')

        // ******************* Doppelrollo Verblendung weiß *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('weiß').click()
        cy.percySnapshot('Doppelrollo - mini - Verblendung weiß')

        // ******************* Doppelrollo Verblendung creme *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('creme').click()
        cy.percySnapshot('Doppelrollo - mini - Verblendung creme')

        // ******************* Doppelrollo Verblendung braun *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('braun').click()
        cy.percySnapshot('Doppelrollo - mini - Verblendung braun')

        // ******************* Doppelrollo Verblendung grau *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('grau').click({force: true})
        cy.percySnapshot('Doppelrollo - mini - Verblendung grau')

        // ******************* Doppelrollo Verblendung anthrazit *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('anthrazit').click({force: true})
        cy.percySnapshot('Doppelrollo - mini - Verblendung anthrazit')

        // ******************* Doppelrollo Verblendung schwarz *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('schwarz').click({ force: true })
        cy.percySnapshot('Doppelrollo - mini - Verblendung schwarz')

        // ******************* Doppelrollo Metall-Kugelkette *******************
        cy.get('div[options-property="bedienseite"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Doppelrollo - mini - Kugelkette rechts')
    })

    it('Doppelrollo Mini mit Kassette zum Kleben', function () {

        // ******************* Doppelrollo Mini mit Kassette zum Kleben *******************
        cy.get('#type-selector-top > ul > :nth-child(2)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));  
        cy.checkFreshChat()
        
        cy.percySnapshot('Doppelrollo mini mit Kassette zum Kleben')
    })

     it('Doppelrollo ohne Kassette', function () {

        // ******************* Doppelrollo ohne Kassette *******************
        cy.get('#type-selector-top > ul > :nth-child(3)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));  
        cy.checkFreshChat()
        
        cy.percySnapshot('Doppelrollo ohne Kassette')

        // ******************* Doppelrollo Verblendung weiß *******************
         cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('weiß').click()
         cy.percySnapshot('Doppelrollo - oK - Verblendung weiß')
 
         // ******************* Doppelrollo Verblendung creme *******************
         cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('creme').click()
         cy.percySnapshot('Doppelrollo - oK - Verblendung creme')
 
         // ******************* Doppelrollo Verblendung braun *******************
         cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('braun').click()
         cy.percySnapshot('Doppelrollo - oK - Verblendung braun')
 
         // ******************* Doppelrollo Verblendung grau *******************
         cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('grau').click({force: true})
         cy.percySnapshot('Doppelrollo - oK - Verblendung grau')
 
         // ******************* Doppelrollo Verblendung anthrazit *******************
         cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('anthrazit').click({force: true})
         cy.percySnapshot('Doppelrollo - oK - Verblendung anthrazit')
 
         // ******************* Doppelrollo Verblendung schwarz *******************
         cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('schwarz').click({ force: true })
         cy.percySnapshot('Doppelrollo - oK - Verblendung schwarz')

        // ******************* Doppelrollo Kugelkette rechts *******************
        cy.get('div[options-property="bedienseite"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Doppelrollo - oK - Kugelkette rechts')
    })

    it('Doppelrollo mit Kassette', function () {

        // ******************* Doppelrollo ohne Kassette *******************
        cy.get('#type-selector-top > ul > :nth-child(4)').click({ force: true })
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));  
        cy.checkFreshChat()
        
        cy.percySnapshot('Doppelrollo mit Kassette')

         // ******************* Doppelrollo Kassette weiß *******************
        cy.get('div[options-property="kassettenfarbe"] > ul').children().contains('weiß').click()
        cy.percySnapshot('Doppelrollo - mK - Kassette weiß')

        // ******************* Doppelrollo Kassette creme *******************
        cy.get('div[options-property="kassettenfarbe"] > ul').children().contains('creme').click()
        cy.percySnapshot('Doppelrollo - mK - Kassette creme')

        // ******************* Doppelrollo Kassette silber *******************
        cy.get('div[options-property="kassettenfarbe"] > ul').children().contains('silber').click()
        cy.percySnapshot('Doppelrollo - mK - Kassette silber')

        // ******************* Doppelrollo Kassette grau *******************
        cy.get('div[options-property="kassettenfarbe"] > ul').children().contains('grau').click({ force: true })
        cy.percySnapshot('Doppelrollo - mK - Kassette grau')

        // ******************* Doppelrollo Kassette anthrazit *******************
        cy.get('div[options-property="kassettenfarbe"] > ul').children().contains('anthrazit').click({ force: true })
        cy.percySnapshot('Doppelrollo - mK - Kassette anthrazit')

        // ******************* Doppelrollo Kassette schwarz *******************
        cy.get('div[options-property="kassettenfarbe"] > ul').children().contains('schwarz').click({ force: true })
        cy.percySnapshot('Doppelrollo - mK - Kassette schwarz')

        // ******************* Doppelrollo Kugelkette rechts*******************
        cy.get('div[options-property="bedienseite"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Doppelrollo - mK - Kugelkette rechts')
    })
})