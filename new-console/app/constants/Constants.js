var LOGIN_URL= BBRoutes.com.baasbox.controllers.User.login().absoluteURL();
var REFRESH_TOKEN_URL= BBRoutes.com.baasbox.controllers.Generic.refreshSessionToken().absoluteURL();
var DASHBOARD_URL = BBRoutes.com.baasbox.controllers.Admin.getDBStatistics().absoluteURL();
export default {
  LOGIN_URL: LOGIN_URL,
  REFRESH_TOKEN_URL: REFRESH_TOKEN_URL,
  LOGIN_USER: 'LOGIN_USER',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT_USER: 'LOGOUT_USER',
  DASHBOARD_DATA:'DASHBOARD_DATA',
  SESSION_TOKEN_NAME: 'X-BB-SESSION',
  ROUTER_NEXT_TRANSITION_PATH: 'next',
  DASHBOARD_URL: DASHBOARD_URL
}