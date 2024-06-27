let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - Insektenschutzrollo configurator', function () {


    it('Insektenschutzrollo', function () {

        // ******************* Insektenschutzrollo - Hauswand *******************
        cy.visit("/insektenschutz/insektenschutz-rollo")
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));  
        cy.checkFreshChat()
        
        cy.percySnapshot('Insektenschutzrollo: Montage Hauswand')

        // ******************* Insektenschutzrollo - Mauer *******************
        cy.get('#configurator-options > :nth-child(3) > ul > :nth-child(3)').click({ force: true })
        cy.percySnapshot('Insektenschutzrollo: Mauer')

        // ******************* Insektenschutzrollo - Fensterrahmen *******************
        cy.get('#configurator-options > :nth-child(3) > ul > :nth-child(2)').click({ force: true })
        cy.percySnapshot('Insektenschutzrollo: Fensterrahmen')

        // ******************* Insektenschutzrollo - Klebemontage *******************
        cy.get('#configurator-options > :nth-child(3) > ul > :nth-child(3)').click({ force: true })
        cy.percySnapshot('Insektenschutzrollo: Klebemontage')

        // ******************* Insektenschutzrollo - Farbe Anthrazit *******************
        cy.get('#options-list-color').children().contains('Anthrazit').click()
        cy.percySnapshot('Insektenschutzrollo: Farbe Anthrazit')

        // ******************* Insektenschutzrollo - Farbe Braun *******************
        cy.get('#options-list-color').children().contains('Braun').click()
        cy.percySnapshot('Insektenschutzrollo: Farbe Braun')

        // ******************* Insektenschutzrollo - Farbe Eiche *******************
        cy.get('#options-list-color').children().contains('Eiche').click()
        cy.percySnapshot('Insektenschutzrollo: Farbe Eiche')

        // ******************* Insektenschutzrollo - Farbe Nuss *******************
        cy.get('#options-list-color').children().contains('Nuss').click()
        cy.percySnapshot('Insektenschutzrollo: Farbe Nuss')

        // ******************* Insektenschutzrollo - Farbe Winchester *******************
        cy.get('#options-list-color').children().contains('Winchester').click()
        cy.percySnapshot('Insektenschutzrollo: Farbe Winchester')
    })
})
