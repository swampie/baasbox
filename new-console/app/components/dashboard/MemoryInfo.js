import React from 'react'
import DashboardStore from '../../stores/DashboardStore.js'
/*
 you can find max allocable memory, current allocated memory and current used memory
 */
export default class MemoryInfo extends React.Component{
	
	constructor(){
		super()
		this.state = {
			'memMaxAllocable':'none',
			'memCurrentAllocated':'none',
			'memCurrentUsed':'none'
		}
	}
	componentDidMount() {
      this.changeListener = this._onChange.bind(this);
      DashboardStore.addChangeListener(this.changeListener)

    }

    
    _onChange() {
      this.setState({memMaxAllocable:DashboardStore.memMaxAllocable,memCurrentAllocated:DashboardStore.memCurrentAllocated,memCurrentUsed:DashboardStore.memCurrentUsed});
    }

    componentWillUnmount() {
      DashboardStore.removeChangeListener(this.changeListener);
    }



	render(){
		return <ul className="list-group">
  				<li className="list-group-item">Max Allocable: <b>{this.state.memMaxAllocable}</b></li>
  				<li className="list-group-item">Current Allocated: <b>{this.state.memCurrentAllocated}</b></li>
  				
  				<li className="list-group-item">Current Used: <b>{this.state.memCurrentUsed}</b></li>
  				</ul>
	}
}