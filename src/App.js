import React, { useState, useEffect } from 'react';
import './css/main.css';
//import Routing from './components/layout/routing';
import { HashRouter, Switch, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import MyWork from './components/pages/MyWork';
import HowToReachMe from './components/pages/HowToReachMe';
import LandingPage from './components/pages/LandingPage';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/AboutMe" component={AboutMe} />
        <Route path="/MyWork" component={MyWork} />
        <Route path="/HowToReachMe" component={HowToReachMe} />
      </Switch>
    </HashRouter>
  );
}

export default App;
