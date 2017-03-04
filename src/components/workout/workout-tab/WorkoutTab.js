import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as workoutActions from '../../../actions/workoutActions';
import WorkoutList from './WorkoutList';

class WorkoutListPage extends React.Component {
    constructor(props, context){
        super(props, context);
    }

    render() {
        const {workouts} = this.props;
        return (
            <div>
                <h1>My Workouts</h1>
                <WorkoutList workouts={workouts} />
            </div>
        );
    }
}

WorkoutListPage.propTypes = {
    actions: PropTypes.object.isRequired,
    workouts: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        workouts: state.workouts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(workoutActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutListPage);
