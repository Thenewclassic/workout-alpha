import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ActivityStreamPage from './components/activity-stream/ActivityStreamPage';
import WorkoutPage from './components/workout/WorkoutPage';
import ExerciseList from './components/workout/exercise-tab/ExerciseTab';
import SchedulePage from './components/schedule/SchedulePage';
import ProfilePage from './components/profile/ProfilePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ActivityStreamPage} />
        <Route path="/workouts" component={WorkoutPage}>
            <Route path="/exercises" component={ExerciseList} />
        </Route>
        <Route path="/schedule" component={SchedulePage} />
        <Route path="/profile" component={ProfilePage} />
    </Route>
);
