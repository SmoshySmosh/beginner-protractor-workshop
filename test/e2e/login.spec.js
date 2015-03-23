var IndexPage = require('./IndexPage');

describe('Login Submission', function () {
    var page = new IndexPage();

    beforeEach(function () {
        page.get();
    });

    describe('Authentication Attempt', function () {
        it('logs in when given the correct credentials', function () {
            page.fillEmail();
            page.fillPassword();
            page.submitBtn.click();

            expect(browser.getLocationAbsUrl()).toBe('/landing');
        });
    });

    describe('Bad Authentication Attempt', function () {
        it('displays an error when given incorrect credentials', function () {
            page.fillEmail();
            page.passwordInput.sendKeys('incorrectPassword');
            page.submitBtn.click();

            expect(page.errorContainer.isPresent()).toBe(true);
        });
    });
})
