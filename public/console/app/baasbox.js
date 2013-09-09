var additionalModules = ['ngCookies', 'ngResource','baasbox.controllers']
window.app = angular.module('baasbox', additionalModules);
window.angular.module('baasbox.controllers',['baasbox.controllers.login'])
