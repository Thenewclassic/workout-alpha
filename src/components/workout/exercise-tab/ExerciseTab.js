import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as exerciseActions from '../../../actions/exerciseActions';
import ExerciseList from './ExerciseList';

class ExerciseTab extends React.Component {
    constructor(props, context){
        super(props, context);
    }

    render() {
        const {exercises} = this.props;
        return (
            <div>
                <h1>My Exercises</h1>
                <ExerciseList exercises={exercises} />
            </div>
        );
    }
}

ExerciseTab.propTypes = {
    actions: PropTypes.object.isRequired,
    exercises: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        exercises: state.exercises
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(exerciseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseTab);
