//Setting up route
window.app.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider) {
		$stateProvider.
        state('login', {
        	url:'/login',
            templateUrl: 'app/views/login/login.html',
        }).
        state('dashboard', {
        	url:'/dashboard',
            templateUrl: 'app/views/dashboard/dashboard.html'
        }).
        state('dashboard.item', {
        	url:'/:item',
            templateUrl: 'app/views/dashboard/main.html',
            controller: function($scope, $stateParams) {
                $scope.item = $stateParams.item;
            }
        })/*.
        otherwise({
            redirectTo: '/login'
        })*/;
		$urlRouterProvider.otherwise('/login');
    }
]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.html5Mode(false);
    }
]);