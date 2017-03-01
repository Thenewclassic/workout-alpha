// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import workouts from './workoutReducer';
 import ajaxCallsInProgress from './ajaxStatusReducer';

 const rootReducer = combineReducers({
     workouts,
     ajaxCallsInProgress
 });

 export default rootReducer;
