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

window.angular.module('baasbox.services.statistics', ['ngResource']).
factory('statistics', function($resource){
	return {
		getClient: function(bbAuth){
			return $resource('/admin/dbStatistics', {}, {
				get: {
					method:'GET',
					headers:{'Content-Type':'application/json; charset=UTF-8','X-BB-SESSION':bbAuth.getUser()['X-BB-SESSION']}
				}
			});
		}
	}
});
window.angular.module('baasbox.services.latest', ['ngResource']).
factory('latest', function($resource){
	return {
		getClient: function(bbAuth){
			return $resource('/admin/version/latest', {}, {
				get: {
					method:'GET',
					headers:{'Content-Type':'application/json; charset=UTF-8','X-BB-SESSION':bbAuth.getUser()['X-BB-SESSION']}
				}
			});
		}
	}
});

window.angular.module('baasbox.services.rss', []).
factory('rss', function($http){
	return {
		parseFeed: function (url) {  return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));         
		}
	}
});