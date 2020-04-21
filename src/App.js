import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import './css/main.css';
import Routing from './components/layout/routing';

function App() {
  return (
    //<Router> - alias for BrowserRouter imported above. exact prevents main page from allways showing
    <Routing />
  );
}

export default App;
