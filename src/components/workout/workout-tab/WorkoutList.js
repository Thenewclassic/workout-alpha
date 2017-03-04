import React, {PropTypes} from 'react';
import WorkoutListItem from './WorkoutListItem';

const WorkoutList = ({workouts}) => {
    let getWorkoutNodes = () => {
        return workouts.map((workout, idx) => { return <WorkoutListItem key={idx} workout={workout} />; });
    };
    return (
        <div>
            {getWorkoutNodes()}
        </div>

    );
};

WorkoutList.propTypes = {
    workouts: PropTypes.array.isRequired
};

export default WorkoutList;
