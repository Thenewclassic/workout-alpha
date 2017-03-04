import React, {PropTypes} from 'react';
import ExerciseListItem from './ExerciseListItem';

const ExerciseList = ({exercises}) => {
    let getExerciseNodes = () => {
        return exercises.map((exercise, idx) => { return <ExerciseListItem key={idx} exercise={exercise} />; });
    };
    return (
        <div>
            {getExerciseNodes()}
        </div>

    );
};

ExerciseList.propTypes = {
    exercises: PropTypes.array.isRequired
};

export default ExerciseList;
