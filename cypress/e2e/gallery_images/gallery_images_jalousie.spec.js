describe('Integration test with visual testing - gallery images Jalousie-Konfigurator', function () {

    beforeEach(function () {

        cy.visit('/jalousie/jalousie-konfigurator')
        cy.checkFreshChat()
    })

    it('percy snapshots of product picture galleries - jalousie 16 mm', function () {

        cy.get('.blinds-type > ul > :nth-child(1)').click()

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(1) > .img-responsive').click({ force: true })
        cy.percySnapshot('1st image of Jalousie-Konfigurator gallery 16 mm')

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(2) > .img-responsive').click({ force: true })
        cy.percySnapshot('2nd image of Jalousie-Konfigurator gallery 16 mm')

    })

    it('percy snapshots of product picture galleries - Jalousie 25 mm', function () {

        cy.get('.blinds-type > ul > :nth-child(2)').click()

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(1) > .img-responsive').click({ force: true })
        cy.percySnapshot('1st image of Jalousie-Konfigurator gallery 25 mm')

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(2) > .img-responsive').click({ force: true })
        cy.percySnapshot('2nd image of Jalousie-Konfigurator gallery 25 mm')

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(3) > .img-responsive').click({ force: true })
        cy.percySnapshot('3rd image of Jalousie-Konfigurator gallery 25 mm')

    })

    it('percy snapshots of product picture galleries - Jalousie 50 mm', function () {

        cy.get('.blinds-type > ul > :nth-child(3)').click()

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(1) > .img-responsive').click({ force: true })
        cy.percySnapshot('1st image of Jalousie-Konfigurator gallery 50 mm')

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(2) > .img-responsive').click({ force: true })
        cy.percySnapshot('2nd image of Jalousie-Konfigurator gallery 50 mm')

    })
})