function IndexPage () {
    this.emailInput     = element(by.model('user.email'));
    this.passwordInput  = element(by.model('user.password'));
    this.submitBtn      = element(by.buttonText('Log in'));
    this.forgotLink     = element(by.linkText('Forgot your password?'));
    this.errorContainer = element(by.css('.has-error'));

    this.get = function () {
        browser.get('/app');
    };

    this.fillEmail = function () {
        this.emailInput.sendKeys('user@workshop.com');
    };

    this.getFilledEmail = function () {
        return this.emailInput.getAttribute('value');
    };

    this.fillPassword = function () {
        this.passwordInput.sendKeys('password');
    };
}

module.exports = IndexPage;
