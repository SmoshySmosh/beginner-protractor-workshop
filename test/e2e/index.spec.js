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
    });
});
