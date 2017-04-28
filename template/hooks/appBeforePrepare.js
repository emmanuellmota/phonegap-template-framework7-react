const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const fs = require('fs');

const compiler = webpack(webpackConfig);

function transpiler(context) {
    const Q = context.requireCordovaModule('q');
    const deferral = new Q.defer();

    compiler.watch({}, (err, stats) => {
        deferral[err ? 'reject' : 'resolve'](err);
    });

    return deferral.promise;
}

module.exports = transpiler;