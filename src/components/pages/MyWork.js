import React, { useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import CenteredTabs from '../material-ui/tabs';
import '../../css/main.css';

function MyWork() {
  return (
    <div>
      <Header currentRoute={3} landingPage={false} />
      <main id="about">
        <h1 class="lg-heading">
          My <span class="text-secondary">Work</span>
        </h1>
        <h2 class="sm-heading">Check out some of my projects...</h2>
        <CenteredTabs />
      </main>
      <Footer />
    </div>
  );
}

export default MyWork;
