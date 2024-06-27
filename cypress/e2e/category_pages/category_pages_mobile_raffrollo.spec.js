
import "cypress-real-events/support";


describe('Integration test with visual testing - simulated mobile testing on raffrollo category page', function () {

    it('mobile testing on raffrollo category page', function () {

        // cy.viewport() does not really work on percy at first sight 
        // but needed for the mobile testing, e.g. for view of mobile PDP, tool tip, mobile tip etc.
        cy.viewport('samsung-s10')

        // load category page
        cy.visit('/raffrollo/raffrollo-beige')
        cy.checkFreshChat()

        cy.percySnapshot('mobile view: /raffrollo/raffrollo-beige', { widths: [375] })

        // activate tooltip of Zadar 9021
        cy.get('img[alt="Zadar 9021"]').click()

        // wait till all  mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 4)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('active tooltip: Zadar 9021', { widths: [375] })

        // deactivate tooltip of Zadar 9021
        cy.get('div.tooltip.active').click()
        cy.percySnapshot('inactive tooltip: Zadar 9021', { widths: [375] })

        // activate tooltip of Dillio 9071
        cy.get('img[alt="Dillio 9071"]').click()

        // wait till all 4 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 4)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('active tooltip: Dillio 9071', { widths: [375] })

        // deactivate tooltip of Dillio 9071
        cy.get('div.tooltip.active').click()
        cy.percySnapshot('inactive tooltip: Dillio 9071', { widths: [375] })

        // activate tooltip of Cocco 9010
        cy.get('img[alt="Cocco 9010"]').click()

        // wait till all 4 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 4)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('active tooltip: Cocco 9010', { widths: [375] })

        // go to mobile configurator of  Cocco 9010
        cy.get('div.tooltip.active').find('.mobile_tip_content').click()

        // new page will be loaded
        // cy.wait('@lazyload') // does not help instead of be.visible
        cy.checkFreshChat()

        // wait till all 2 gallery images are present
        cy.get('.more-views li')
            .should('have.length', 2)
            .each(($li) => { // iterate through each child of li
                cy.wrap($li).find('img').should('be.visible')
            })

        // wait till main image is visible
        cy.get('#main-image').should('be.visible')

        // take snapshot of mobile configurator
        cy.percySnapshot('mobile plissee configurator with Cocco 9010', { widths: [375] })
    })
})