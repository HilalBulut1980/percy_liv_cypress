
describe('Integration test with visual testing - simulated mobile testing on doppelrollo category page', function () {

    it('mobile testing on doppelrollo category page', function () {

        // cy.viewport() does not really work on percy at first sight 
        // but needed for the mobile testing, e.g. for view of mobile PDP, tool tip, mobile tip etc.
        cy.viewport('samsung-s10')

        // load category page
        cy.visit('/doppelrollo/alle-doppelrollos')
        cy.checkFreshChat()

        cy.percySnapshot('mobile view: /doppelrollo/alle-doppelrollos', { widths: [375] })

        // activate tooltip of Rayure 5001
        cy.get('img[alt="Rayure 5001"]').click()

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 4)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('active tooltip: Rayure 5001', { widths: [375] })

        // deactivate tooltip of Rayure 5001
        cy.get('div.tooltip.active').click()
        cy.percySnapshot('inactive tooltip: Rayure 5001', { widths: [375] })

        // activate tooltip of Rayure 5005
        cy.get('img[alt="Rayure 5005"]').click()

        // wait till all 4 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 4)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('active tooltip: Rayure 5005', { widths: [375] })

        // deactivate tooltip of Rayure 5005
        cy.get('div.tooltip.active').click()
        cy.percySnapshot('inactive tooltip: Rayure 5005', { widths: [375] })

        // activate tooltip of Rayure 5004
        cy.get('img[alt="Doppelrollo 5004 "]').click()

        // wait till all 4 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 4)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('active tooltip: Rayure 5004 ', { widths: [375] })

        // go to mobile configurator of  Rayure 5004
        cy.get('div.tooltip.active').find('.mobile_tip_content').click()

        // new page will be loaded
        cy.checkFreshChat()

        // wait till all 5 gallery images are present
        cy.get('.more-views li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each child of li
                cy.wrap($li).find('img').should('be.visible')
            })

        // wait till main image is visible
        cy.get('#main-image').should('be.visible')

        // take snapshot of mobile configurator
        cy.percySnapshot('mobile plissee configurator with Rayure 5004', { widths: [375] })
    })
})