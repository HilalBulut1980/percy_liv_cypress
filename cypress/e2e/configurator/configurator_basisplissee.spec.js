let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - basis-plissee configurator', function () {

    //DEACTIVATED --> LIV-5532 --> REAKTIVIERT LIV-5697

    beforeEach(function () {

        cy.visit('/plissee/basis-plissee-konfigurator')
    })

    it('Basis-Plissee - VS2', function () {

        // ******************* VS2 *******************
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()

        cy.percySnapshot('Basis-Plissees VS2 - Konfigurator')

        // select Befestigung Klebeleiste --> bei Klebeleiste 
        cy.get('#befestigungstyp > ul > li').contains('Montage mit Klebeleisten direkt auf der Scheibe').click()
        cy.percySnapshot('Basis-Plissees VS2 - Klebeleisten')
    })

    it('Basis-Plissee - VS1', function () {

        // ******************* VS1 *******************
        cy.get('div[options-property="plisseetypTabs"] > ul > :nth-child(1)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()

        cy.percySnapshot('Basis-Plissees VS1 - Konfigurator')
    })

    it('Basis-Plissee - Dachfenster1', function () {

        // ******************* Dachfenster1 *******************
        cy.get('div[options-property="plisseetypTabs"] > ul > :nth-child(3)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()

        cy.percySnapshot('Basis-Plissees DF1 - Konfigurator')

        // select manuelle Eingabe
        cy.get('div[options-property="dfswitch"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Basis-Plissees DF1 - Manuelle Eingabe')

    })

    it('Basis-Plissee - Dachfenster2', function () {

        // ******************* Dachfenster1 *******************
        cy.get('div[options-property="plisseetypTabs"] > ul > :nth-child(4)').click({ force: true })
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()

        cy.percySnapshot('Basis-Plissees DF2 - Konfigurator')

        // select manuelle Eingabe
        cy.get('div[options-property="dfswitch"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Basis-Plissees DF2 - Manuelle Eingabe')
    })
});