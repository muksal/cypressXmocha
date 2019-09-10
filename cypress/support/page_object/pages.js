//------------------------------ENVS----------------------------------//
const stg_merchant = Cypress.env('stg_merchant');
const prod_merchat = Cypress.env('prod_merchant');

//------------------------------DATAS----------------------------------//
const testData = {
    email : 'bl.staff@google.com',
    pwd : 'admin'
}
//------------------------------ELEMENTS----------------------------------//
const elements = {
    email : '#app-container > div > div > div > form > div:nth-child(1) > div > input[type=text]',
    pwd : '#app-container > div > div > div > form > div:nth-child(2) > div > input[type=password]',
    loginButton : '#app-container > div > div > div > form > button'
}


//------------------------------MAIN----------------------------------//
export function navigateToPage(param){
    cy.clearCookies();
    switch(param){
        case 'stg':
        cy.visit(stg_merchant);
    }
}

export function input (param){
    cy.on('uncaught:exception', (err, runable) => {
        return false;
    });
    cy.wait(500);
    switch (param){
        case 'email':
            cy.get(elements.email).type(testData.email);
            break;
        case 'password':
            cy.get(elements.pwd).type(testData.pwd);
            break;
    }
}

export function clickButton (param){
    cy.wait(500);
    switch(param){
        case 'login':
            cy.get(elements.loginButton).click();
            break;
    }
}