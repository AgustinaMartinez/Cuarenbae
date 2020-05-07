import React from 'react';
import Home from './Pages/home';
import Podcast from './Pages/podcast';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/podcasts" component={Podcast}/>
    </Router>
  );
}

export default App;