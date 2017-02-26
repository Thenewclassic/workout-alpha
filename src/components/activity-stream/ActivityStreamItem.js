import React, {PropTypes} from 'react';

const ActivityStreamItem = ({activity}) => {
    return (
        <li>
            {activity.name}
        </li>
    );
};

ActivityStreamItem.propTypes = {
    activity: PropTypes.object.isRequired
};

export default ActivityStreamItem;
