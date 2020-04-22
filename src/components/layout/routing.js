import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import AboutMe from '../pages/AboutMe';
import MyWork from '../pages/MyWork';
import HowToReachMe from '../pages/HowToReachMe';
import LandingPage from '../pages/LandingPage';

const Routing = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/AboutMe" component={AboutMe} />
      <Route path="/MyWork" component={MyWork} />
      <Route path="/HowToReachMe" component={HowToReachMe} />
    </Switch>
  </HashRouter>
);

export default Routing;
