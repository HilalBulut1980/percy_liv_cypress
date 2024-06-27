describe('Integration test with visual testing - image popups Schiebegardinen-Konfigurator', function () {

    it('percy snapshots of product picture galleries - PDP', function () {

        cy.visit('/schiebegardinen/philo-7324')

        cy.wait('@js_minify')
        cy.checkFreshChat()

        cy.get('#big-img').click()
        cy.percySnapshot('1st popup image of philo-7324')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('2nd popup image of philo-7324')

    })

    it('percy snapshots of product picture galleries - Konfigurator', function () {

        cy.visit('/schiebegardinen/schiebegardinen-konfigurator')
        cy.checkFreshChat()

        cy.get('.images a').first().click({ force: true })
        cy.percySnapshot('1st popup image of Schiebegardinen-Konfigurator') // only one image at configurator

        // cy.get('#img-popup-next').click()
        // cy.percySnapshot('2nd popup image of Schiebegardinen-Konfigurator')

        // cy.get('#img-popup-next').click()
        // cy.percySnapshot('3rd popup image of Schiebegardinen-Konfigurator')

        // cy.get('#img-popup-next').click()
        // cy.percySnapshot('4th popup image of Schiebegardinen-Konfigurator')

    })
})