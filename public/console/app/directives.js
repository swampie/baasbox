window.angular.module('baasbox.directives.menuitem', [])
	.directive('menuitem',function($location){
		return function(scope,element,attrs){
			element.bind('click',function(){
				scope.$apply(function(){
					if(scope.item!=attrs.path){
						scope.item = attrs["path"];
						$location.path("/main/"+scope.item)
					}
					
				});
			})
		}
		
	});