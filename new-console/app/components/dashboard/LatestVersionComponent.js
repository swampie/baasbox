import React from 'react'
import CountComponent from '../common/CountComponent.js' 
import DashboardStore from '../../stores/DashboardStore.js'

export default class LatestVersionComponent extends CountComponent {
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
      this.setState({count:DashboardStore.latestVersion});
    }

    componentWillUnmount() {
      DashboardStore.removeChangeListener(this.changeListener);
    }



 


}
LatestVersionComponent.defaultProps =  {
			label:'Latest Version',
			icons:['icon32','icon-blu','glyphicon-book']
		};