var IndexPage = require('./IndexPage');

describe('Login Submission', function () {
    var page = new IndexPage();

    beforeEach(function () {
        page.get();
    });

    describe('Authentication Attempt', function () {
        it('logs in when given the correct credentials', function () {

        });
    });

    describe('Bad Authentication Attempt', function () {
        it('displays an error when given incorrect credentials', function () {

        });
    });
})
