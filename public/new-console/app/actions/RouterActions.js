import { dispatch } from '../dispatchers/AppDispatcher';
import {ROUTER_NEXT_TRANSITION_PATH} from '../constants/Constants';

export default {
  storeRouterTransitionPath: (path) => {
    dispatch(ROUTER_NEXT_TRANSITION_PATH, {path});
  }
}