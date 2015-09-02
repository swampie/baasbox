import React from 'react'
import DashboardStore from '../../stores/DashboardStore.js'
/*
 you can find max allocable memory, current allocated memory and current used memory
 */
export default class JavaInfo extends React.Component{
	
	constructor(){
		super()
		this.state = {
			'javaClassVersion':'none',
			'javaVendor':'none',
			'javaVendorUrl':'none',
      'javaVersion':''
		}
	}
	componentDidMount() {
      this.changeListener = this._onChange.bind(this);
      DashboardStore.addChangeListener(this.changeListener)

    }

    
    _onChange() {
      this.setState({javaVersion:DashboardStore.javaVersion,javaClassVersion:DashboardStore.javaClassVersion,javaVendorUrl:DashboardStore.javaVendorUrl,javaVendor:DashboardStore.javaVendor});
    }

    componentWillUnmount() {
      DashboardStore.removeChangeListener(this.changeListener);
    }



	render(){
		return <ul className="list-group">
  				<li className="list-group-item">Vendor: <a href={this.state.javaVendorUrl}><b>{this.state.javaVendor}</b></a></li>
  				<li className="list-group-item">Version: <b>{this.state.javaVersion}</b></li>
  				<li className="list-group-item">Class Version: <b>{this.state.javaClassVersion}</b></li>
  				</ul>
	}
}