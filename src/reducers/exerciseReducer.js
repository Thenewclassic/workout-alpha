import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function exerciseReducer(state = initialState.exercises, action) {
    switch(action.type) {
        case types.LOAD_EXERCISES_SUCCESS:
            return action.exercises;
        case types.CREATE_EXERCISE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.exercise)
            ];
        case types.UPDATE_EXERCISE_SUCCESS:
        return [
            ...state.filter((exercise) => { return exercise.id !== action.exercise.id; }),
            Object.assign({}, action.exercise)
        ];
        default:
            return state;
    }
}
