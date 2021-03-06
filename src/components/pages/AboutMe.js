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
              <p>Hello, my name is Connor Mote.</p>
              <p>
                I am a senior computer science and business student, graduating
                in May 2020, with a passion for problem-solving. I've worked
                with an array of technologies in diﬀerent settings and I look
                forward to further expanding my skills and tackling new
                challenges.
              </p>
              <p>
                In my previous internships, I worked with Python, C++, and SQL.
                More recently, I've been working with web development
                technologies such as React.js, Node.js, and Sass.
              </p>
            </div>
          </div>

          <div className="job job-1">
            <h3>Washington River Protection Solutions</h3>
            <h5>Year 2</h5>
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
            <h5>Year 1</h5>
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
