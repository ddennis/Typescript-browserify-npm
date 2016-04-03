## Typescript External Modules with browserify in the browser
How to use npm modules in the browser with typings and gulp - a boiler project.

------------------------------------------
##### Looking for Angular version - [i got you covered - click here](https://github.com/ddennis/Typescript-external-modules-Browserify-angular1-npm-commonjs)
------------------------------------------

## Install
To be able to use this project nodejs must be installed, download or clone the project and:

    npm install


Start development server with **browsersync**, which will should open your browser and navigate to http://localhost:3000/

    gulp dev


## What is this
A project using **Typescript external modules**, compiling to **commonjs** modules and using **browserify** to load the script bundle in the browser,
which enables you to use npm as a package manager and ES6 syntax.

- [What is commonjs and npm, click here](https://egghead.io/lessons/nodejs-what-are-commonjs-modules)
- [what is ES6 click here](https://www.youtube.com/watch?v=CozSF5abcTA)

## Why
Using Typescript externals modules you don't have to pass the typescript reference file around or the needless namespacing in the code dividing classes into modules.
Your typescript modules/classes can easily be moved from project to project and no globals.
The codecompletion/intellisense is fantastic if you use an ide which supports typescript. [an example from webstorm](https://egghead.io/lessons/misc-webstorm-managing-imports).
sublime, atom and VScode is also supported.

## Whats the problem
The problem is that Mr. Typescript compiler is not always a nice guy, he has some specific needs or he will kick you from the party if
he does not get all the information he needs

#### WHAT YOU NEED, Do you know I got it? - all im askin' is for a little definition file ♫ ♬ ♫
In order to make the Typescript compiler happy and get it to party with you, you need to tell it who and what you have invited to the party.
if you just invited some of your friends or import a module it will get upset and complain.


    //The main class for this project is located \app\src\app.ts
    import * as partyPeople from 'party-people'
    // throws Error TS2307: Cannot find module 'party-people'.


####The npm module we want to use
This is a simplyfied version of our example npm module, it exports a couple of functions, but for us to use it we need to tell the compiler about it.


	exports.aretha = function () {
		 ....
	}
	exports.bruce = function () {
    	 ....
    }

## How to use it
What we need to do, is to tell Mr Typescript compiler about **party-people**.
To do this we provide a .d.ts file which explains what the **party-people** or **npm module** brings to the party.
The d.ts file is located in `typings\main\ambient\party-people\index.d.ts` we pass this file to the typescript compiler,
more details on that in the Typings section.

By providing Mr. Typescript compiler a with a d.ts file also called a typings file, he will very happy to see the **party-people** module

####The typescript definition file or d.ts
We start by declaring our module name `party-people` which is usually the name of the folder in our node_modules.
The node_modules is by default from where external non typescript modules will be resolved from.

    declare module 'party-people' {
        export class aretha{
        }
	}

Mr. Typescript compiler will now be very happy about letting **party-people** and **aretha** into the party.
But if we Bruce Willis to sing, we also have to specify **bruce** and the sing function in the definition file and any other
functionality we want to use.

#### The final definition file
To make Mr. Typescript compiler an even better host, we can provide an description of what each person in the **partyPeople** module can do,
this is done by adding return types for every method and attribute. You can try to add or remove stuff from the d.ts file to see the compiler complain.

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

#### Install new typings
The typings module provides an easy way to install definition files provide by the community:
[More details about the typings manager here](https://www.npmjs.com/package/typings)

    // if you don't have the typings module installed
    npm install typings -g

To add a definition file to the project:

	//when typings is installed
	typings install angular --ambient --save


To get up and running with this project, i have included the typings files needed, some might prefer to leave them out of the repo
but in my experince the typings files is not always complete, so sometimes you may want to added properties, therefore
the typings files is included.


###processing the definition files
In this project all the d.ts files is passed to the typescript compiler in our build task.
We provide an configuration object, where we specify the module type `"module": "commonjs"` and add in the `typings/main.d.ts` which reference all our definitions files

    in the gulp/task/browserifyTypescript.js

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



