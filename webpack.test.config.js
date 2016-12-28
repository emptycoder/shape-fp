const path = require('path');
const webpack = require('webpack');
const glob = require("glob");

const configuration = {
    resolve: {
        extensions: ['', '.js', '.ts']

    },
    entry: glob.sync("./test/**/*.ts"),
    module: {
        loaders: [
            {
                test: /\.ts?$/,
                loader: 'awesome-typescript-loader?configFileName=tsconfig.test.json'
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'test-stage'),
        publicPath: '',
        filename: 'bundle.js'
    }
};

module.exports = configuration