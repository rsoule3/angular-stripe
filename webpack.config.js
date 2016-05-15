var path = require('path');
var webpack = require('webpack');

module.exports = {
    external: {
        'angular' : 'angular'
    },
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './release'),
        filename: 'angular-stripe.js'
    },

    devtool: 'sourcemap',

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015',
                exclude: [/node_modules/, /\.spec\.js/]
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: false
        })
    ]
};
