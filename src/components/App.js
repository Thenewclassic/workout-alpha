import React from 'react';
import TopBar from './common/TopBar';
import ActivityLog from './activity-log/ActivityLog';
import WorkoutList from './workout/WorkoutList';
import BottomNavigation from './common/BottomNavigation';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <TopBar />
            <WorkoutList />
            <ActivityLog />
            <BottomNavigation />
        </div>
    );
  }
}

export default App;
