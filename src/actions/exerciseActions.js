import * as types from './actionTypes';
import ExerciseApi from '../api/mockExercisesApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadExercisesSuccess(exercises) {
    return {
        type: types.LOAD_EXERCISES_SUCCESS,
        exercises
    };
}

export function updateExerciseSuccess(exercise) {
    return {
        type: types.UPDATE_EXERCISE_SUCCESS,
        exercise
    };
}

export function createExerciseSuccess(exercise) {
    return {
        type: types.CREATE_EXERCISE_SUCCESS,
        exercise
    };
}

// thunks
export function loadExercises() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return ExerciseApi.getAllExercises().then((exercises) =>{
            dispatch(loadExercisesSuccess(exercises));
        }).catch((error) => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}
