describe('Integration test with visual testing - image popups Basisplissee-Konfigurator', function () {

    it('percy snapshots of product picture galleries - PDP', function () {

        // Basisplissee-Testcases deactivated  --> LIV-5532
        // cy.visit('/plissee/loreto-4363')
        // cy.wait('@js_minify')
        // cy.wait('@widget')
        // cy.checkFreshChat()

        // cy.get('#big-img').click()
        // cy.percySnapshot('1st popup image of loreto-4363')

        // cy.get('#img-popup-next').click()
        // cy.percySnapshot('2nd popup image of loreto-4363')

        // cy.get('#img-popup-next').click()
        // cy.percySnapshot('3rd popup image of loreto-4363')

        // cy.get('#img-popup-next').click()
        // cy.percySnapshot('4th popup image of loreto-4363')

    })

    it('percy snapshots of product picture galleries - Konfigurator', function () {

        // cy.visit('/plissee/basis-plissee-konfigurator')
        // cy.checkFreshChat()

        // cy.get('.images a').first().click({ force: true })
        // cy.percySnapshot('1st popup image of Basisplissee-Konfigurator')

        // cy.get('#img-popup-next').click()
        // cy.percySnapshot('2nd popup image of Basisplissee-Konfigurator')

        // cy.get('#img-popup-next').click()
        // cy.percySnapshot('3rd popup image of Basisplissee-Konfigurator')

    })
})