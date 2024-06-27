describe('Integration test with visual testing - image popups Zubehör', function () {

    it('percy snapshots of product picture galleries - wandwinkel', function () {

        cy.visit('/wandwinkel')
        cy.wait('@js_minify')
        cy.checkFreshChat()

        cy.get('#big-img').click()
        cy.percySnapshot('1st popup image of wandwinkel')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('2nd popup image of wandwinkel')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('3rd popup image of wandwinkel')



    })

    it('percy snapshots of product picture galleries - gelenkklebeplatten', function () {


        cy.visit('/gelenkklebeplatten')
        cy.wait('@js_minify')
        cy.checkFreshChat()

        cy.get('#big-img').click()
        cy.percySnapshot('1st popup image of gelenkklebeplatten')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('2nd popup image of gelenkklebeplatten')

        cy.get('#img-popup-next').click()
        cy.percySnapshot('3rd popup image of gelenkklebeplatten')
    })
})