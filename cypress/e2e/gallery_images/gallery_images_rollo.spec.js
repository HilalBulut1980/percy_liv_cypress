describe('Integration test with visual testing - image popups Rollo-Konfigurator', function () {



    it('percy snapshots of product picture galleries - PDP', function () {

        cy.visit('/rollo/blackout-reflex-3517')
        cy.wait('@js_minify')
        cy.checkFreshChat()

        cy.get('#big-img').click()
        cy.percySnapshot('1st popup image of blackout-reflex-3517')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('2nd popup image of blackout-reflex-3517')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('3rd popup image of blackout-reflex-3517')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('4th popup image of blackout-reflex-3517')

    })


    it('percy snapshots of product picture galleries - Konfigurator', function () {

        cy.visit('/rollo/rollo-konfigurator')
        cy.checkFreshChat()

        cy.get('.images a').first().click({ force: true })
        cy.percySnapshot('1st popup image of Rollo-Konfigurator')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('2nd popup image of Rollo-Konfigurator')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('4th popup image of Rollo-Konfigurator')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('5th popup image of Rollo-Konfigurator')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('6th popup image of Rollo-Konfigurator')

    })
})