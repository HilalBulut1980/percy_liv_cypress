var data =
{
    "login": "guest",
    "prefix": "geschaeftskunde",
    "company_name": "Test GmbH",
    "vatID": "ATU33803701",
    "prefix_business": "Frau",
    "first_name": "Maria",
    "last_name": "Magdalena",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 40",
    "postal_code": "1040",
    "city": "Wien",
    "state": "Österreich",
    "phone": "222219",
    "shipping": "new",
    "prefix2": "geschaeftskunde",
    "company_name2": "Chaimag Ltd",
    "vatID_2": "BG201794665",
    "prefix_business2": "Herr",
    "first_name2": "Mirco",
    "last_name2": "Yanar",
    "street2": "104 Bdin Str., Büro 12",
    "postal_code2": "1234",
    "city2": "Sofia",
    "state2": "Bulgarien",
    "phone2": "225588",
    "versandkosten": "16,81", //20,00 / 119 * 100 
    "payment": "bankpayment"
}

module.exports = {

    add2Cart: function add2Cart() {

        //add to cart
        cy.get('#configurator-price-cart > .add-to-cart button').click({ force: true })

    },

    checkout: function checkout() {

        //take snapshot of cart
        cy.wait(3000)

        cy.url().should('contain', '/checkout/cart')
        cy.percySnapshot('Alle Produkte im Warenkorb')

        //proceed to checkout 
        cy.contains('zur Kasse gehen').click()

        //set billing address information & and take snapshot
        setBillingData(data.prefix, data.company_name, data.vatID, data.prefix_business, data.first_name, data.last_name, data.email, data.street, data.postal_code, data.city, data.phone, data.state)
        cy.checkFreshChat()
        cy.percySnapshot('checkout: Rechnungsinformation')

        //select 'An andere Adresse verschicken' and go on
        cy.get('input[title="An andere Adresse verschicken"]').check()
        cy.get('#billing-buttons-container > button[title="Weiter"]').click().wait(5000)

        //set shipping address information  & and take snapshot
        setShippingData(data.prefix2, data.company_name2, data.vatID_2, data.prefix_business2, data.first_name2, data.last_name2, data.street2, data.postal_code2, data.city2, data.phone2, data.state2)
        cy.checkFreshChat()
        cy.percySnapshot('checkout: Versandinformation')
        // click 'Weiter'
        cy.get('#shipping-buttons-container button').click().wait(2000)


        //take snapshot of checkout: Versandkosten
        cy.checkFreshChat()
        cy.percySnapshot('checkout: Versandkosten')
        //Click "Weiter"
        cy.get('#opc-shipping_method > .step.a-item > form > .buttons-set > button').click().wait(2000)


        //take snapshot of checkout: Zahlungsinformation
        cy.checkFreshChat()
        cy.percySnapshot('checkout: Zahlungsinformation')
        //Click "Weiter"
        cy.get('#payment-buttons-container button').click().wait(2000)

        //take snapshot of checkout: Bestellübersicht
        cy.checkFreshChat()
        cy.percySnapshot('checkout: Bestellübersicht')

        cy.wait(2000)
    },

    emptyCart: function emptyCart() {

        cy.wait(2000)
        // click cart icon and delete articles  + take snapshots before and after
        cy.get('.smallcartdiv').click()
        cy.checkFreshChat()
        cy.percySnapshot('Warenkorb leeren')
        deleteProducts()
        cy.checkFreshChat()
        cy.percySnapshot('Warenkorb geleert')

    }
}

function setBillingData(prefixA, company, vatID, prefixB, firstName, lastName, email, street, postalCode, city, phone, state) {

    cy.get('#input_box_prefix').children().check(prefixA)
    cy.get('[id="billing:company"]').type(company)
    cy.get('[id="billing:vat_id"]').type(vatID)
    cy.get('label[for="billing[prefix]"] + .input-box').children().check(prefixB)
    cy.get('[id="billing:firstname"]').type(firstName)
    cy.get('[id="billing:lastname"]').type(lastName)
    cy.get('[id="billing:email"]').type(email)
    cy.get('[id="billing:street1"]').type(street)
    cy.get('[id="billing:postcode"]').type(postalCode)
    cy.get('[id="billing:city"]').type(city)
    cy.get('[id="billing:telephone"]').type(phone)
    cy.get('[id="billing:country_id"]').select(state)
}

function setShippingData(prefixA, company, vatID, prefixB, firstName, lastName, street, postalCode, city, phone, state) {

    cy.get('label[for="shipping_prefix"] + #input_box_prefix').children().check(prefixA)
    cy.get('[id="shipping:company"]').type(company)
    cy.get('[id="shipping:vat_id"]').type(vatID)
    cy.get('.field.shipping_name-prefix.name-prefix > .input-box').children().check(prefixB)
    cy.get('[id="shipping:firstname"]').type(firstName)
    cy.get('[id="shipping:lastname"]').type(lastName)
    cy.get('[id="shipping:street1"]').type(street)
    cy.get('[id="shipping:postcode"]').type(postalCode)
    cy.get('[id="shipping:city"]').type(city)
    cy.get('[id="shipping:telephone"]').type(phone)
    cy.get('[id="shipping:country_id"]').select(state)

}

function deleteProducts() {
    //delete articles from cart (recursively)
    const deleteArticle = () => {
        cy.get('body').then($body => {
            const isVisible = $body.find('.remove-item').is(':visible')
            if (isVisible) {
                cy.contains('Artikel entfernen').click()
                deleteArticle()
            }
        })
    }
    deleteArticle()
}