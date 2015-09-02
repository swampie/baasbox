import React from 'react'
import DashboardStore from '../../stores/DashboardStore.js'
/*
 you can find max allocable memory, current allocated memory and current used memory
 */
export default class MemoryInfo extends React.Component{
	
	constructor(){
		super()
		this.state = {
			'osArch':'none',
			'osName':'none',
			'osVersion':'none',
      'osNumProcessors':0
		}
	}
	componentDidMount() {
      this.changeListener = this._onChange.bind(this);
      DashboardStore.addChangeListener(this.changeListener)

    }

    
    _onChange() {
      this.setState({osArch:DashboardStore.osArch,osName:DashboardStore.osName,osVersion:DashboardStore.osVersion,osNumProcessors:DashboardStore.osNumProcessors});
    }

    componentWillUnmount() {
      DashboardStore.removeChangeListener(this.changeListener);
    }



	render(){
		return <ul className="list-group">
  				<li className="list-group-item">Arch: <b>{this.state.osArch}</b></li>
  				<li className="list-group-item">Name: <b>{this.state.osName}</b></li>
          <li className="list-group-item">Version: <b>{this.state.osVersion}</b></li>
  				
  				<li className="list-group-item">Num Processors: <b>{this.state.osNumProcessors}</b></li>
  				</ul>
	}
}