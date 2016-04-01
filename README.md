## Typescript External Modules with browserify in the browser
How to use npm modules in the browser with typings and gulp


## Install
To be able to use this project nodejs must be installed

    npm install


Start development with **gulp** and **browsersync**, which will should open your browser on http://localhost:3000/

    gulp dev


## What is this
A project using **Typescript external modules**, compiling to **commonjs** modules and using **browserify** to load the script bundle in the browser,
which enables you to use npm as a package manager and ES6 syntax.
If you are not familiar with commonjs and npm, [CLICK HERE](https://egghead.io/lessons/nodejs-what-are-commonjs-modules).

## Why
Using Typescript externals modules you don't have to pass the typescript reference file around or need the needless namespacing in the code dividing classes into modules.
Your typescript modules/classes can easily be moved from project to project and no globals.
The codecompletion/intellisense is fantastic if you use an ide which supports typescript. [something like](https://egghead.io/lessons/misc-webstorm-managing-imports).

## Whats the problem
The problem is that the Typescript compiler is not always nice guy, it has some specific needs that we need to satisfy


## WHAT YOU NEED, Do you know I got it? - all im askin' is for a little definition file ♫ ♬ ♫
In order to make the Typescript compiler happy and get it to party with you, you need to tell it who and what you have invited to the party.
if you just invited some of your friends or import a module it will get upset and complain.

    import * as partyPeople from 'party-people'


####The npm module we want to use
This is a simplyfied version of our example module, it exports one function, but for us to use it we need to tell the compiler about it.


	exports.aretha = function () {
		 ....
	}
	exports.bruce = function () {
    	 ....
    }

## How to use it
What we need to do, is to tell Mr Typescript compiler about **party-people**.
To do this we provide a .d.ts file which explains what the **party-people** or **npm module** brings to the party
this is done by providing Mr. Typescript compiler a with a d.ts file also called a typings file, more details on that later.


####The typescript definition file or d.ts
We start by declaring our module name `party-people` which is usually the name of the folder in our node_modules.
The node_modules is by default from where it will try to resolve our module.

    declare module 'party-people' {
        export class aretha{
        }
	}

Mr. Typescript compiler will now be very happy about letting **party-people** and **aretha** into the party.
But if you want Bruce Willis to sing, we also have to specify **bruce** in the definition file and any other
functionalities we want to use.

#### The final definition file
To make Mr. Typescript compiler an even better host, we provide an description of what each person in the **partyPeople** module can do,
but adding return types for every method and attribute.

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

To get up and running with this project, i have included the typings files needed.
In my experince the typings files is not always complete, so sometimes you may want to added properties, therefore
the typings files is included in the repo.


In this project all the d.ts files is passed to the typescript compiler in our build task

If you want to install a new npm module you need to install the typings module -g

    // if you don't have the typings moduled installed
    npm install typings -g


To install a definition type:

	typings install angular --ambient --save


