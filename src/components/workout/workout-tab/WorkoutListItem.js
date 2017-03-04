import React, {PropTypes} from 'react';

const WorkoutListItem = ({workout}) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    {workout.type || "Generic Workout"}
                </h3>
            </div>
            <div className="panel-body">
                {workout.name}
            </div>
        </div>
    );
};

WorkoutListItem.propTypes = {
    workout: PropTypes.object.isRequired
};

export default WorkoutListItem;
