describe('Integration test with visual testing - gallery images Holzjalousie-Konfigurator', function () {

    beforeEach(function () {

        cy.visit('/jalousie/holz-jalousie-konfigurator')
        cy.checkFreshChat()
    })

    it('percy snapshots of product picture galleries - holzjalousie 25 mm', function () {

        cy.get('.blinds-type > ul > :nth-child(1)').click()

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(1) > .img-responsive').click({ force: true })
        cy.percySnapshot('1st image of Holzjalousie-Konfigurator gallery 25 mm')

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(2) > .img-responsive').click({ force: true })
        cy.percySnapshot('2nd image of Holzjalousie-Konfigurator gallery 25 mm')

    })

    it('percy snapshots of product picture galleries - holzjalousie 50 mm', function () {

        cy.get('.blinds-type > ul > :nth-child(2)').click()
        cy.get('.gallery_jalousien_main_img > ul > :nth-child(1) > .img-responsive').click({ force: true })
        cy.percySnapshot('1st image of Holzjalousie-Konfigurator gallery 50 mm')

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(2) > .img-responsive').click({ force: true })
        cy.percySnapshot('2nd image of Holzjalousie-Konfigurator gallery 50 mm')

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(3) > .img-responsive').click({ force: true })
        cy.percySnapshot('3rd image of Holzjalousie-Konfigurator gallery 50 mm')

    })

    it('percy snapshots of product picture galleries - holzjalousie 70 mm', function () {

        cy.get('.blinds-type > ul > :nth-child(3)').click()

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(1) > .img-responsive').click({ force: true })
        cy.percySnapshot('1st image of Holzjalousie-Konfigurator gallery 70 mm')

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(2) > .img-responsive').click({ force: true })
        cy.percySnapshot('2nd image of Holzjalousie-Konfigurator gallery 70 mm')

    })
})