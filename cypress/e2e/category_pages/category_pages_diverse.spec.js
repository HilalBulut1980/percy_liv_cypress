var data = require("../../fixtures/cat_pages_diverse.json");
var pages = data.URLS;
let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - Diverse category pages', function () {


    pages.forEach(function (link) {

        it('Load page: ' + link + ' & take percy snapshot', function () {

            cy.visit(link)
            cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
            cy.checkFreshChat()
            cy.percySnapshot(link)
        })
    })
})