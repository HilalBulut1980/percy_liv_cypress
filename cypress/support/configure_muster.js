
module.exports = {

    configure_muster: function configure_muster() {

        // muster basisplissee
        cy.visit('/plissee/austero-4448')
        cy.get('#free-samples-addtocart').click() 

        //muster doppelrollo
        cy.visit('/doppelrollo/rayure-5007')
        cy.get('#free-samples-addtocart').click()

        //muster plissee
        cy.visit('/plissee/poesia-1824')
        cy.get('#free-samples-addtocart').click()

        //muster raffrollo
        cy.visit('/raffrollo/corsia-9135')
        cy.get('#free-samples-addtocart').click()

        //muster rollo
        cy.visit('/rollo/blackout-unicolor-3110')
        cy.get('#free-samples-addtocart').click()

        //muster schiebegardine
        cy.visit('/schiebegardinen/hilko-7316')
        cy.get('#free-samples-addtocart').click()

        //muster vorhang
        cy.visit('/vorhaenge/dekoschal/bosco')
        cy.get('#free-samples-addtocart').click()

    }
}