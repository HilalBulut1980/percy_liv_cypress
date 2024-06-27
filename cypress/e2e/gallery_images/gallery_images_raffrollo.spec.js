describe('Integration test with visual testing - image popups Raffrollo-Konfigurator', function () {



    it('percy snapshots of product picture galleries - PDP', function () {

        cy.visit('/raffrollo/grada-9236')

        cy.wait('@js_minify')
        cy.checkFreshChat()

        cy.get('#big-img').click()
        cy.percySnapshot('1st popup image of grada-9236')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('2nd popup image of grada-9236')

    })


    it('percy snapshots of product picture galleries - Konfigurator', function () {

        cy.visit('/raffrollo/raffrollo-konfigurator')
        cy.checkFreshChat()

        cy.get('.images a').first().click({ force: true })
        cy.percySnapshot('1st popup image of Raffrollo-Konfigurator')

    })
})