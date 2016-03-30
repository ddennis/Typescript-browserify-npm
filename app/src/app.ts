/**
 * Created by Fantastisk on 17-03-2016.
 */

import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';

import { MainController} from './MainController';
import { CONSTANTS} from './constants';
import {routes} from './routes'
import { config} from './config';

// Import modules
import './modules/home'
import './modules/about'


//import somePerson = require('somePerson')
//import * as somePerson from 'party-people'
import {aretha} from 'party-people'
import {bruce} from 'party-people'
import * as partyPeople from 'party-people'


var arethaFranklin:any = new aretha()
arethaFranklin.sing();


var bruceWillis = new bruce();
bruceWillis.sing();

var all = partyPeople.allSingers()
console.log (" app.ts > all  = " , all );


/*
var k:any = new somePerson.aretha();
k.sing()*/

/*var k:any = new somePerson.aretha()
k.sing()*/

/*var k = new aretha()
k.sing()*/


export let app = angular.module('app',
    [
        'ui.router',
        'ngAnimate',
        'app.home',
        'app.about'
    ]
).controller('MainController', MainController)
    .constant('CONSTANTS', CONSTANTS)
    .constant('routes', routes)
    .config(config);

