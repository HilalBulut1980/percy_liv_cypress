var data = require("../../fixtures/cms_prio2_raffrollo.json");
var pages = data.URLS;
let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - Raffrollo CMS Prio2 pages', function () {


    pages.forEach(function (link) {

        it('Load page: ' + link + ' & take percy snapshot', function () {

            cy.visit(link)
            cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
            cy.checkFreshChat()
            cy.percySnapshot(link)
        })
    })
})