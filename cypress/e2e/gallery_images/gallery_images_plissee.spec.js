describe('Integration test with visual testing - image popups Plissee-Konfigurator', function () {

    it('percy snapshots of product picture galleries - PDP', function () {

        cy.visit('/plissee/basis-object-1504')

        cy.wait('@js_minify')
        cy.checkFreshChat()

        cy.get('#big-img').click()
        cy.percySnapshot('1st popup image of basis-object-1504')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('2nd popup image of basis-object-1504')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('3rd popup image of basis-object-1504')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('4th popup image of basis-object-1504')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('5th popup image of basis-object-1504')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('6th popup image of basis-object-1504')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('7th popup image of basis-object-1504')
    })

    it('percy snapshots of product picture galleries - Konfigurator', function () {

        cy.visit('/plissee/plissee-konfigurator')
        cy.checkFreshChat()

        cy.get('.images a').first().click({ force: true })
        cy.percySnapshot('1st popup image of Plissee-Konfigurator')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('2nd popup image of Plissee-Konfigurator')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('3rd popup image of Plissee-Konfigurator')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('4th popup image of Plissee-Konfigurator')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('5th popup image of Plissee-Konfigurator')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('6th popup image of Plissee-Konfigurator')

    })
})