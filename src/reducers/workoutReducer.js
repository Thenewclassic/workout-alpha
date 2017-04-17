import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function workoutReducer(state = initialState.workouts, action) {
    switch(action.type) {
        case types.LOAD_WORKOUTS_SUCCESS:
            return action.workouts;
        case types.CREATE_WORKOUT_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.exercise)
            ];
        case types.UPDATE_WORKOUT_SUCCESS:
        return [
            ...state.filter((workout) => { return workout.id !== action.workout.id; }),
            Object.assign({}, action.exercise)
        ];
        default:
            return state;
    }
}
