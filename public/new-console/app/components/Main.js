import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent'
import UserCountComponent from './dashboard/UserCountComponent.js'
import CollectionCountComponent from './dashboard/CollectionCountComponent.js'
import DocumentCountComponent from './dashboard/DocumentCountComponent.js'
import LatestVersionComponent from './dashboard/LatestVersionComponent.js'
import DashboardService from '../services/DashboardService'
import SystemTabsComponent from './dashboard/SystemTabsComponent.js'
import { Link } from 'react-router';

export default AuthenticatedComponent(class Home extends React.Component {
  
  componentDidMount(){
     DashboardService.getDashboardData();
  }

  render() {
    return (
      <div className="row dashboard">
        <h1> {this.props.user ? 'Hello ' + this.props.user : ''}</h1>
        <div className="row">
          <UserCountComponent />
          <CollectionCountComponent  />
          <DocumentCountComponent  />
          <LatestVersionComponent  />
        </div>
        <div className="row">
          <SystemTabsComponent  />
        </div>
      </div>
    );
  }
});

