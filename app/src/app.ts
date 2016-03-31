/**
 * Created by Fantastisk on 17-03-2016.
 */


/**
 * Import modules from a npm module
 */

import * as _ from 'underscore';



/**
 * Import modules from our test module
 */

import {aretha} from 'party-people'
import {bruce} from 'party-people'
import * as partyPeople from 'party-people'



var arethaFranklin:any = new aretha();
arethaFranklin.sing();

var bruceWillis = new bruce();
bruceWillis.sing();

var all = partyPeople.allSingers()

var a = ['1', '2'];

_.each(a, function (item:any) {
    console.log(" app.ts > item = ", item);
});

