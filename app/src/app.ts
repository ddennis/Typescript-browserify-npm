/**
 * Created by Fantastisk on 17-03-2016.
 */


/**
 * Import modules from npm
 */
import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import * as _ from 'underscore';




/**
 * import specifik files used in our setup
 */
import {MainController} from './MainController';
import {CONSTANTS} from './constants';
import {routes} from './routes'
import {config} from './config';


/**
 * Import our angular modules
 */
import './modules/home'
import './modules/about'

import {aretha} from 'party-people'
import {bruce} from 'party-people'
import * as partyPeople from 'party-people'



var arethaFranklin:any = new aretha();
arethaFranklin.sing();

var bruceWillis = new bruce();
bruceWillis.sing();

var all = partyPeople.allSingers()

var a = ['1','2']

_.each(a, function (item:any) {
    console.log (" app.ts > item = " , item);
})


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

