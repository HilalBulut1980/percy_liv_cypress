
describe('Integration test with visual testing - diverse submenus', function () {


    it('Visueller Test der vorhandenen aufklappbaren Submenus verschiedener Produktgruppen', function () {

        cy.visit('/')
        cy.checkFreshChat()

        //***************************************************
        //******************PLISSEE SUBMENU******************

        cy.get('.nav-primary.clearfix > :nth-child(1)').click()


        cy.get('#plissee-sub-menu > #colors > .menu-wrapper').invoke('show')
        cy.percySnapshot('Plissee-Menü: Plissee nach Farben')
        cy.reload()
        cy.checkFreshChat()


        cy.get('#plissee-sub-menu #rooms > .menu-wrapper').invoke('show')
        cy.percySnapshot('Plissee-Menü: Plissee für Räume')
        cy.reload()
        cy.checkFreshChat()


        cy.get('#plissee-sub-menu #characteristics > .menu-wrapper').invoke('show')
        cy.percySnapshot('Plissee-Menü: Plissee nach Eigenschaften')
        cy.reload()
        cy.checkFreshChat()


        cy.get('#plissee-sub-menu #guide > .menu-wrapper').invoke('show')
        cy.percySnapshot('Plissee-Menü: Ratgeber')
        cy.reload()
        cy.checkFreshChat()



        //***************************************************
        //******************ROLLO SUBMENU********************

        cy.get('.nav-primary.clearfix > :nth-child(2)').click()


        cy.get('#rollo-sub-menu > #colors > .menu-wrapper').invoke('show')
        cy.percySnapshot('Rollo-Menü: Rollo nach Farben')
        cy.reload()
        cy.checkFreshChat()


        cy.get('#rollo-sub-menu > #rooms > .menu-wrapper').invoke('show')
        cy.percySnapshot('Rollo-Menü: Rollo für Räume')
        cy.reload()
        cy.checkFreshChat()


        cy.get('#rollo-sub-menu > #characteristics > .menu-wrapper').invoke('show')
        cy.percySnapshot('Rollo-Menü: Rollo nach Eigenschaften')
        cy.reload()
        cy.checkFreshChat()


        cy.get('#rollo-sub-menu > #guide > .menu-wrapper').invoke('show')
        cy.percySnapshot('Rollo-Menü: Ratgeber')
        cy.reload()
        cy.checkFreshChat()



        //*******************************************************
        //******************DOPPELROLLO SUBMENU******************

        cy.get('.nav-primary.clearfix > :nth-child(3)').click()

        cy.get('#doppelrollo-sub-menu > #colors > .menu-wrapper').invoke('show')
        cy.percySnapshot('Doppelrollo-Menü: Doppelrollo nach Farben')
        cy.reload()
        cy.checkFreshChat()



        //****************************************************
        //******************VORHÄNGE SUBMENU******************

        // VORHÄNGE mit Percy nicht testbar, denn Seite enthält zu viele Ressourcen.
        //Fehlermeldung: "Exceeded the number of resources allowed in a single snapshot. Limit: 500. Given: 601."

        /*cy.get('.nav-primary.clearfix > :nth-child(6)').click()


        cy.get('#vorhaenge-sub-menu > :nth-child(1) > .menu-wrapper').invoke('show')
        cy.percySnapshot('Vorhänge-Menü: Vorhänge')

        cy.get('#vorhaenge-sub-menu > :nth-child(2) > .menu-wrapper').invoke('show')
        cy.percySnapshot('Vorhänge-Menü: Gardinen')

        cy.get('#vorhaenge-sub-menu > :nth-child(3) > .menu-wrapper').invoke('show')
        cy.percySnapshot('Vorhänge-Menü: Ösenschal')

        cy.get('#vorhaenge-sub-menu > :nth-child(4) > .menu-wrapper').invoke('show')
        cy.percySnapshot('Vorhänge-Menü: Schlaufenschal')

        cy.get('#vorhaenge-sub-menu > :nth-child(5) > .menu-wrapper').invoke('show')
        cy.percySnapshot('Vorhänge-Menü: Dekoschal')

        cy.get('#vorhaenge-sub-menu > :nth-child(8) > .menu-wrapper').invoke('show')
        cy.percySnapshot('Vorhänge-Menü: Zubehör')*/


        //***********************************************************
        //******************SCHIEBEGARDINEN SUBMENU******************

        cy.get('.nav-primary.clearfix > :nth-child(7)').click()

        cy.get('#schiebegardine-sub-menu > #colors > .menu-wrapper').invoke('show')
        cy.percySnapshot('Schiebegardinen-Menü: Schiebegardinen nach Farben')
        cy.reload()
        cy.checkFreshChat()


        cy.get('#schiebegardine-sub-menu > #characteristics > .menu-wrapper').invoke('show')
        cy.percySnapshot('Schiebegardinen-Menü: Schiebegardinen nach Eigenschaften')
        cy.reload()
        cy.checkFreshChat()


        //***********************************************************
        //******************RAFFROLLO SUBMENU******************

        cy.get('.nav-primary.clearfix > :nth-child(8)').click()


        cy.get('#raffrollo-sub-menu > #colors > .menu-wrapper').invoke('show')
        cy.percySnapshot('Raffrollo-Menü: Raffrollo nach Farben')
        cy.reload()
        cy.checkFreshChat()


        cy.get('#raffrollo-sub-menu > #rooms > .menu-wrapper').invoke('show')
        cy.percySnapshot('Raffrollo-Menü: Raffrollo für Räume')
        cy.reload()
        cy.checkFreshChat()


        cy.get('#raffrollo-sub-menu > #characteristics > .menu-wrapper').invoke('show')
        cy.percySnapshot('Raffrollo-Menü: Raffrollo nach Eigenschaften')
        cy.reload()
        cy.checkFreshChat()


        cy.get('#raffrollo-sub-menu > #guide > .menu-wrapper').invoke('show')
        cy.percySnapshot('Raffrollo-Menü: Ratgeber')
        cy.reload()
        cy.checkFreshChat()
    })
})
















