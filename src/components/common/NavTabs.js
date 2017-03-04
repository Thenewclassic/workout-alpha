import React from 'react';

class NavTabs extends React.Component {
    render(){
        return (
            <nav className="tabbed-nav">
                <a className="tabbed-nav-item" href="#">Workouts</a>
                <a className="tabbed-nav-item" href="#">Exercises</a>
            </nav>
        );
    }
}

export default NavTabs;
