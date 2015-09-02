import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {LOGIN_USER, LOGOUT_USER} from '../constants/Constants.js';
import RouterContainer from '../services/RouterContainer'

export default {
  loginUser: (token,user) => {
      var savedToken = localStorage.getItem('token');
      var nextPath = '/';
      if(RouterContainer.get().getCurrentQuery()!=null && RouterContainer.get().getCurrentQuery().nextPath!=null){
         nextPath = RouterContainer.get().getCurrentQuery().nextPath;
      }
      RouterContainer.get().transitionTo(nextPath);
      localStorage.setItem('token', token);
      AppDispatcher.dispatch({
        actionType: LOGIN_USER,
        token: token,
        user: user
      });
  },
  logoutUser: () => {
    console.log("LOGOUT")
    RouterContainer.get().transitionTo('/login');
    localStorage.removeItem('token');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}