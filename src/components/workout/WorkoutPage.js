import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class WorkoutPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <nav className="tabbed-nav">
                    <Link to="/workouts" activeClassName="active" className="tabbed-nav-item" href="#">Workouts</Link>
                    <Link to="/exercises" activeClassName="active" className="tabbed-nav-item" href="#">Exercises</Link>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

WorkoutPage.propTypes = {
    children: PropTypes.object.isRequired
};


export default WorkoutPage;
