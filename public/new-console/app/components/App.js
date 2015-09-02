'use strict';

import React from 'react';
import LoginStore from '../stores/LoginStore'
import { Route, RouteHandler, Link } from 'react-router';
import AuthService from '../services/AuthService'


export default class App extends React.Component {
  constructor() {
    super()
    this.state = this._getLoginState();
  }

  _getLoginState() {
    return {
      userLoggedIn: LoginStore.isLoggedIn()
    };
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    LoginStore.addChangeListener(this.changeListener);
   
  }

  _onChange() {
    this.setState(this._getLoginState());
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }

  render() {
    return (
      <div id="wrapper">
        <div id="sidebar-wrapper">
          Sidebar
        </div>
        <div className="page-content-wrapper">
          <div className="container-fluid">
            <RouteHandler/>
          </div>
        </div>
      </div>
    );
  }

  logout(e) {
    e.preventDefault();
    AuthService.logout();
  }


  
}