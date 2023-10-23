const webpack = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');
const Path = require('path');

module.exports = {
    //Path of the production file from your target library
    entry: "C:/git/Webpack Minification/node_modules/react-select/creatable/dist/react-select-creatable.cjs.prod.js",
    devtool: 'source-map',
    output: {
        //Path for where you intend to put the minified files
        path: "C:/git/Webpack Minification/mini",
        filename: "react-select.min.js"
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    externals: {
        react: "React"
    },
    mode: "production"
}