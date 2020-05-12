import React from 'react';
import Home from './Pages/Home/home';
import Podcast from './Pages/Podcast/podcast';
import WeatherPage from './Pages/Weather';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/podcasts" component={Podcast}/>
      <Route exact path="/weather" component={WeatherPage}/>
    </Router>
  );
}

export default App;