window.angular.module('baasbox.controllers.login', [])
  .controller('LoginController', ['$scope','bbsession','bbauth',
    function($scope,$bbsession,$bbauth) {
	  		//init module
    		$scope.username = '';
    		$scope.password = '';
    		$scope.appcode = '';
    		
    		$scope.login = function(){
    			var session = $bbsession.login($.param({'username':$scope.username,
    							  'password':$scope.password,
    							  'appcode':$scope.appcode}),function(){
    				
    				$bbauth.setUser(session.data);
    				console.log("Logged in:"+$bbauth.getUser());
    				
    			});
    			
    		}
    		
    }]);