import React from 'react';
import {Link, IndexLink} from 'react-router';

class BottomNavigation extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-default navbar-fixed-bottom">
              <div className="container-fluid">
                  <div className="button-nav">
                      <IndexLink to="/" activeClassName="active" className="nav-button">
                          <span className="nav-button-icon glyphicon glyphicon-th-list"></span>
                          <span className="nav-button-title">Feed</span>
                      </IndexLink>
                      <Link to="/schedule" activeClassName="active" className="nav-button">
                          <span className="nav-button-icon glyphicon glyphicon-calendar"></span>
                          <span className="nav-button-title">Schedule</span>
                      </Link>
                      <Link to="/workouts" activeClassName="active" className="nav-button">
                          <span className="nav-button-icon glyphicon glyphicon-sunglasses"></span>
                          <span className="nav-button-title">Workouts</span>
                      </Link>
                      <Link to="/profile" activeClassName="active" className="nav-button">
                          <span className="nav-button-icon glyphicon glyphicon-user"></span>
                          <span className="nav-button-title">Profile</span>
                      </Link>
                  </div>
              </div>
            </nav>
        );
    }
}

export default BottomNavigation;
