import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ActivityStreamPage from './components/activity-stream/ActivityStreamPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ActivityStreamPage} />
    </Route>
);
