import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
//import '../../css/main';
import Header from '../layout/Header';

function LandingPage() {
  return (    
    <body id="bg-img">
      <div className="overlay"></div>
      <Header currentRoute={1} landingPage={true} />
      <main id="home">
        <h1 className="lg-heading">
          Connor <span className="text-secondary">Mote</span>
        </h1>
        <h2 className="sm-heading">
          Web Developer, Programmer &
          <span className="seahawk-color"> Seahawks</span> fan
        </h2>
        <div className="icons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/connor-mote-890b87132/"
          >
            <div className="fab">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </div>
          </a>
          <a target="_blank" href="https://github.com/RslWlsn3">
            <div className="fab">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </div>
          </a>
          <a target="_blank" href="https://www.facebook.com/connor.mote.7">
            <div className="fab">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </div>
          </a>
        </div>
      </main>

    </body>
  );
}

export default LandingPage;
