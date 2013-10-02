window.angular.module('baasbox.controllers.main', [])
  .controller('MainController', ['$rootScope','bbauth','$location','$route','$stateParams',
	function($scope,$bbsession,$location,$route,$stateParams) {
		
	    $scope.currentRoute = '';
	  
	    
		$scope.isLoggedIn = function(){
			return $bbsession.isAuth();
		}
		
		$scope.logout = function(){
			$bbsession.setUser(null);
			
		}
		
		$scope.currentUser = function(){
			return $bbsession.getUser();
		}
		

		
	}]);
