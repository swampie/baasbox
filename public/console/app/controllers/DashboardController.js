window.angular.module("baasbox.controllers.dashboard",[]).
	controller("DashboardController",['$scope','$stateParams',function($scope,$stateParams){
		   $scope.item = $stateParams.item;
     }]);