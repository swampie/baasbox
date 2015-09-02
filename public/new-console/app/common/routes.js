import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import Login from '../components/Login';
import Main from '../components/Main';
import App from '../components/App';

export default (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Main}/>
    <Route name="login" path="/login" handler={Login}/>
    <Route name="home" path="/home" handler={Main}/>
  </Route>
);