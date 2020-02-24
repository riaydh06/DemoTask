import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import landingReducer from './LandingReducer'

const createRootReducers = history =>
  combineReducers({
    router: connectRouter(history),
    data: landingReducer
  });
  
export default createRootReducers;