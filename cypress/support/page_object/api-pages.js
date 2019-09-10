const chermes = Cypress.env('stg')

function login(param){
    return cy.request({
        method:'POST',
        url: `${chermes}device-based/regular/login/?login_attempt=1&next=https%3A%2F%2Fid-id.facebook.com%2F&lwv=120&lwc=1348092`,
        failOnStatusCode: false,
        qs: param
    })
}