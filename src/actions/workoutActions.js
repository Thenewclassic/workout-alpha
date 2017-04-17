import * as types from './actionTypes';
import WorkoutApi from '../api/mockWorkoutsApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadWorkoutsSuccess(workouts) {
    return {
        type: types.LOAD_WORKOUTS_SUCCESS,
        workouts
    };
}

export function updateWorkoutSuccess(workout) {
    return {
        type: types.UPDATE_WORKOUT_SUCCESS,
        workout
    };
}

export function createWorkoutSuccess(workout) {
    return {
        type: types.CREATE_WORKOUT_SUCCESS,
        workout
    };
}

// thunks
export function loadWorkouts() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return WorkoutApi.getAllWorkouts().then((workouts) =>{
            dispatch(loadWorkoutsSuccess(workouts));
        }).catch((error) => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}
