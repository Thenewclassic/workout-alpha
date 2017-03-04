// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import workouts from './workoutReducer';
 import exercises from './exerciseReducer';
 import ajaxCallsInProgress from './ajaxStatusReducer';

 const rootReducer = combineReducers({
     workouts,
     exercises,
     ajaxCallsInProgress
 });

 export default rootReducer;
