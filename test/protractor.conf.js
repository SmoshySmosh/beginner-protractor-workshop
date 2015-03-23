var browsers = require('./browsers');

var config = {
    suites: {
        index: './e2e/index.spec.js',
        login: './e2e/login.spec.js'
    },
    baseUrl: 'http://localhost:3000',
    multiCapabilities: [
        browsers.chrome,
        browsers.firefox
    ],
    directConnect: true
};

exports.config = config;
