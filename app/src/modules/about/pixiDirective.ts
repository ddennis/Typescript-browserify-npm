/**
 * Created by Fantastisk on 25-03-2016.
 */

/**
 * To be able to create our own value on scope we need to
 * create our own interface and extend ng.IScope
 *
 * Or set the type of scope to scope:any which also works
 *
 * Solution for creating directives this is copy/pasted from here
 * http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002
 *
 * It's important to add `link` to the prototype or you will end up with state issues.
 * See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
 *
 */


/**
 * Extending ng.IScope to be able to create our own values on scope
 */
export interface IPixiDirective extends ng.IScope {
    name:string;
}

import {PixiView} from './PixiView'

export class PixiDirective  {

    public link:(scope:any , element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => void;

    //public template = '<div> pixi something</div>';

    // create isolate scope if needed
    //public scope = {};

    constructor(/*list of dependencies*/) {

        PixiDirective.prototype.link = (scope:any, element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => {

            scope.name = "Dennis  ";

            // if we don't create an isolated scope we can reference our parent controller
            var mainCtrl = scope.mainCtrl;

            scope.name = mainCtrl.getName();

            var pixiView = new PixiView(element, 200, 200);

            element.on('tap click', function () {
                console.log(" PixiDirective.ts > YES YES  = ");
            })

        };
    }

    

    public static Factory() {
        var directive = (/*list of dependencies*/) => {
            return new PixiDirective(/*list of dependencies*/);
        };

        //directive['$inject'] = ['/*list of dependencies*/'];

        return directive;
    }
}
