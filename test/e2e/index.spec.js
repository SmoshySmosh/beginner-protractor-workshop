var IndexPage  = require('./IndexPage');
var Screenshot = require('../screenshot');

describe('Login Form', function () {
    var page = new IndexPage();

    beforeEach(function () {
        page.get();
    });

    afterEach(function () {
        Screenshot.takeScreenshot(jasmine.getEnv().currentSpec);
    });

    describe('basics', function () {
        it('should display the correct page title', function () {
            expect(browser.getTitle()).toBe('Log in');
        });

        it('should display the forgot password link', function () {
            expect(page.forgotLink.isPresent()).toBe(true);
        });

        it('should display the expected submit button text', function () {
            expect(page.submitBtn.isPresent()).toBe(true);
        });

        it('should go to /forgot when clicking the forgot link', function () {
            page.forgotLink.click();
            expect(browser.getLocationAbsUrl()).toBe('/forgot');
        });
    });
});
