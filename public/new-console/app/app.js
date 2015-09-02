import React from 'react';
import router from './common/router'
import AuthService from './services/AuthService'

//run the router

let token = localStorage.getItem('token');

if (token) {
  AuthService.sessionByToken(token);
}
router.run(function (Handler) {
	
    React.render(<Handler />, document.getElementById('app'));
});