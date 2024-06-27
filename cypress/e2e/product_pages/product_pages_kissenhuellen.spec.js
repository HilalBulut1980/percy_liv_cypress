var data = require("../../fixtures/product_pages_kissenhuellen.json");
var pages = data.URLS;
let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - Vorhänge product pages', function () {


    pages.forEach(function (link) {

        it('Load page: ' + link + ' & take percy snapshot', function () {

            cy.visit(link)
            cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));  
            cy.checkFreshChat()

            cy.contains('40x40cm').click()
            cy.contains('50x50cm').click()
            cy.percySnapshot('Kissenhüllen: ' + link)
        })
    })
})