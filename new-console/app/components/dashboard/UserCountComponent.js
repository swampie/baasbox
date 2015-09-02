import React from 'react'
import CountComponent from '../common/CountComponent.js' 
import DashboardStore from '../../stores/DashboardStore.js'

export default class UserCountComponent extends CountComponent {
	constructor() {
    super()
    this.state = {
      icons:[],
      label: ''
    };
  }


    componentWillMount() {
      this.changeListener = this._onChange.bind(this);
      DashboardStore.addChangeListener(this.changeListener)

    }

    _onChange() {
      this.setState({count:DashboardStore.userCount});
    }

    componentWillUnmount() {
      DashboardStore.removeChangeListener(this.changeListener);
    }



  
	


}
UserCountComponent.defaultProps =  {
			label:'Users',
			icons:['icon32','icon-blu','glyphicon-user']
		};