//Setting up route
window.app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/login', {
            templateUrl: 'app/views/login/login.html',
        }).
        when('/dashboard', {
            templateUrl: 'app/views/dashboard/dashboard.html'
        }).
        otherwise({
            redirectTo: '/login'
        });
    }
]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.html5Mode(false);
    }
]);