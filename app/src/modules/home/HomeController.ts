/**
 * Created by Fantastisk on 23-03-2016.
 */


export class HomeController {

    public name:string = "Home ctrl";
    

    //static $inject = ['SomeFactory'];

    constructor() {
    }


    click(){
        console.log (" homeController.ts > CLICKCK = ");
    }

    getName(){
        return this.name
    };

}

