import {CONSTANTS} from  './constants';


export var routes = {

// We want to keept the contents of the menu and the actual routes seperate.
// therefor the menu arr should only be what should go in the menu
//---------------------------------------------------------------------------------------

    "menu": [
        {
            title: "Some Title",
            state: CONSTANTS.PAGES.HOME
        }

    ],


// PAGES
//---------------------------------------------------------------------------------------

    pages: [

        {
            url: "/home",
            state: CONSTANTS.PAGES.HOME,
            templateUrl: "./modules/home/home.html",
            controller: 'HomeController as homeCtrl'
        },
        {
            url: "/about",
            state: CONSTANTS.PAGES.ABOUT,
            templateUrl: "./modules/about/about.html",
            controller: 'AboutController as aboutCtrl'
        }

    ]
};


