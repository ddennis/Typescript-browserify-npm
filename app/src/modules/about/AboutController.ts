/**
 * Created by Fantastisk on 27-03-2016.
 */


export class AboutController {

    public name:string = "ABout ctrl";


    //static $inject = ['SomeFactory'];

    constructor() {
        
        console.log (" AboutController.ts > init = " );
    }


    testClick(){
        console.log (" AboutController.ts > CLICKCK = ");
    }

    getName(){
        return this.name
    };

}

