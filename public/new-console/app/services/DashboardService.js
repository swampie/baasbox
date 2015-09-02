import request from 'reqwest';
import when from 'when';
import {DASHBOARD_URL} from '../constants/Constants';
import DashboardActions from '../actions/DashboardActions';
import LoginStore from '../stores/LoginStore'


class DashboardService {
	
  getDashboardData(){
		var req = request({
      url:DASHBOARD_URL,
      method:'GET',
      crossOrigin:true,
      type:'json',
      headers:{
        'X-BB-SESSION':localStorage.getItem('token')
      }
    })
		return this.handleData(when(req));
	}

	handleData(dataPromise){
		 return dataPromise
      .then(function(response) {
        var data = response.data;
        DashboardActions.loadData(data);
        return true;
      });
	}
}
export default new DashboardService()
