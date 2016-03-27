# Typescript browserify npm Gulp - Boilerplate project;

## What is this
A project using **Typescript external modules**, compiling to commonjs modules and using browserify to load the script bundle in the browser.
Gulp is used to handling build, minifying and compiling templates.

This is basically a standard browserify project, which enables you to use commonjs/npm modules in the browser.
Using Typescript externals modules you don't have to pass the typescript reference file around and needless namespacing in the code that uses the module.

For me the biggest deal is the static analysis and improved code completion.


## install
    npm install

## To Start dev server ##
    gulp dev

Borsersync should now open your browser on http://localhost:3000/

