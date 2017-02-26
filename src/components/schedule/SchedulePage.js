import React from 'react';

class SchedulePage extends React.Component {
    constructor(){
        super();
        this.state = {
            view: 'week'
        };
    }
    render() {
        return (
            <div>
                <h1>Schedule: {this.state.view}</h1>

            </div>
        );
    }
}

export default SchedulePage;
