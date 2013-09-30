//Setting up route
window.app.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider) {
		$stateProvider.
        state('login', {
        	url:'/login',
            templateUrl: 'app/views/login/login.html',
        }).
        state('dashboard', {
        	url:'/main',
            templateUrl: 'app/views/dashboard/dashboard.html'
        }).
        state('dashboard.item', {
        	url:'/:item',
            templateUrl: 'app/views/dashboard/main.html'
        })/*.
        otherwise({
            redirectTo: '/login'
        })*/;
		$urlRouterProvider.otherwise('/login');
		
		
		
    }


]);

window.app.run(function($rootScope,$state,bbauth){
    $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
        if( !bbauth.isAuth && toState != 'login' ){
            evt.preventDefault();
            $state.transitionTo('login');
        }
    });
});

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.html5Mode(false);
    }
]);