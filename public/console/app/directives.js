window.angular.module('baasbox.directives.menuitem', [])
	.directive('menuitem',function($location){
		return {
			restrict: 'E',
			template: '<li><a ng-click="callMenu()" ng-transclude><i ng-class="iconize()"></i></a></li>',
			transclude: true,
			replace:true,
			scope:{
				path: '=path',
				icon : '=icon'
			},
			
			
			
			link: function postLink(scope, iElement, iAttrs) {
				scope.path = iAttrs["path"];
				scope.icon = iAttrs["icon"];
				scope.iconize = function(){
					return "icon-"+scope.icon.replace("_","-");
				}
				
				if($location.path().substr(1) === scope.path){
					iElement.addClass('active');
				}
				scope.current = function(){
					return iElement.hasClass('active');
				}
				
				scope.callMenu = function(){
					if(scope.current() != scope.path){
						$location.path('/'+scope.path);
					}
				}
			}
		}
	});