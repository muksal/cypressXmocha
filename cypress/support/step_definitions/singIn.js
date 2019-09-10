const base = require('/home/nb-muksalmina/Desktop/GitHub/installment-web-merchant/cypress/support/page_object/pages.js');

given('user access merchant page', () => {
    base.navigateToPage('stg');
});

When('input email {string}', () => {
    base.input('email');
});

When('input password {string}', () => {
    base.input('password');
});

// When('input password {string}' () => {
//     base.input('password');
// });

When('click login', () => {
    base.clickButton('login');
});