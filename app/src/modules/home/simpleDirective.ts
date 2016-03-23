

export var simpleDirective = function ():ng.IDirective {

    return {
        restrict: 'AE',
        template:'<button>directive btn</button>',

        link: function (scope, element, attrs) {

            element[0].style.marginTop = '10px'

            element.on('click', function () {
                console.log (" simpleDirective > was clicked = ");
                document.body.style.backgroundColor = 'red'

            });

        }
    }
}
