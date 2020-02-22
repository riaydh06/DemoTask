import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import landingReducer from './LandingReducer'

const createRootReducers = history =>
  combineReducers({
    router: connectRouter(history),
    landingReducer
  });
  
export default createRootReducers;