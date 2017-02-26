import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ActivityStreamPage from './components/activity-stream/ActivityStreamPage';
import WorkoutListPage from './components/workout/WorkoutListPage';
import SchedulePage from './components/schedule/SchedulePage';
import ProfilePage from './components/profile/ProfilePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ActivityStreamPage} />
        <Route path="/workouts" component={WorkoutListPage} />
        <Route path="/schedule" component={SchedulePage} />
        <Route path="/profile" component={ProfilePage} />
    </Route>
);
