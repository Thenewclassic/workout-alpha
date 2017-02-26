import React from 'react';
import ActivityStreamList from './ActivityStreamList';

class ActivityStreamPage extends React.Component {
    constructor(){
        super();
        this.state = {
            activities: [
                {
                    name: 'workout'
                },
                {
                    name: 'run'
                },
                {
                    name: 'rest'
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <h1>Activity stream</h1>
                <ActivityStreamList activities={this.state.activities} />
            </div>
        );
    }
}

export default ActivityStreamPage;
