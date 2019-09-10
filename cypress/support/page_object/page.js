//------------------------------ENV----------------------------------//
const live_env = Cypress.env('prod');
//------------------------------DATA----------------------------------//
const testData = {
    email: 'muksalmina.bukhari@gmail.com',
    password: 'wobbyj-dipqoM1',
    firstname: 'muksal',
    lastname: 'mina',
    mobilePhone: '082323232323',
    kota: 'Jakarta Selatan',
}
//------------------------------ELEMENTS-------------------------------//
const elements = {
    firstname: '#first-name',
    lastname: '#last-name',
    email: '#email',
    pass: '#password',
    mobilePhone: '#mobile-phone',
    kota: '#residence-city',
    signUpButton: '#submit-join'
}
//------------------------------MAIN-------------------------------//
export function navigatToPage(param){
    cy.clearCookies();
    switch(param){
        case 'live':
        cy.visit(live_env);
    }
}
export function validationPage(param){
    cy.wait(4500)
    switch(param){
        case 'Successed':
        cy.get(elements.successedLoginMessage).should('contain', testData.successed);
        break;
        case 'Failed':
        cy.get(elements.errorLoginMessage).should('contain', testData.Failed);
        break;
        case 'Failed email':
        cy.get(elements.errorLoginMessage2).should('contain', testData.invalidEmailErrorMessage);
        break;
        case 'Failed email without .com':
        cy.get(elements.errorLoginMessage3).should('contain', testData.invalidEmailErrorMessage2);
        break;
    }
}
export function input(param){ 
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    cy.wait(500);
    switch (param){
        case 'email':
            cy.get(elements.email).type(testData.email);
            break;
        case 'password':
            cy.get(elements.pass).type(testData.password);
            break;
        case 'fname':
            cy.get(elements.firstname).type(testData.firstname);
            break;
        case 'lname':
            cy.get(elements.lastname).type(testData.lastname);
            break;
        case 'phone number':
            cy.get(elements.mobilePhone).type(testData.mobilePhone);
            break;
        case 'rcity':
            cy.get(elements.kota).type(testData.kota);
            break;
    }
}

export function clickButton(param){
    cy.wait(500);
    switch (param){
        case 'signUp':
        cy.get(elements.signUpButton).click();
        break;
    }
}