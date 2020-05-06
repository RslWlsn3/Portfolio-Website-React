import React, { useState } from 'react';
//import '../../css/main.css';
import classNames from 'classnames';
import AboutMe from '../pages/AboutMe.js';
import HowToReachMe from '../pages/HowToReachMe.js';
import MyWork from '../pages/MyWork.js';
import { Link } from 'react-router-dom';

export default function Header({ currentRoute, landingPage }) {
  const [showMenu, changeShowMenu] = useState(false);
  const [homeIsCurrent, changehomeIsCurrent] = useState(true);
  const [aboutMeIsCurrent, changeaboutMeIsCurrent] = useState(false);
  const [myWorkIsCurrent, changmyWorkIsCurrent] = useState(false);
  const [reachMeIsCurrent, changereachMeIsCurrent] = useState(false);

  const menuButtonClasses = classNames('menu-btn', { close: showMenu });
  const menuClasses = classNames('menu', { show: showMenu });
  const menuNavClasses = classNames('menu-nav', { show: showMenu });
  const menuBrandingClasses = classNames('menu-branding', { show: showMenu });
  const btnlineClasses = classNames('btn-line', { glowEffect: landingPage });

  const HomeClasses = classNames(
    'nav-item',
    { current: currentRoute === 1 },
    {
      show: showMenu,
    }
  );
  const AboutMeClasses = classNames(
    'nav-item',
    { current: currentRoute === 2 },
    {
      show: showMenu,
    }
  );
  const MyWorkClasses = classNames(
    'nav-item',
    { current: currentRoute === 3 },
    {
      show: showMenu,
    }
  );
  const ReachMeClasses = classNames(
    'nav-item',
    { current: currentRoute === 4 },
    {
      show: showMenu,
    }
  );

  function toggleMenu() {
    changeShowMenu(!showMenu);
  }

  return (
    <header id="menu">
      <div className={menuButtonClasses} onClick={toggleMenu}>
        <div className={btnlineClasses}></div>
        <div className={btnlineClasses}></div>
        <div className={btnlineClasses}></div>
      </div>

      <nav className={menuClasses}>
        <div className={menuBrandingClasses}>
          <div className="portrait"></div>
        </div>
        <div className={menuNavClasses}>
          <li className={HomeClasses}>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className={AboutMeClasses}>
            <Link to="/AboutMe" className="nav-link">
              About Me
            </Link>
          </li>
          <li className={MyWorkClasses}>
            <Link to="/MyWork" className="nav-link">
              My Work
            </Link>
          </li>
          <li className={ReachMeClasses}>
            <Link to="/HowToReachMe" className="nav-link">
              How to Reach Me
            </Link>
          </li>
        </div>
      </nav>
    </header>
  );
}
