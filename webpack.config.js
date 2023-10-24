const webpack = require("webpack");
const Path = require('path');

//Base directory of where you saved this repository - __dirname was always giving webpack "C:" instead of the accurate dirname for some reason so I'm just doing it manually
const REPOBASE = "C:/git/Webpack Minification/";

module.exports = {
    //Path of the production file from the target library
    entry: REPOBASE + "node_modules/react-select/creatable/dist/react-select-creatable.cjs.prod.js",
    devtool: 'source-map',
    output: {
        //Path for where you intend to put the minified files (includes .map for debugging - this .map file should not go into production)
        path: REPOBASE + "/mini",
        filename: "react-select.min.js"
    },
    module: {
        rules: [
            {
                //Standard JS/JSX/TS/TSX react parsing
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    externals: {
        //This allows the minified build to use the global variable "React" to access react instead of letting webpack bundle a duplicate react build into the minified build
        //Removal will cause react error #321 for duplicate react installations
        react: "React"
    },
    mode: "production"
}