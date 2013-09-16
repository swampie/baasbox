window.angular.module('baasbox.controllers.main', [])
  .controller('MainController', ['$rootScope','bbauth','$location','$route',
	function($scope,$bbsession,$location,$route) {
		
	    $scope.currentRoute = '';
	  
	    
	    $scope.$on('$routeChangeSuccess', function(e) { 
	    	$scope.currentRoute = $route.current;
	    });
	  
		$scope.isLoggedIn = function(){
			return $bbsession.isAuth();
		}
		
		$scope.logout = function(){
			$bbsession.setUser(null);
			
		}
		
		$scope.currentUser = function(){
			return $bbsession.getUser();
		}
		
		$scope.$watch($scope.currentUser,function(newValue,oldValue,scope){
			console.log("user",newValue,oldValue);
			if(newValue==null && oldValue !=null || newValue==null && oldValue ==null){
				$location.path("/login");
			}else{
				$location.path("/dashboard");
			}
		})
		
		
		if($scope.isLoggedIn()){
			$location.path("/dashboard");
		}else{
			$location.path("/login");
		}
		
		
	}]);
