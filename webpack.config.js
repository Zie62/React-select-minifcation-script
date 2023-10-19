const webpack = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    //Path of the production file from your target library
    entry: "C:/git/Webpack Minification/node_modules/react-select/dist/react-select.cjs.prod.js",
    devtool: 'source-map',
    output: {
        //Path for where you intend to put the minified files
        path: "C:/git/Webpack Minification/mini",
        filename: "react-select.min.js"
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({parallel: true})
        ]
    },
    mode: "production"
}