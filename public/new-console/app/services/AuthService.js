import request from 'reqwest';
import when from 'when';
import {LOGIN_URL,SESSION_TOKEN_NAME,REFRESH_TOKEN_URL} from '../constants/Constants';
import LoginActions from '../actions/LoginActions';


class AuthService {

  login(username, password,appcode) {
    return this.handleAuth(username,when(request({
      url: LOGIN_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        username, password,appcode
      }
    })));
  }

  sessionByToken(token) {
    var req = request({
      url:REFRESH_TOKEN_URL,
      method:'GET',
      crossOrigin:true,
      type:'json',
      data:{
        'X-BB-SESSION':token
      }
    })
    return this.handleSession(token,req,when(req))
  }

  logout() {
    LoginActions.logoutUser();
  }



  handleAuth(user,loginPromise) {
    return loginPromise
      .then(function(response) {
        var token = response.data[SESSION_TOKEN_NAME];
        console.log("invoking login action with",user,"and",token)
        LoginActions.loginUser(token,user);
        return true;
      });
  }

  handleSession(token,req,sessionPromise) {
    return sessionPromise
      .then(function(response) {
        
        var user = req.request.getResponseHeader('BB-USERNAME');
        LoginActions.loginUser(token,user);
        return true;
      })
      .catch(function(response){
         console.log(response)
         LoginActions.logoutUser();
         return false;
      })

  }
}

export default new AuthService()