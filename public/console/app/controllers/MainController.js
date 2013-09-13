window.angular.module('baasbox.controllers.main', [])
  .controller('MainController', ['$scope','bbauth',
	function($scope,$bbsession) {
		
		$scope.isLoggedIn = function(){
			return $bbsession.isAuth();
		}
		
		$scope.logout = function(){
			return $bbsession.setUser(null);
		}
		
		$scope.currentUser = function(){
			return $bbsession.getUser();
		}
		
		$scope.$watch("currentUser",function(){
			alert("changed")
		});
		
		
	}]);
