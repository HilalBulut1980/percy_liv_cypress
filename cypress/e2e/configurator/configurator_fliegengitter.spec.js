let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - Fliegengitter configurator', function () {


    it('Fliegengitter', function () {

        // ******************* Fliegengitter - Farbe Weiß *******************
        cy.visit("/insektenschutz/fliegengitter")
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));  
        cy.checkFreshChat()
        
        cy.percySnapshot('Fliegengitter: Farbe Weiß')

        // ******************* Fliegengitter - Farbe Anthrazit *******************
        cy.get('#options-list-color').children().contains('Anthrazit').click()
        cy.percySnapshot('Fliegengitter: Farbe Anthrazit')

        // ******************* Fliegengitter - Farbe Braun *******************
        cy.get('#options-list-color').children().contains('Braun').click()
        cy.percySnapshot('Fliegengitter: Farbe Braun')

        // ******************* Fliegengitter - Farbe Mooreiche *******************
        cy.get('#options-list-color').children().contains('Mooreiche').click()
        cy.percySnapshot('Fliegengitter: Farbe Mooreiche')

        // ******************* Fliegengitter - Farbe Walnuss *******************
        cy.get('#options-list-color').children().contains('Walnuss').click()
        cy.percySnapshot('Fliegengitter: Farbe Walnuss')

        // ******************* Fliegengitter - Farbe Goldeiche *******************
        cy.get('#options-list-color').children().contains('Goldeiche').click()
        cy.percySnapshot('Fliegengitter: Farbe Goldeiche')

        // ******************* Fliegengitter - Farbe Winchester *******************
        cy.get('#options-list-color').children().contains('Winchester').click()
        cy.percySnapshot('Fliegengitter: Farbe Winchester')
    })
})
