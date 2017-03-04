import React, {PropTypes} from 'react';

class WorkoutPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

WorkoutPage.propTypes = {
    children: PropTypes.object.isRequired
};


export default WorkoutPage;
