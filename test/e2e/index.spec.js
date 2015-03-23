describe('Login Form', function () {
    beforeEach(function () {
        browser.get('/app');
    });

    describe('basics', function () {
        it('should display the correct page title', function () {
            expect(browser.getTitle()).toBe('Log in');
        });

        it('should display the forgot password link', function () {
            var forgotLink = element(by.linkText('Forgot your password?'));
            expect(forgotLink.isPresent()).toBe(true);
        });

        it('should display the expected submit button text', function () {
            var submitBtn = element(by.buttonText('Log in'));
            expect(submitBtn.isPresent()).toBe(true);
        });

        it('should go to /forgot when clicking the forgot link', function () {
            element(by.linkText('Forgot your password?')).click();
            expect(browser.getLocationAbsUrl()).toBe('/forgot');
        });
    });
});
