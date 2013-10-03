var additionalModules = ['ngCookies', 'ngResource','ui.router','baasbox.controllers','baasbox.services','baasbox.directives','baasbox.filters']
window.app = angular.module('baasbox', additionalModules);
window.angular.module('baasbox.controllers',['baasbox.controllers.login','baasbox.controllers.main','baasbox.controllers.dashboard'])
window.angular.module('baasbox.services',['baasbox.services.session','baasbox.services.auth','baasbox.services.statistics','baasbox.services.latest','baasbox.services.rss'])
window.angular.module('baasbox.directives',['baasbox.directives.menuitem'])
window.angular.module('baasbox.filters',['baasbox.filters.formatmemory','baasbox.filters.sumproperty'])

