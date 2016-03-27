/**
 * @author ddennis.dk - aka fantastisk.dk/works aka meresukker.dk
 */
//REQUIRE -------------------------------------------------------------


/*
var PixiBox   = require('./ddennis/PixiBox');
var TweenMax  = require('gsap');
var PixiBtn   = require('./ddennis/PixiBtn');
var PixiLoader = require('./ddennis/load/Loader');

var CONFIG = require('./CONFIG');
var BoardList = require('./board/BoardList');
var HeaderCoins = require('./board/HeaderCoins');
var Header = require('./board/Header');
var RowAnimation = require('./RowAnimation');
var PointsUp = require('./board/PointsUp');
var BingoView = require('./BingoView');
var TinderPoup = require('./board/TinderPopup');
*/



import * as _PIXI from 'pixi.js'

//import PIXI from 'pixi.js'
//import {Container} from 'pixi.js'


//declare var PIXI:any;


export class PixiView {

    renderer:any;
    stage:any;

    constructor(element:any, _w:number , _h:number) {

        var options = {
            antialias: false,
            backgroundColor: 0xFF00CC,
            resolution: 2,
            transparent:false,
            autoResize:true,
            roundPixels:true
        };

        var PIXI:any = _PIXI

        this.renderer = PIXI.autoDetectRenderer(_w, _h, options);
        element.append(this.renderer.view);

        this.stage = new PIXI.Container();

        this.animate();

    }


    // handling requestAnimationFrame like a boss, tip from http://stackoverflow.com/questions/21924719/how-to-use-requestanimationframe-with-a-typescript-object

    animate = () => {
        this.renderer.render(this.stage);
        requestAnimationFrame(this.animate);
    }




}



/*
export function PixiView(element:any, _w:number, _h:number):void {

    //---------------------------------------------------------------------------------------
    // THIS IS NOT A DISPLAY OBJECT
    //---------------------------------------------------------------------------------------

    var vm = this;
    vm._w = _w;
    vm._h = _h;



    var options = {
        antialias: false,
        backgroundColor: 0xFF00CC,
        resolution: 2,
        transparent:true,
        autoResize:true,
        roundPixels:true
    };



    vm.renderer = PIXI.autoDetectRenderer(_w, _h, options);
    element.append(this.renderer.view);
    var stage = vm.stage = new PIXI.Container();


    vm.animate = function () {
        vm.renderer.render(vm.stage);
        requestAnimationFrame(vm.animate);
        //ionic.requestAnimationFrame(vm.animate)
    };

    vm.getRender = function () {
        return vm.renderer
    };

    vm.animate();

}
*/




//module.exports = MainView;
