let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - raffrollo configurator', function () {

    beforeEach(function () {

        cy.visit('/raffrollo/raffrollo-konfigurator')
    })

    it('rechteckige Raffrollos', function () {

        // ******************* Startseite Raffrollo Konfigurator *******************
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));  
        cy.checkFreshChat()
        
        cy.percySnapshot('Raffrollo Konfigurator')

        // ******************* Raffrollo-Farbe & Eigenschaften wählen *******************
        cy.get('.configurator-button-subsection').click()
        cy.percySnapshot('Raffrollo - Stoff ändern')

        // ******************* Raffrollo - an der Wand *******************
        cy.get('div[options-property="befestigung"] > ul > :nth-child(1)').click()
        cy.percySnapshot('Raffrollo - an der Wand')

        // ******************* Raffrollo - an der Decke *******************
        cy.get('div[options-property="befestigung"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Raffrollo - an der Decke')

        // ******************* Raffrollo - Fensterflügel *******************
        cy.get('div[options-property="befestigung"] > ul > :nth-child(3)').click()
        cy.percySnapshot('Raffrollo - Fensterflügel')      

        // ******************* Raffrollo - Klemmträger *******************
        cy.get('div[options-property="befestigung"] > ul > :nth-child(4)').click()
        cy.percySnapshot('Raffrollo - Klemmträger')

        // ******************* Raffrollo - Kette transparent ******************* 
        cy.get('div[options-property="farbeKette"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Raffrollo - Kunststoffkette transparent')

        // ******************* Raffrollo - Kette grau ******************* 
        cy.get('div[options-property="farbeKette"] > ul > :nth-child(3)').click()
        cy.percySnapshot('Raffrollo - Kunststoffkette grau')

        // ******************* Raffrollo - Metallkette ******************* 
        cy.get('div[options-property="ketteMaterial"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Raffrollo - Metallkette')

        // ******************* Raffrollo - Metallkette Bedienseite rechts******************* 
        cy.get('div[options-property="bedienseite"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Raffrollo - Bedienseite rechts')
    })
})
