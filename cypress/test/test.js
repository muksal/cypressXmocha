const data = require('/home/nb-muksalmina/Documents/workspace/Automations/installment-web-merchant/cypress/fixtures/testData/login.json');
const api = require('/home/nb-muksalmina/Documents/workspace/Automations/installment-web-merchant/cypress/support/page_object/api-pages.js');

describe('Login', () => {
    it('Login to merchant dashboard', () => {
        api.login(data.logins.login).then((response) => {
            expect(response.status).to.equal(200)
        })
    });
});