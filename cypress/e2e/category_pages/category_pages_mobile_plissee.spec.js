
import "cypress-real-events/support";


describe('Integration test with visual testing - simulated mobile testing on plissee category page', function () {

    it('mobile testing on plissee category page', function () {

        // cy.viewport() does not really work on percy at first sight 
        // but needed for the mobile testing, e.g. for view of mobile PDP, tool tip, mobile tip etc.
        cy.viewport('samsung-s10')

        // load category page
        cy.visit('/plissee/plissee-rot')
        cy.checkFreshChat()

        cy.percySnapshot('mobile view: /plissee/plissee-rot', { widths: [375] })

        cy.wait('@js_minify')

        // activate tooltip of Ambience 4477 Rot
        cy.get('img[alt="Plissee Ambience 4477 Rot"]').click()

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('active tooltip: Ambience 4477 Rot', { widths: [375] })

        // deactivate tooltip of Ambience 4477 Rot
        cy.get('div.tooltip.active').click()
        cy.percySnapshot('inactive tooltip: Ambience 4477 Rot', { widths: [375] })

        // activate tooltip of Color Breeze 4678
        cy.get('img[alt="Color Breeze 4678"]').click()

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('active tooltip: Color Breeze 4678', { widths: [375] })

        // deactivate tooltip of Wabe Bella 2082
        cy.get('div.tooltip.active').click()
        cy.percySnapshot('inactive tooltip: Color Breeze 4678', { widths: [375] })

        // activate tooltip of Wabe Glow 2161
        cy.get('img[alt="Wabe Glow 2161"]').click()

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('active tooltip: Wabe Glow 2161', { widths: [375] })

        // go to mobile configurator of Wabe Glow 2161
        cy.get('div.tooltip.active').find('.mobile_tip_content').click()

        // new page will be loaded
        cy.checkFreshChat()

        // wait till all 8 gallery images are present
        cy.get('.more-views li')
            .should('have.length', 10)
            .each(($li) => { // iterate through each child of li
                cy.wrap($li).find('img').should('be.visible')
            })

        // wait till main image is visible
        cy.get('#main-image').should('be.visible')

        // take snapshot of mobile configurator
        cy.percySnapshot('mobile plissee configurator with Wabe Glow 2161', { widths: [375] })
    })
})