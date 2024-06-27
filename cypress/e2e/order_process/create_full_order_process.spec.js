var checkOut = require("../../support/checkout.js");
var doppelrollo = require("../../support/configure_doppelrollo.js");
var rollo = require("../../support/configure_rollo.js");
var basisplissee = require("../../support/configure_basisplissee.js");
var plissee = require("../../support/configure_plissee.js");
var jalousie = require("../../support/configure_jalousie.js");
var holzjalousie = require("../../support/configure_holzjalousie.js");
var insektenrollo = require("../../support/configure_insektenrollo.js");
var fliegengitter = require("../../support/configure_fliegengitter.js");
var vorhang = require("../../support/configure_vorhang.js");
var schiebegardine = require("../../support/configure_schiebegardine.js");
var raffrollo = require("../../support/configure_raffrollo.js");
var kissenhuelle = require("../../support/configure_kissenhuelle.js");
var muster = require("../../support/configure_muster.js");
var plissee_zubehoer = require("../../support/configure_zubehoer_plissee.js");
var schiebegardinen_zubehoer = require("../../support/configure_zubehoer_schiebegardinen.js");
var vorhang_zubehoer = require("../../support/configure_zubehoer_vorhang.js");
var rollo_zubehoer = require("../../support/configure_zubehoer_rollo.js");
var service_breiteKuerzen = require("../../support/configure_service_breiteKuerzen.js");
var service_schnurAendern = require("../../support/configure_service_schnurAendern.js");
var service_schnurErsetzen = require("../../support/configure_service_schnurErsetzen.js");
var service_schnurLaenger = require("../../support/configure_service_schnurLaenger.js");



describe('Integration test with visual testing - order process incl. all product groups', function () {

    it('pdp2checkout: configure products and go 2 checkout', function () {

        basisplissee.configure_basisplissee() 
        doppelrollo.configure_doppelrollo()
        fliegengitter.configure_fliegengitter()
        holzjalousie.configure_holzjalousie()
        insektenrollo.configure_insektenrollo()
        jalousie.configure_jalousie()
        kissenhuelle.configure_kissenhuelle()
        muster.configure_muster()
        plissee.configure_plissee()
        raffrollo.configure_raffrollo()
        rollo.configure_rollo()
        schiebegardine.configure_schiebegardine()  //es wird ein einzelpaneel konfiguriert
        service_breiteKuerzen.configure_service_breiteKuerzen()
        service_schnurAendern.configure_service_aenderungSchnur()
        service_schnurErsetzen.configure_service_schnurErsetzen()
        service_schnurLaenger.configure_service_laengereSchnur()
        vorhang.configure_vorhang()
        plissee_zubehoer.configure_zubehoer_plissee()
        rollo_zubehoer.configure_zubehoer_rollo()
        schiebegardinen_zubehoer.configure_zubehoer_schiebegardinen()
        vorhang_zubehoer.configure_zubehoer_vorhang()

        cy.wait(2000)

        checkOut.checkout()
        checkOut.emptyCart()
    })
})