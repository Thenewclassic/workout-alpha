import React from 'react';
import ActivityStreamItem from './ActivityStreamItem';

class ActivityStreamList extends React.Component {
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

    _getActivities() {
        return this.state.activities.map((activity, idx) => {return <ActivityStreamItem activity={activity} key={idx} />;});
    }

    render() {

        return (
            <ul className="stream-list activity-stream">
                {this._getActivities()}
            </ul>
        );
    }
}

export default ActivityStreamList;
