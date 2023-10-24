# React Select Minification Script
This is a script for minifying React-select for use as a minified library.

# .NET Framework usage
Currently, there is a modification that must be made to the node_modules file that is being minified.
We need to expose this library via window (or any global object that can be referenced from the static JavaScript of a page) in order to have access to it since this repo is for explicitly <em>not</em> using the built-in npm / node.js "import" functionality.

## How to use this repository 

There are a few steps to follow after downloading this repository to create the desired file & utilize it as a minified application: 

1. In the terminal, run `npm i` to install all node_modules required for this build
2. Once these are installed, navigate to ~/node_modules/react-select/creatable/dist/react-select-creatable.cjs.prod.js
3. At the end, under `exports["default"] = CreatableSelect$1`, assign this CreatableSelect$1 object to a variable on the window (window.REACTSELECT is what I have used as of v7.10).
    1. Depending on the features we want, we may need to get a dist build from a folder other than creatable - we always want the .cjs.prod.js file of whichever folder we are in
    2. CreatableSelect$1 is the varaible name for the creatable react-select (as in tags are freeform creatable), but it changes depending on what type of react-select build it is
    3. We need to do this to expose the library due to not using npm/node.js managed dependency injection
4. Update the REPOBASE constant in webpack.config.js to the directory containing this file
5. In the terminal, run `npm run minify`

Once you have followed the above steps, you should have a minified react-select build that can be dropped in & accessed through the window variable set in step 3. 
