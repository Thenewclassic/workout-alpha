import React from 'react';

const ActivityLog = () => {
    return (
        <div className="panel panel-default">
            <div className="activity-week">
                <ul className="week-list">
                    <li className="activity-day monday">
                        Mon
                    </li>
                    <li className="activity-day tuesday">
                        Tue
                    </li>
                    <li className="activity-day wednesday">
                        Wed
                    </li>
                    <li className="activity-day thursday">
                        Thu
                    </li>
                    <li className="activity-day friday">
                        Fri
                    </li>
                    <li className="activity-day saturday">
                        Sat
                    </li>
                    <li className="activity-day sunday">
                        Sun
                    </li>
                </ul>
            </div>
            <div className="activities">
                <ul className="activity-list">
                    <li className="activity">
                        <div className="workout run">
                            R
                        </div>
                        <div className="workout run">
                            R
                        </div>
                        <div className="workout gym">
                            G
                        </div>
                    </li>
                    <li className="activity">
                        <div className="workout gym">
                            G
                        </div>
                    </li>
                    <li className="activity">
                        <div className="workout rest">
                            rest
                        </div>
                    </li>
                    <li className="activity">
                        <div className="workout gym">
                            G
                        </div>
                        <div className="workout gym">
                            G
                        </div>
                    </li>
                    <li className="activity">
                        <div className="workout rest">
                            rest
                        </div>
                    </li>
                    <li className="activity">
                        <div className="workout gym">
                            G
                        </div>
                    </li>
                    <li className="activity">
                        <div className="workout gym">
                            G
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ActivityLog;
