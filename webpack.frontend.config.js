var webpack = require('webpack');

module.exports = {
    resolve: {
        modulesDirectories: [
            'node_modules',
            'scripts'
        ]
    },
    entry: {
        app: "./scripts/Frontend/app.js"
    },
    devtool: 'source-map',
    output: {
        path: "./public/static/app/",
        publicPath: "/public/static/app/",
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
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
        }, {
            test: /\.js$/,
            loader: 'babel',
            include: '.',
            exclude: /node_modules/,
        }, ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({minimize: true}),
        // new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'init',
            filename: 'init.js'
        })
    ]
};