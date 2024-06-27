let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - plissee configurator dachfenster', function () {

    beforeEach(function () {

        cy.visit('/plissee/plissee-konfigurator')
    })


    it('Plissee - Dachfensterplissees', function () {

        // ******************* Dachfensterplissees *******************
        // change to tab Dachfenster
        cy.get('.tabs > :nth-child(2)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()

        // preselected type is DF20 genormt 
        cy.percySnapshot('Dachfenster - DF20 genormt')

        // change to ungenormt
        cy.contains('Maße des Dachfenster manuell eingeben').click()
        cy.percySnapshot('Dachfenster - DF20 ungenormt')
        //reset to genormt
        cy.contains('Dachfenster auswählen').click()

        // --------------------------------------------------------------------------------------------------

        // select DF20 Comfort
        cy.contains(new RegExp("^DF20 Comfort\\s*$")).click()
        cy.percySnapshot('Dachfenster - DF20 Comfort genormt')

        // change to ungenormt
        cy.contains('Maße des Dachfenster manuell eingeben').click()
        cy.percySnapshot('Dachfenster - DF20 Comfort ungenormt')

        // --------------------------------------------------------------------------------------------------

        // select different falz types

        // 'Gerader Falz' is preselected 
        cy.contains('Gerader Falz').click()
        cy.percySnapshot('Dachfenster - Gerader Falz')

        //select 'Schräger Falz'
        cy.contains('Schräger Falz').click()
        cy.percySnapshot('Dachfenster - Schräger Falz')

        //select 'Schräger Falz'
        cy.contains('Schräger Falz mit Schattenfuge').click()
        cy.percySnapshot('Dachfenster - Schräger Falz mit Schattenfuge')

        //select 'Schräger Falz mit Aufsatz vor Glas'
        cy.contains('Schräger Falz mit Aufsatz vor Glas').click()
        cy.percySnapshot('Dachfenster - Schräger Falz mit Aufsatz vor Glas')

        // --------------------------------------------------------------------------------------------------

        // select Bedienstab
        cy.get('div[options-property="bedienstab"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Dachfenster - Bedienstab')
    })
})