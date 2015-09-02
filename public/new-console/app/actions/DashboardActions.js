import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {DASHBOARD_DATA} from '../constants/Constants.js';

export default {
  loadData: (dashboardData) => {
      AppDispatcher.dispatch({
        actionType:DASHBOARD_DATA ,
        data: dashboardData
        
      });
  }
 
}