var fs = require('fs');

function screenshot(spec) {
    var name = spec.description.split(' ').join('_');
    name     = name.split('/').join('');

    browser.takeScreenshot().then(function (png) {
        var stream = fs.createWriteStream(__dirname + '/screenshots/' + name + '.png');
        stream.write(new Buffer(png, 'base64'));
        stream.end();
    });
}

exports.takeScreenshot = function(spec) {
    screenshot(spec);
};

exports.takeScreenshotOnFailure = function (spec) {
    if (spec.results().passed()) {
        return;
    }

    screenshot(spec);
};
