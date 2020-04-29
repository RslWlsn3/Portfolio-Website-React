import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
//import '../../css/main.css';
function AboutMe() {
  return (
    <body>
      <Header currentRoute={2} landingPage={false} />
      <main id="about">
        <h1 className="lg-heading">
          About <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <div id="margin-mobile">
            <img
              src={require('../../img/portrait.png')}
              alt="Connor Mote"
              className="bio-image"
            />
          </div>
          <div className="bio">
            <h3 className="text-secondary bio-title">BIO</h3>
            <div class="bio-text">
              <p>
                Senior computer science and business student, graduating May,
                2020. I have worked with an array of technologies in diﬀerent
                settings and am excited to continue expanding my skills and to
                take on new challenges.
              </p>
              <p>
                I have worked with Python, C++ and SQL in my previous
                internships. Recently I've been diving into web development and
                have found it to be very enjoyable.
              </p>
            </div>
          </div>

          <div className="job job-1">
            <h3>Washington River Protection Solutions</h3>
            <h6>Sofware Egnineering Intern</h6>
            <p>
              Researched how WRPS could integrate machine learning into its
              workﬂow process. Developed a customizable machine learning tool
              using Python’s Scikit-learn and Tkinter libraries. The tool is
              used for determining which storage tanks would be optimal for a
              radioactive waste transfer given a situation. Used SQL to query
              the database for data to train the machine learning classiﬁers.
              Performed agile methodology (Scrum) and used Jira, Jama &
              Subversion.
            </p>
          </div>
          <div className="job job-2">
            <h3>Washington River Protection Solutions</h3>
            <h6>Sofware Egnineering Intern</h6>
            <p>
              Developed a DLL bridge in C++ to facilitate communication between
              a vitriﬁcation calculator and a process simulator. Overcame issues
              of dealing with a legacy system (simulator is written in G2) and
              coordinating with 2 separate teams. Performed agile methodology
              (Scrum) and used Jira, Jama & Subversion. Followed test-driven
              development practices.
            </p>
          </div>
          <div className="job job-3">
            <h3>Mission Aviation Fellowship</h3>
            <h6>System Analysis Consultant</h6>
            <p>
              Worked on a team of 4 to assist MAF on the migration from a paper
              log system to a digital system. Performed detailed system analysis
              of MAF's business processes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <script src="js/main.js"></script>
    </body>
  );
}

export default AboutMe;
