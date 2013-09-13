window.angular.module('baasbox.services.session', ['ngResource']).
factory('bbsession', function($resource){
	return $resource('/login', {}, {
		login: {
			method:'POST',
			headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
		}
	});
});

window.angular.module('baasbox.services.auth', ['ngCookies']).
service('bbauth', function($cookieStore){
	var authObject = {};
	authObject.user = null;
	authObject.isAuth = function (){
		if (authObject.user == null) {
			authObject.user = $cookieStore.get('user');
		}
		return (authObject.user != null);
	};
	authObject.setUser = function(newUser) {
		authObject.user = newUser;
		if (authObject.user == null) $cookieStore.remove('user');
		else $cookieStore.put('user', authObject.user);
	};
	authObject.getUser = function() {
		return authObject.user;
	};
	return authObject;
});