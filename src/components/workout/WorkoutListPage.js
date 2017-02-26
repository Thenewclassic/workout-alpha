import React from 'react';
import WorkoutList from './WorkoutList';

class WorkoutListPage extends React.Component {
    constructor(){
        super();
        this.state = {
            workouts: [
                {
                    name: 'ab blaster'
                },
                {
                    name: 'back buster'
                },
                {
                    name: 'calf cramper'
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <h1>My Workouts</h1>
                <WorkoutList workouts={this.state.workouts} />
            </div>
        );
    }
}

export default WorkoutListPage;
