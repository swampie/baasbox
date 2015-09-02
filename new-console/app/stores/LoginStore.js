import {LOGIN_USER, LOGOUT_USER} from '../constants/Constants';
import BaseStore from './BaseStore';



class LoginStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._user = null;
    this._token= null;
    
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case LOGIN_USER:
        this._token = action.token;
        this._user = action.user;
        this.emitChange();
        break;
      case LOGOUT_USER:
        this._user = null;
        this._token = null;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get user() {
    return this._user;
  }

  get token() {
    return this._token;
  }

  isLoggedIn() {
    return !!this._user;
  }

  
}

export default new LoginStore();