import React from 'react';
import Router from './Route/Router';
// import store, { history } from './Redux/Store/store';
import routes from './Route'

function App() {
  return (
    <Router
      routes={routes}
    /> 
  );
}

export default App;
