let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - jalousie configurator', function () {

    beforeEach(function () {

        cy.visit('/jalousie/holz-jalousie-konfigurator')
    })

    it('Holzjalousie - 25mm', function () {

        // ******************* Holzjalousie 25mm *******************
        cy.get('.blinds-type > ul > :nth-child(1)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));  
        cy.checkFreshChat()
        
        cy.percySnapshot('Holzjalousie 25mm')

        // ******************* Holzjalousie 25mm - Kugelkette - Kunststoff *******************
        cy.get('div[options-property="bedienung"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Holzjalousie 25mm - Kugelkette - Kunststoff')

        // ******************* Holzjalousie 25mm - Kugelkette - Metall *******************
        cy.get('div[options-property="bedienung"] > ul > :nth-child(3)').click()
        cy.percySnapshot('Holzjalousie 25mm - Kugelkette - Metall')

        // ******************* Holzjalousie 25mm - In der Fensternische *******************
        cy.get('div[options-property="befestigung"] > ul').children().contains('In der Fensternische').click()
        cy.percySnapshot('Holzjalousie 25mm - In der Fensternische')

        // ******************* Holzjalousie 25mm - In der Fensternische *******************
        cy.get('div[options-property="befestigung"] > ul').children().contains('An der Mauer oder Decke').click()
        cy.percySnapshot('Holzjalousie 25mm - An der Mauer oder Decke')
    })

    it('Holzjalousie - 50mm', function () {

        // ******************* Holzjalousie - 50mm *******************
        cy.get('.blinds-type > ul > :nth-child(2)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));  
        cy.checkFreshChat()

        cy.percySnapshot('Holzjalousie - 50mm')

        // ******************* Holzjalousie - 50mm - Kugelkette - Metall *******************
        cy.get('div[options-property="bedienung"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Holzjalousie - 50mm - Kugelkette - Metall')

        // ******************* Holzjalousie 50mm - Leiterband *******************
        cy.get('div[options-property="lamellenverbindung"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Holzjalousie 50mm - Leiterband')
    })

    it('Holzjalousie 70mm', function () {

        // ******************* Holzjalousie 70mm *******************
        cy.get('.blinds-type > ul > :nth-child(3)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));  
        cy.checkFreshChat()

        cy.percySnapshot('Holzjalousie 70mm')

        // ******************* Holzjalousie 70mm - Leiterband *******************
        cy.get('div[options-property="lamellenverbindung"] > ul > :nth-child(2)').click()
        cy.percySnapshot('Holzjalousie 70mm - Leiterband')
    })
})
