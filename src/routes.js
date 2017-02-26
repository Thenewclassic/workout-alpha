import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ActivityStreamPage from './components/activity-stream/ActivityStreamPage';
import WorkoutListPage from './components/workout/WorkoutListPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ActivityStreamPage} />
        <Route path="/workouts" component={WorkoutListPage} />
    </Route>
);
