import React from 'react';

const BottomNavigation = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-bottom">
          <div className="container-fluid">
              <div className="button-nav">
                  <button className="nav-button active">
                      <span className="nav-button-icon glyphicon glyphicon-th-list"></span>
                      <span className="nav-button-title">Feed</span>
                  </button>
                  <button className="nav-button">
                      <span className="nav-button-icon glyphicon glyphicon-search"></span>
                      <span className="nav-button-title">Explore</span>
                  </button>
                  <button className="nav-button">
                      <span className="nav-button-icon glyphicon glyphicon-play"></span>
                      <span className="nav-button-title">Start</span>
                  </button>
                  <button className="nav-button">
                      <span className="nav-button-icon glyphicon glyphicon-user"></span>
                      <span className="nav-button-title">Profile</span>
                  </button>
                  <button className="nav-button">
                      <span className="nav-button-icon glyphicon glyphicon-option-horizontal"></span>
                      <span className="nav-button-title">More</span>
                  </button>
              </div>
          </div>
        </nav>
    );
};

export default BottomNavigation;
