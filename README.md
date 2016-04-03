## Typescript External Modules with browserify in the browser
How to use Typescript with npm modules in the browser with typings and gulp - a boiler plate project.

------------------------------------------
##### Looking for Angular version - [i got you covered - click here](https://github.com/ddennis/Typescript-external-modules-Browserify-angular1-npm-commonjs)
------------------------------------------

## Install
To be able to use this project nodejs must be installed. if you have nodejs, go download or clone the project and run from in the terminal:

    npm install


Then start the development server with **browsersync**, which will open your browser on http://localhost:3000/

    gulp dev


## What is this
A project using **Typescript external modules**, compiling to **commonjs** modules and using **browserify** to load the script bundle in the browser,
This enables you to use npm as a package manager and ES6 syntax with Typescript.

- [What is commonjs and npm, click here](https://egghead.io/lessons/nodejs-what-are-commonjs-modules)
- [what is ES6 click here](https://www.youtube.com/watch?v=CozSF5abcTA)

## Why
There is alot of projects, which uses ***Typescript*** but dosen't show how to use ***external modules*** or how to get modules from ***npm*** working, with ***Typescript***.

Using Typescript externals modules you don't have to pass the typescript reference file around or the needless namespacing in the code dividing classes into modules.
Your typescript modules/classes can easily be moved from project to project and there is no globals.
The codecompletion/intellisense/linting gets alot better, if you use an ide which supports typescript. [an example from webstorm](https://egghead.io/lessons/misc-webstorm-managing-imports).
sublime, atom and VScode is also supported. [linting example](https://egghead.io/lessons/javascript-catching-javascript-mistakes-with-typescript)

## Whats the problem
Mr. Typescript compiler is always a nice guy who loves other ***Typescript external module*** which you wrote your self,
but import an ***npm module/commonjs module***, he has some very specific needs we to take care of, or he will shut down the party.

#### WHAT YOU NEED, Do you know I got it? - all im askin' is for a little definition file ♫ ♬ ♫
In order to make Mr. Typescript compiler happy and get him to party with you, you need to tell him who and what you have invited to the party.
if you just invited some friends or import a module he will get upset and complain.

    //The main class for this project is located \app\src\app.ts
    import * as partyPeople from 'party-people'
    // throws Error TS2307: Cannot find module 'party-people'.

####The npm module we want to use
This is a simplyfied version of our example npm module we are trying to use, it exports a couple of functions,
but for us to use it we need to tell the compiler about it.

	exports.aretha = function () {
		 ....
	}
	exports.bruce = function () {
    	 ....
    }

## How to use it
What we need to do, is to tell Mr Typescript compiler about **party-people**.
To do this we provide a .d.ts file which explains what the **party-people** or **npm module** brings to the party.
The d.ts file is located in `typings\main\ambient\party-people\index.d.ts` and is passed to the typescript compiler in the build task
(more details on that in the Typings section).

By providing Mr. Typescript compiler a with a d.ts file also called a typings file, he will very happy to see the **party-people** module

####The typescript definition file or d.ts file
Must declare a module name, in this case `party-people`, the name is usually the name of the folder in our node_modules.
The node_modules folder is by default from where external non typescript modules will be resolved from.

    declare module 'party-people' {
        export class aretha{
        }
	}

Mr. Typescript compiler will now be very happy about letting **party-people** and **aretha** into the party.
But lets say you want to call a ***sing*** function on aretha, then Mr. Typescript compiler will yell at you
**`Error TS2339: Property 'sing' does not exist on type 'aretha'`**. this is ofcourse a big fat lie,
but you can sweettalk Mr. Typescript to allow it by using aretha with a `any` type, like so:

	var arethaFranklin:any = new aretha();
    arethaFranklin.sing();

If we want Bruce Willis to sing, we also have to specify ***bruce*** in the definition file and any other exported function from the party-people module we want to use.

#### The final definition file
To make Mr. Typescript compiler a really fantastic guy to work and party with we can provide an description of what each person in the **partyPeople** module can do,
this is done by adding return types for every method and attribute. Play around with it try to add or remove stuff from the d.ts file to see the compiler complain.

	declare module 'party-people' {
	   export class aretha{
	       canSing:boolean;
	       sing():void;
	   }
	   export class bruce{
	       canSing:boolean;
	       sing():void;
	   }
	   function allSingers():Array<string>
	}

If we want to listen to bruce in our project, we can now also use the type annotations from the definition file in our project and set the type of **bruce** like so:

	var bruceWillis:bruce = new bruce();


#### Full npm module
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


## Typings
What should be clear now is that the ***typings files are very important***, if you want to work with npm modules.
luckly there is a big community providing definitions files for alot of the most used npm modules.
[See the DefinitelyTyped repo](https://github.com/DefinitelyTyped/DefinitelyTyped).

#### Install new difinitions files with typings
The typings module provides an easy way to install definition files provide by the community:
[More details about the typings manager here](https://www.npmjs.com/package/typings)

    // if you don't have the typings module installed
    npm install typings -g

To add a definition file to the project:

	//when typings is installed
	typings install angular --ambient --save


To get up and running with this project, i have included the typings files needed, some might prefer to leave them out of the repo
but in my experince the typings files is not always complete, so sometimes you may want to add stuff, therefore
the typings files is included.


###Processing the definition files in the build task
In this project all the d.ts files is passed to the typescript compiler in our build task.
We provide an configuration object, where we specify the module type `"module": "commonjs"` and add in the `typings/main.d.ts` which reference all our definitions files
The excellent **tsify** module provides all the functionality for communication with the Typescript compiler and browserify then bundles our script so we can load them in the browser.

    //in the gulp/task/browserifyTypescript.js

    // Add the typings file so typescript knows the npm modules we are using
    b.add('typings/main.d.ts');

    // build the typescript files, providing the config for doing so
    b.plugin(tsify, {
            "target": "es5",
            "module": "commonjs",
            "isolatedModules": false,
            "experimentalDecorators": true,
            "emitDecoratorMetadata": true,
            "declaration": true,
            "noImplicitAny": true,
            "removeComments": true,
            "noLib": false,
            "preserveConstEnums": true,
            "suppressImplicitAnyIndexErrors": true,
            "moduleResolution": "node"
        }
    );


//TODO more on compiler



