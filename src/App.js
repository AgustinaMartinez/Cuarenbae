import React from 'react';
import Home from '../src/Pages/Home/home';
import {} from './Components/weatherForm/form';
import Podcast from '../src/Pages/Podcast/podcast';
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