export class MainController {

    public name:string = "this is name from mainController";


    static $inject = ['$state'];


    constructor(public $state:any) {
        this.$state = $state;
        console.log(" MainController.ts > ssasdasdadf = ");
    }

    click() {
    }


    getName() {
        return this.name
    };

    gotoPage(value:string) {
        console.log (" MainController.ts > goHOMe = ", value );
        this.$state.go(value)
        //this.$state.go('home', null);

    }
    
    
}
