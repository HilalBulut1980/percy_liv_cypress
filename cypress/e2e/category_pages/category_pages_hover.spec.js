import "cypress-real-events/support";
let scrollToBottom = require("scroll-to-bottomjs");


describe('Integration test with visual testing - hover on category pages', function () {

    it('hover on plissee category page', function () {

        cy.visit('/plissee/plissee-gelb')
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()

        //************************************************* TOOLTIP PLISSEE COLOR BREEZE 1740 **************************************************** */
        //****************************************************************************************************************************** */

        cy.get('img[alt="Color Breeze 1740"]').siblings('.tooltip').should('not.be.visible')

        cy.get('a[title="Color Breeze 1740"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'block');
        });
        cy.get('img[alt="Color Breeze 1740"]').siblings('.tooltip').should('be.visible')

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip:visible > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).scrollIntoView()
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('Hover: Plissee Color Breeze 1740')

        // zurücksetzen
        cy.get('a[title="Color Breeze 1740"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'none');
        });

        cy.get('img[alt="Color Breeze 1740"]').siblings('.tooltip').should('not.be.visible')


        //************************************************* TOOLTP PLISSEE Cielo Perl 1904  **************************************************** */
        //****************************************************************************************************************************** */

        cy.get('img[alt="Cielo Perl 1904"]').siblings('.tooltip').should('not.be.visible')

        cy.get('a[title="Cielo Perl 1904"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'block');
        });
        cy.get('img[alt="Cielo Perl 1904"]').siblings('.tooltip').should('be.visible')

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip:visible > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).scrollIntoView()
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('Hover: Plissee Cielo Perl 1904')

        // zurücksetzen
        cy.get('a[title="Cielo Perl 1904"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'none');
        });

        cy.get('img[alt="Cielo Perl 1904"]').siblings('.tooltip').should('not.be.visible')
    })

    it('hover on rollo category page', function () {

        cy.visit('/rollo/rollo-beige')
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()

        //************************************************* TOOLTIP ROLLO Basic DimOut 3025 **************************************************** */
        //****************************************************************************************************************************** */

        cy.get('img[alt="Basic DimOut 3025"]').siblings('.tooltip').should('not.be.visible')

        cy.get('a[title="Basic DimOut 3025"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'block');
        });
        cy.get('img[alt="Basic DimOut 3025"]').siblings('.tooltip').should('be.visible')

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip:visible > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).scrollIntoView()
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('Hover: Rollo Basic DimOut 3025')

        // zurücksetzen
        cy.get('a[title="Basic DimOut 3025"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'none');
        });

        cy.get('img[alt="Basic DimOut 3025"]').siblings('.tooltip').should('not.be.visible')

        //************************************************* TOOLTP Rollo Triangolo 3882  **************************************************** */
        //****************************************************************************************************************************** */

        cy.get('img[alt="Rollo Triangolo 3882"]').siblings('.tooltip').should('not.be.visible')

        cy.get('a[title="Rollo Triangolo 3882"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'block');
        });
        cy.get('img[alt="Rollo Triangolo 3882"]').siblings('.tooltip').should('be.visible')

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip:visible > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).scrollIntoView()
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('Hover: Rollo Triangolo 3882')

        // zurücksetzen
        cy.get('a[title="Rollo Triangolo 3882"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'none');
        });

        cy.get('img[alt="Rollo Triangolo 3882"]').siblings('.tooltip').should('not.be.visible')
    })

    it('hover on doppelrollo category page', function () {

        cy.visit('/doppelrollo/doppelrollo-grau')
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()

        //************************************************* TOOLTIP DOPPELROLLO Acorda 5090 **************************************************** */
        //****************************************************************************************************************************** */

        cy.get('img[alt="Acorda 5090"]').siblings('.tooltip').should('not.be.visible')

        cy.get('a[title="Acorda 5090"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'block');
        });
        cy.get('img[alt="Acorda 5090"]').siblings('.tooltip').should('be.visible')

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip:visible > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).scrollIntoView()
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('Hover: Doppelrollo Acorda 5090')

        // zurücksetzen
        cy.get('a[title="Acorda 5090"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'none');
        });

        cy.get('img[alt="Acorda 5090"]').siblings('.tooltip').should('not.be.visible')

        //************************************************* TOOLTP Doppelrollo Lacinia 5053  **************************************************** */
        //****************************************************************************************************************************** */

        cy.get('img[alt="Lacinia 5053"]').siblings('.tooltip').should('not.be.visible')

        cy.get('a[title="Lacinia 5053"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'block');
        });
        cy.get('img[alt="Lacinia 5053"]').siblings('.tooltip').should('be.visible')

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip:visible > .tooltip-info-container > ul li')
            .should('have.length', 4)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).scrollIntoView()
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('Hover: Doppelrollo Lacinia 5053')

        // zurücksetzen
        cy.get('a[title="Lacinia 5053"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'none');
        });

        cy.get('img[alt="Lacinia 5053"]').siblings('.tooltip').should('not.be.visible')
    })

    it('hover on schiebegardinen category page', function () {

        cy.visit('/schiebegardinen/schiebegardinen-blau')
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()

        //************************************************* TOOLTIP Schiebegardine Bonito 7337 **************************************************** */
        //****************************************************************************************************************************** */

        cy.get('img[alt="Schiebegardine Bonito 7337"]').siblings('.tooltip').should('not.be.visible')

        cy.get('a[title="Schiebegardine Bonito 7337"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'block');
        });
        cy.get('img[alt="Schiebegardine Bonito 7337"]').siblings('.tooltip').should('be.visible')

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip:visible > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).scrollIntoView()
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('Hover: Schiebegardine Bonito 7337')

        // zurücksetzen
        cy.get('a[title="Schiebegardine Bonito 7337"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'none');
        });

        cy.get('img[alt="Schiebegardine Bonito 7337"]').siblings('.tooltip').should('not.be.visible')

        //************************************************* TOOLTIP Schiebegardine Shana 7334  **************************************************** */
        //****************************************************************************************************************************** */

        cy.get('img[alt="Schiebegardine Shana 7334"]').siblings('.tooltip').should('not.be.visible')

        cy.get('a[title="Schiebegardine Shana 7334"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'block');
        });
        cy.get('img[alt="Schiebegardine Shana 7334"]').siblings('.tooltip').should('be.visible')

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip:visible > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).scrollIntoView()
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('Hover: Schiebegardine Shana 7334')

        // zurücksetzen
        cy.get('a[title="Schiebegardine Shana 7334"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'none');
        });

        cy.get('img[alt="Schiebegardine Shana 7334"]').siblings('.tooltip').should('not.be.visible')
    })

    it('hover on raffrollo category page', function () {

        cy.visit('/raffrollo/raffrollo-beige')
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()

        //************************************************* TOOLTIP Raffrollo Zadar 9021 **************************************************** */
        //****************************************************************************************************************************** */

        cy.get('img[alt="Zadar 9021"]').siblings('.tooltip').should('not.be.visible')

        cy.get('a[title="Zadar 9021"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'block');
        });
        cy.get('img[alt="Zadar 9021"]').siblings('.tooltip').should('be.visible')

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip:visible > .tooltip-info-container > ul li')
            .should('have.length', 4)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).scrollIntoView()
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('Hover: Raffrollo Zadar 9021')

        // zurücksetzen
        cy.get('a[title="Zadar 9021"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'none');
        });

        cy.get('img[alt="Zadar 9021"]').siblings('.tooltip').should('not.be.visible')

        //************************************************* TOOLTIP Raffrollo Luogo 9107  **************************************************** */
        //****************************************************************************************************************************** */

        cy.get('img[alt="Luogo 9107"]').siblings('.tooltip').should('not.be.visible')

        cy.get('a[title="Luogo 9107"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'block');
        });
        cy.get('img[alt="Luogo 9107"]').siblings('.tooltip').should('be.visible')

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip:visible > .tooltip-info-container > ul li')
            .should('have.length', 4)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).scrollIntoView()
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.percySnapshot('Hover: Raffrollo Luogo 9107')

        // zurücksetzen
        cy.get('a[title="Luogo 9107"] .tooltip').then(($tooltip) => {
            $tooltip.css('display', 'none');
        });

        cy.get('img[alt="Luogo 9107"]').siblings('.tooltip').should('not.be.visible')
    })

    it('hover on vorhaenge category page 1', function () {

        cy.visit('/oesenschal')
        cy.wait('@js_minify')

        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()

        cy.get('a[title="Sorrento Vorhang Weiß"]').siblings('.item__colors').children().eq(7).realHover().wait(500)
        cy.percySnapshot('Hover: Sorrento Vorhang Rose')

        cy.get('a[title="Velvet Vorhang Weiß"]').siblings('.item__colors').children().eq(9).realHover().wait(500)
        cy.percySnapshot('Hover: Vorhang Velvet Jade')
    })

    it('hover on vorhaenge category page 2', function () {

        cy.visit('/vorhaenge-kinderzimmer')
        cy.wait('@js_minify')

        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
        cy.checkFreshChat()

        cy.get('a[title="Teramo Verdunkelungsvorhang Grau"]').siblings('.item__colors').children().eq(3).realHover().wait(500)
        cy.percySnapshot('Hover: Vorhang Teramo Rot')

        cy.get('a[title="Structuro Verdunkelungsvorhang Beige"]').siblings('.item__colors').children().eq(12).realHover().wait(500)
        cy.percySnapshot('Hover: Vorhang Structuro Flieder')
    })
})
