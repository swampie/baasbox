import React from 'react'
import DatabaseInfo from './DatabaseInfo.js'
import MemoryInfo from './MemoryInfo.js'
import OsInfo from './OsInfo.js'
import JavaInfo from './JavaInfo.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
export default class SystemTabsComponent extends React.Component{


	constructor(){
		super()
	
	}


	render(){
	
		return (
			<div className="col-md-6">
			<div className="panel with-nav-tabs panel-default">
				<Tabs forceRenderTabPanel={true}>
					<TabList>
						<Tab>Database</Tab>
						<Tab>Memory</Tab>
						<Tab>OS</Tab>
						<Tab>Java</Tab>
					</TabList>
					<TabPanel>
						<DatabaseInfo />
						
					</TabPanel>
					<TabPanel>
						<MemoryInfo />
						
					</TabPanel>
          			<TabPanel>
            			<OsInfo/>
          			</TabPanel>
					<TabPanel>
						<JavaInfo />
					
					</TabPanel>
			</Tabs>
				
				
			</div>
			</div>)
	}
}