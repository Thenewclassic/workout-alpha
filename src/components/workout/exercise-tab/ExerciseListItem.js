import React, {PropTypes} from 'react';

const ExerciseListItem = ({exercise}) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    {exercise.type || "Generic Exercise"}
                </h3>
            </div>
            <div className="panel-body">
                {exercise.name}
            </div>
        </div>
    );
};

ExerciseListItem.propTypes = {
    exercise: PropTypes.object.isRequired
};

export default ExerciseListItem;
