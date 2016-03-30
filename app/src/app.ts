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



//import * as somePerson from './utils/somePerson'


//import somePerson = require('somePerson')
import * as somePerson from 'somePerson'

console.log (" app.ts > somePerson  ", somePerson  )




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

