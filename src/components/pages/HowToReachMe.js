import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function HowToReachMe() {
  return (
    <body>
      <Header currentRoute={4} landingPage={false} />
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email:</span>
            Connor27Mote@gmail.com
          </div>
          <div>
            <span className="text-secondary">Phone:</span>
            (509) 521-6085
          </div>
          <div>
            <span className="text-secondary">Address:</span>
            8508 West 2nd Ave, Kennewick WA 99336
          </div>
        </div>
      </main>
      <Footer />
      <script src="js/main.js"></script>
    </body>
  );
}

export default HowToReachMe;
