describe('Integration test with visual testing - image popups Doppelrollo-Konfigurator', function () {

    it('percy snapshots of product picture galleries - PDP', function () {

        cy.visit('/doppelrollo/remsa-5067')

        cy.wait('@js_minify')
        cy.checkFreshChat()

        cy.get('#big-img').click()
        cy.percySnapshot('1st popup image of remsa-5067')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('2nd popup image of remsa-5067')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('3rd popup image of remsa-5067')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('4th popup image of remsa-5067')

    })

    it('percy snapshots of product picture galleries - Konfigurator', function () {

        cy.visit('/doppelrollo/doppelrollo-konfigurator')
        cy.checkFreshChat()

        cy.get('.images a').last().click({ force: true })
        cy.percySnapshot('4th popup image of Doppelrollo-Konfigurator')

        cy.get('#img-popup-back').click()
        cy.percySnapshot('3rd popup image of Doppelrollo-Konfigurator')

        cy.get('#img-popup-back').click()
        cy.percySnapshot('2nd popup image of Doppelrollo-Konfigurator')

        cy.get('#img-popup-back').click()
        cy.percySnapshot('1st popup image of Doppelrollo-Konfigurator')

    })
})