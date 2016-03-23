/**
 * Created by Fantastisk on 17-03-2016.
 */


import * as angular from 'angular';

import 'angular-ui-router';
import 'angular-animate';

import { MainController} from './MainController';

import './modules/home/index'


export let app = angular.module('app',
    [
        'ui.router',
        'ngAnimate',
        'app.home'
    ]
).controller('MainController', MainController);

