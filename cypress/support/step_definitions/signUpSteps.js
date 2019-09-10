const base = require('/home/nb-muksalmina/Desktop/GitHub/installment-web-merchant/cypress/support/page_object/page.js');

given('user create account account', () => {
    base.navigatToPage('live');
});

When('user input email {string}', () => {
    base.input('email');
});

When('userinput password {string}', () => {
    base.input('password');
});

When('user inpur firstname {string}', () => {
    base.input('fname');
});

When('user input lastname {string}', () => {
    base.input('lname');
});

When('user input phone number {string}', () => {
    base.input('phone number');
});

When('user input residence city {string}', () => {
    base.input('rcity');
});

When('user click sign up button', () => {
    base.clickButton('signUp');
});