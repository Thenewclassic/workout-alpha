import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ActivityStreamPage from './components/activity-stream/ActivityStreamPage';
import WorkoutPage from './components/workout/WorkoutPage';
import ExerciseTab from './components/workout/exercise-tab/ExerciseTab';
import WorkoutTab from './components/workout/workout-tab/WorkoutTab';
import SchedulePage from './components/schedule/SchedulePage';
import ProfilePage from './components/profile/ProfilePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ActivityStreamPage} />
        <Route path="/workout" component={WorkoutPage} >
            <Route path="/exercises" component={ExerciseTab} />
            <Route path="/workouts" component={WorkoutTab} />
        </Route>
        <Route path="/schedule" component={SchedulePage} />
        <Route path="/profile" component={ProfilePage} />
    </Route>
);
