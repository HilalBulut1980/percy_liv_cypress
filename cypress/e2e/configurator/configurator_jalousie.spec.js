let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - jalousie configurator', function () {

    beforeEach(function () {

        cy.visit('/jalousie/jalousie-konfigurator')
    })

    it('Jalousie - 16mm', function () {

        // ******************* Jalousie 16mm *******************
        cy.get('.blinds-type > ul > :nth-child(1)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));  
        cy.checkFreshChat()
        
        cy.percySnapshot('Jalousie 16mm')

        // ******************* Jalousie 16mm - Kugelkette - Kunststoff *******************
        cy.get('.bedienung > ul > :nth-child(2)').click()
        cy.percySnapshot('Jalousie 16mm - Kugelkette - Kunststoff')

        // ******************* Jalousie 16mm - Kugelkette - Metall *******************
        cy.get('.bedienung > ul > :nth-child(3)').click()
        cy.percySnapshot('Jalousie 16mm - Kugelkette - Metall')

        // ******************* Jalousie 16mm - In der Fensternische *******************
        cy.get('div[options-property="befestigung"] > ul').children().contains('In der Fensternische').click()
        cy.percySnapshot('Jalousie 16mm - In der Fensternische')

        // ******************* Jalousie 16mm - In der Fensternische *******************
        cy.get('div[options-property="befestigung"] > ul').children().contains('An der Mauer oder Decke').click()
        cy.percySnapshot('Jalousie 16mm - An der Mauer oder Decke')
    })

    it('Jalousie - 25mm', function () {

        // ******************* Jalousie 25mm *******************
        cy.get('.blinds-type > ul > :nth-child(2)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));  
        cy.checkFreshChat()
        
        cy.percySnapshot('Jalousie 25mm')

        // ******************* Jalousie 25mm - Kugelkette - Kunststoff *******************
        cy.get('.bedienung > ul > :nth-child(2)').click()
        cy.percySnapshot('Jalousie 25mm - Kugelkette - Kunststoff')

        // ******************* Jalousie 25mm - Kugelkette - Metall *******************
        cy.get('.bedienung > ul > :nth-child(3)').click()
        cy.percySnapshot('Jalousie 25mm - Kugelkette - Metall')

        // ******************* Jalousie 25mm - In der Fensternische *******************
        cy.get('div[options-property="befestigung"] > ul').children().contains('In der Fensternische').click()
        cy.percySnapshot('Jalousie 25mm - In der Fensternische')

        // ******************* Jalousie 25mm - In der Fensternische *******************
        cy.get('div[options-property="befestigung"] > ul').children().contains('An der Mauer oder Decke').click()
        cy.percySnapshot('Jalousie 25mm - An der Mauer oder Decke')
    })

    it('Jalousie - 50mm', function () {

        // ******************* Jalousie 50mm *******************
        cy.get('.blinds-type > ul > :nth-child(3)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));  
        cy.checkFreshChat()

        cy.percySnapshot('Jalousie 50mm')

        // ******************* Jalousie 50mm - Kugelkette - Metall *******************
        cy.get('.bedienung > ul > :nth-child(2)').click()
        cy.percySnapshot('Jalousie 50mm - Kugelkette - Metall')
    })
})
