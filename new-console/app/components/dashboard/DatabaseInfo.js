import React from 'react'
import DashboardStore from '../../stores/DashboardStore.js'
export default class DatabaseInfo extends React.Component{
	
	constructor(){
		super()
		this.state = {
			'dbVersion':'none',
			'dbPath':'none',
			'dbMaxSize':'none',
			'dbSize':'None'
		}
	}
	componentDidMount() {
      this.changeListener = this._onChange.bind(this);
      DashboardStore.addChangeListener(this.changeListener)

    }

    
    _onChange() {
      this.setState({dbVersion:DashboardStore.dbVersion,dbPath:DashboardStore.dbPath,dbMaxSize:DashboardStore.dbMaxSize,dbSize:DashboardStore.dbSize});
    }

    componentWillUnmount() {
      DashboardStore.removeChangeListener(this.changeListener);
    }



	render(){
		return <ul className="list-group">
  				<li className="list-group-item">Version: <b>{this.state.dbVersion}</b></li>
  				<li className="list-group-item">Path: <b>{this.state.dbPath}</b></li>
  				<li className="list-group-item">Max size:<b>{this.state.dbMaxSize}</b></li>
  				<li className="list-group-item">DB size:<b>{this.state.dbSize}</b></li>
  				</ul>
	}
}