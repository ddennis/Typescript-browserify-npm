# Typescript external modules using browserify, npm, typings and Gulp

## Install
To be able to use this project nodejs must be installed

    npm install


This should install typings globaly and install the typings file for the project:

    npm install typings -g && typings install


To install a definition type:

	typings install angular --ambient --save


To start development **gulp** and browsersync should open open your browser on http://localhost:3000/ by running:
    gulp dev



## What is this
A project using **Typescript external modules**, compiling to **commonjs** modules and using **browserify** to load the script bundle in the browser. **typings** is used for handling Typescript definition files.

This is basically a standard browserify project, which enables you to use **commonjs/npm modules** in the browser, this means no globals, and the same code style as a node project, where you can require/import a file, function or a module
Using Typescript externals modules you don't have to pass the typescript reference file around and the needless namespacing in the code dividing classes into modules.

This boilerplate project is based on angular 1, but the basic setup can be used with or without any npm module.


## WHAT YOU NEED, Do you know I got it? - all im askin' is for a little definition file ♫ ♬ ♫
In order to make the Typescript compiler happy and get it to party with you, you need to tell it who and what you have invited to the party.
if you just invite some of your friends or import a module it will get upset and complain.

    import * as partyPeople from 'party-people'
	or
    import * as _ from 'underscore';


What we need to do, is to tell Mr Typescript compiler about **party-people**.
To do this we provide a .d.ts file which explains what the people or **module** brings to the party

Something like this:

####The npm module we want to use
	exports.aretha = function () {
		  ....
	}
	exports.bruce = function () {
		  ...
	}
	exports.allSingers = function () {
		...
	}

####The typescript definition file or d.ts

    declare module 'party-people' {
        export class aretha{
        }
	}


Mr. Typescript compiler will now be very happy about letting **party-people** and **aretha** into the party.
But if you want Bruce Willis to sing, so will have to specify **bruce** in the definition file.

To make Mr. Typescript compiler an even better host, we can provide an description of what each person in the **partyPeople** module can do:

	declare module 'party-people' {

	   export class aretha{
	       canSing:boolean;
	       sing():void;
	   }

	   export class bruce{
	       canSing:boolean;
	       sing():void;
	   }

	   function allSingers():void

	}


Here is the complete 'party-people' npm module, which is included in the node_modules folder, as an example.

	exports.aretha = function () {
		  var vm     = this
		  vm.canSing = true
		  vm.name    = "Aretha Fraklin"
		  vm.sing    = function () {
				console.log(vm.name, " sings: R-E-S-P-E-C-T Find out what it means to me R-E-S-P-E-C-T Take care, TCB");
		  }
	}


	exports.bruce = function () {
		  var vm     = this
		  vm.canSing = false
		  vm.name    = "Bruce (Die Hard) willis"
		  vm.sing    = function () {
				console.log(vm.name + " sings: Under the boardwalk, down by the sea");
		  }
	}


	exports.allSingers = function () {
		  return ["Bruce (Die Hard) willis", "Aretha Fraklin"]
	}






### Specific for angular

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
