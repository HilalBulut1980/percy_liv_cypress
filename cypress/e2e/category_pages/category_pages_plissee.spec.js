var data = require("../../fixtures/cat_pages_plissee.json");
var categoryPages = data.URLS;
let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - Plissee category pages', function () {


    categoryPages.forEach(function (link) {

        it('Load page: ' + link + ' & take percy snapshot', function () {

            cy.visit(link)
            cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
            cy.checkFreshChat()

            cy.percySnapshot(link)
        })
    })
})