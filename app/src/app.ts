/**
 * Created by Fantastisk on 17-03-2016.
 */


import * as angular from 'angular';
import { MainController} from './MainController';


export let app = angular.module('app',  [

   /* require('angular-ui-router'),
    require('angular-ui-bootstrap'),
    require('angular-translate')*/

]).controller('MainController', MainController);

