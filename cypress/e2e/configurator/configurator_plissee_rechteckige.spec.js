let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - plissee configurator rechteckige Fenster', function () {

    beforeEach(function () {

        cy.visit('/plissee/plissee-konfigurator')
    })


    it('Plissee - rechteckige Plissees', function () {

        // ******************* rechteckige Fenster *******************
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()

        // select weitere Modelle
        cy.get('div[options-property="plisseetyp"] > div').click()

        // preselected type is VS2
        cy.percySnapshot('rechteckige Plissees - VS2')

        // --------------------------------------------------------------------------------------------------

        // select VS1
        cy.contains(new RegExp("^VS1\\s*$")).click()
        cy.percySnapshot('rechteckige Plissees - VS1')

        // --------------------------------------------------------------------------------------------------

        // select VS3
        cy.contains(new RegExp("^VS3\\s*$")).click()
        cy.percySnapshot('rechteckige Plissees - VS3')

        // --------------------------------------------------------------------------------------------------

        // select VS3 SD
        cy.contains(new RegExp("^VS3 SD\\s*$")).click()
        cy.percySnapshot('rechteckige Plissees - VS3 SD')

        // --------------------------------------------------------------------------------------------------

        // select Bedienstab
        cy.get('div[options-property="bedienstab"] > ul > :nth-child(2)').click()
        cy.percySnapshot('rechteckige Plissees - Bedienstab')

        // --------------------------------------------------------------------------------------------------

        // select F1
        cy.contains(new RegExp("^F1\\s*$")).click()
        cy.percySnapshot('rechteckige Plissees - F1')

        // --------------------------------------------------------------------------------------------------

        // select F3
        cy.contains(new RegExp("^F3\\s*$")).click()
        cy.percySnapshot('rechteckige Plissees - F3')

        // --------------------------------------------------------------------------------------------------

        // select F5
        cy.contains(new RegExp("^F5\\s*$")).click()
        cy.percySnapshot('rechteckige Plissees - F5')

        // --------------------------------------------------------------------------------------------------

        // select FK
        cy.contains(new RegExp("^FK\\s*$")).click()
        cy.percySnapshot('rechteckige Plissees - FK')

        // select Pendelsicherung
         cy.get('div[options-property="pendelsicherung"] > ul > :nth-child(2)').click()
         cy.percySnapshot('rechteckige Plissees - Pendelsicherung')        
    })
})