/**
 * Created by Fantastisk on 23-03-2016.
 */


import * as angular from 'angular';



import {HomeController} from './HomeController'


export let home = angular.module('app.home',[])
    .controller('HomeController', HomeController);

