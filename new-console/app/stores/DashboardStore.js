import {DASHBOARD_DATA} from '../constants/Constants';
import BaseStore from './BaseStore';
class DashboardStore extends BaseStore {
	

	constructor(){
		super();
		this._userCount = 0;
		this._collectionCount = 0;
		this._documentCount = 0;
		this._latestVersion = '';
		this._dbVersion = '';
		this._dbPath = ''
		this._dbMaxSize = 0
		this._dbSize = 0
		this._memMaxAllocable = 0
		this._memCurrentAllocated = 0
		this._memCurrentUsed = 0

		this._osArch = ''
		this._osName = ''
		this._osVersion = ''
		this._osNumProcessors = 0

		this._javaVersion = ''
		this._javaVendor = ''
		this._javaVendorUrl = ''
		this._javaClassVersion = ''
		this.subscribe(() => this._registerToActions.bind(this));
	}

	get userCount(){
		return this._userCount;
	}

	get dbVersion(){
		return this._dbVersion;
	}

	get collectionCount(){
		return this._collectionCount;
	}

	get documentCount(){
		return this._documentCount;
	}

	get latestVersion(){
		return this._latestVersion;
	}

	get dbPath(){
		return this._dbPath;
	}

	get dbMaxSize(){
		return this._dbMaxSize;
	}

	get dbSize(){
		return this._dbSize;
	}

	get memMaxAllocable(){
		return this._memMaxAllocable
	}

	get memCurrentAllocated(){
		return this._memCurrentAllocated
	}

	get memCurrentUsed(){
		return this._memCurrentUsed
	}

	get osArch(){
		return this._osArch
	}

	get osName(){
		return this._osName
	}

	get osVersion(){
		return this._osVersion
	}

	get osNumProcessors(){
		return this._osNumProcessors
	}

	get javaVersion(){
		return this._javaVersion
	}

	get javaClassVersion(){
		return this._javaClassVersion
	}

	get javaVendor(){
		return this._javaVendor
	}

	get javaVendorUrl(){
		return this._javaVendorUrl
	}
	countDocs(det){
		var count = 0;
		det.forEach((el,i)=>{
			count+=el.count

		});
		return count;
	}
	_registerToActions(action){
		switch(action.actionType){
			case DASHBOARD_DATA:
				console.log(action.data)
			    this._userCount = action.data.data.users; 
			    this._collectionCount = action.data.data.collections; 
			    this._documentCount = this.countDocs(action.data.data.collections_details)
			    this._latestVersion = action.data.installation.bb_version;
			    this._dbVersion = action.data.db.properties.version;
			    this._dbPath = action.data.db.properties.path;
			    this._dbMaxSize = action.data.db.datafile_freespace;
			    this._dbSize = action.data.db.physical_size;
			    this._memMaxAllocable = action.data.memory.max_allocable_memory
			    this._memCurrentAllocated = action.data.memory.current_allocate_memory
			    this._memCurrentUsed = action.data.memory.used_memory_in_the_allocate_memory

			    this._osArch = action.data.os.os_arch
			    this._osName = action.data.os.os_name
			    this._osVersion = action.data.os.os_version
			    this._osNumProcessors = action.data.os.processors

			    this._javaVendor = action.data.java.java_vendor
			    this._javaVendorUrl = action.data.java.java_vendor_url
			    this._javaClassVersion = action.data.java.java_class_version
			    this._javaVersion = action.data.java.java_version


				this.emitChange();
				break;
			
			default:
				break;
			

		}
	}
}
export default new DashboardStore();