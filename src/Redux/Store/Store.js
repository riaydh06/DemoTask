import createRootReducers from '../Reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import initialState from '../Constants/InitialState'

const history = createBrowserHistory();
const store = createStore(
  createRootReducers(history),
  initialState,
  applyMiddleware(thunk)
);

export default store;

export { history };