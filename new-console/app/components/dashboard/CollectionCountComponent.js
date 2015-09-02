import React from 'react'
import CountComponent from '../common/CountComponent.js' 
import DashboardStore from '../../stores/DashboardStore.js'

export default class CollectionCountComponent extends CountComponent {
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
      this.setState({count:DashboardStore.collectionCount});
    }

    componentWillUnmount() {
      DashboardStore.removeChangeListener(this.changeListener);
    }





	


}
CollectionCountComponent.defaultProps =  {
			label:'Collections',
			icons:['icon32','icon-blu','glyphicon-book']
		};