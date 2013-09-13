var additionalModules = ['ngCookies', 'ngResource','baasbox.controllers','baasbox.services']
window.app = angular.module('baasbox', additionalModules);
window.angular.module('baasbox.controllers',['baasbox.controllers.login','baasbox.controllers.main'])
window.angular.module('baasbox.services',['baasbox.services.session','baasbox.services.auth'])
