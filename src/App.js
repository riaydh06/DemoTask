import React from 'react';
import { Provider } from 'react-redux';
import Router from './Route/Router';
import store, { history } from './Redux/Store/Store';
import routes from './Route'

function App() {
  return (
     
    <Provider store={store}>
      <Router
          history={history}
          routes={routes}
      /> 
    </Provider>
  );
}

export default App;
