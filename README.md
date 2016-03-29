# Typescript external modules using browserify, npm, typings and Gulp
--------------------------------------------------------------------
## What is this
A project using **Typescript external modules**, compiling to **commonjs** modules and using **browserify** to load the script bundle in the browser. **typings** is used for handling Typescript definition files. tsd install angular --save will make the typings file available in the project.
If no typings file is found for a npm module, you can add your own like this. 

    declare module 'someNpmModule' {
        var foo: any;
        export default foo;
    } 
    

Gulp is used to handling build, minifying and compiling templates.

This is basically a standard browserify project, which enables you to use commonjs/npm modules in the browser, this means no globals, and the same code style as a node project, where you can require/import a file, function or a module
Using Typescript externals modules you don't have to pass the typescript reference file around and needless namespacing in the code dividing classes into modules.

I am using angular, but the basic setup can rely on any npm module.
For me the biggest deal is the static analysis and improved code completion.


## Install
To be able to use this project nodejs must be installed

    npm install

To use Typescript with npm modules we need to handle we need to handle .d.ts files.
This will also provide us with better code completion if we use the definitions files provided by the community.

This should install typings globaly and install the typings file for the project

    npm install typings -g && typings install



## start the dev server ##
    gulp dev

Borsersync should now open your browser on http://localhost:3000/

## Specific for angular 

**Dependency injection in services or controllers **

    export class SomeController {
        static $inject = ['SomeService', SomeConstants ];
    
        constructor(SomeService, SomeConstants ) {
            this.SomeService = SomeService
            this.SomeConstants = SomeConstants
        }
    }

**Using es6 classes with directives requires a little work around.** there is a couple of ways to make this work. The solution described here seems to work well:
http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002


    export class MyDirective {
        public link:(scope:any , element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => void;
        public template = '<div> this is a value in the directive {{name}}</div>';

        // create isolate scope if needed
        //public scope = {};

        constructor(/*list of dependencies*/) {
            MyDirective.prototype.link = (scope:any, element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => {
                scope.name = "someName ";

                // if we don't create an isolated scope we can reference our parent controller
                var mainCtrl = scope.mainCtrl;
                scope.name = mainCtrl.getName();

                /*handle all your linking requirements here*/
                element.on('tap click', function () {
                    console.log(" MyDirective.ts > YES YES  = ");
                })

         };
        }
        
        public static Factory() {
            var directive = (/*list of dependencies*/) => {
                return new MyDirective(/*list of dependencies*/);
            };

            //directive['$inject'] = ['/*list of dependencies*/'];

            return directive;
        }
    }
    
When registring the directive in your angular module

    
    //import the class
    import {MyDirective} from './MyDirective'
    
    export default angular.module('app.home',[])
    // notice it's the static factory function which is called to register the directive
    .directive('myDirective', MyDirective.Factory());


If you dont want to use ES6 classes, everything works as normal.

TODO - add standard directive function


**directives using your own interfaces**

... TODO
