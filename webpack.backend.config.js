var webpack = require('webpack');

module.exports = {
    resolve: {
        modulesDirectories: [
            'node_modules',
            'scripts'
        ]
    },

    target: 'node',

    entry: "./scripts/Backend/app.js",

    // devtool: 'source-map',

    output: {
        libraryTarget: 'commonjs2',
        path: "./be",
        filename: 'server.bundle.js'
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.html$/,
                // loader: 'html',
                loader: 'vue-template',
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [

    ],
    debug: true
};