import React, {PropTypes} from 'react';
import ActivityStreamItem from './ActivityStreamItem';

const ActivityStreamList = ({activities}) => {


    let getActivities = () => {
        return activities.map((activity, idx) => {return <ActivityStreamItem activity={activity} key={idx} />;});
    };


    return (
        <ul className="stream-list activity-stream">
            {getActivities()}
        </ul>
    );

};

ActivityStreamList.propTypes = {
    activities: PropTypes.array.isRequired
};

export default ActivityStreamList;
