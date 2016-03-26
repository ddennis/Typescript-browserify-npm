
// This did'nt work using es6 style classes, something about how the link function works.
// Going to try this solution http://www.sitepoint.com/writing-angularjs-apps-using-es6/


export var simpleDirective = function ():ng.IDirective {

    return {
        restrict: 'AE',

        template:'<button>button from directive {{someValue}}</button>',


        link: function (scope, element, attrs) {


            element[0].style.marginTop = '10px'

            element.on('click', function () {
                console.log (" simpleDirective > was clicked = ");
                document.body.style.backgroundColor = 'red'

            });

        }
    }
}
