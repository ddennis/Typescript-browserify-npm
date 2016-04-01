/**
 * Created by Fantastisk on 17-03-2016.
 */



/**
 * Import modules from a npm module
 */
import * as _ from 'underscore';
//import {$} from 'jquery';
import * as jQuery from 'jquery';

var $ = jQuery

/**
 * Import modules from our test module
 */
import {aretha} from 'party-people'
import {bruce} from 'party-people'
import * as partyPeople from 'party-people'


// Just use the modules, standard javascript, see the console for output
var arethaFranklin= new aretha();
arethaFranklin.sing();

// or use the type annotations from typescript, see the console for output
var bruceWillis:bruce = new bruce();
bruceWillis.sing()


// import another class 
import {SingerUtil} from './utils/SingerUtil'


// or use an ES6 class
class Main {

    public body:JQuery = $("body");
    public container:JQuery = $('.singerContainer');

    // by default the varible is private if we don't provide the public keyword
    singerUtil:SingerUtil;

    constructor() {

        this.singerUtil = new SingerUtil()


        // get all the singers from our module
        var allSingersArray:Array<any> = partyPeople.allSingers();

        //call function with the array
        this.showAllSingers(allSingersArray)
    }


    showAllSingers(arr:Array<any>){

        //create div element
        var singerContainer = document.createElement('div')

        // append the headline
        this.container.append('<div><h1>All singers</h1> </div>'  );
        $(singerContainer).append('<ul> '  );

        // loop through each singer
        _.each(arr, (item:any, index:number) => {

            var linkUrl:string = this.singerUtil.getLinkByIndex(index);

            var singerName:string = item as string;

            var item:any = document.createElement('div');
            $(item).addClass('item');
            $(item).append(singerName + ' ' );

            //create the link
            var link = $('<a>').attr('href', linkUrl).text('More info: ');
            $(item).append(link);

            //append the whole container
            $(singerContainer).append(item)

        });
        $(singerContainer).append('</ul> '  );

        this.container.append(singerContainer  );
    }

}


// start the app
var main:Main = new Main()





