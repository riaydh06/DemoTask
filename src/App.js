import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Route/Router';
// import store, { history } from './Redux/Store/store';
import routes from './Route'

function App() {
  return (
    <div className="App">
        <Router
          routes={routes}
        /> 
      
        {/* <ImageListFirst
          image="https://cdn.vox-cdn.com/thumbor/CTluvlc9kScZlylzsRR4QRCE4Gg=/6x0:641x423/1200x800/filters:focal(6x0:641x423)/cdn.vox-cdn.com/uploads/chorus_image/image/48767301/Screen_Shot_2016-02-09_at_9.08.28_AM.0.0.png"
          description="Search for the keywords to learn more about each warning"
          rating={5}
        /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      
    </div>
  );
}

export default App;
