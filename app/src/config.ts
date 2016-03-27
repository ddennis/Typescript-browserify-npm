/**
 * Created by Fantastisk on 27-03-2016.
 */

import * as angular from 'angular';
/*import {routes} from './routes'
import {CONSTANTS} from './constants'*/



export function config($stateProvider:any, $urlRouterProvider:any, routes:any, CONSTANTS:any, $compileProvider:any ) {

    var arr = routes.pages;

    angular.forEach(arr, function (item, index) {
        var p = {};
        if (item.params) {
            p = item.params
        }


        console.log (" config.ts > item = " , item.templateUrl);
        
        $stateProvider.state(item.state, {
            url: item.url,
            templateUrl: item.templateUrl,
            params: p
        })
    });

    // this should give a performance boost, if debug is false
    $compileProvider.debugInfoEnabled(CONSTANTS.DEBUG);

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
}

config.$inject = ['$stateProvider', '$urlRouterProvider', 'routes', 'CONSTANTS', '$compileProvider'];
//config.$inject = ['$stateProvider' , 'routes'];


