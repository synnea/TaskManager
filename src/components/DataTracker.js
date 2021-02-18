import React from 'react';
import { useSelector} from 'react-redux';

const DataTracker = (props) => {
    const tasks = useSelector(state => state.regularTasks);

    return (
        <div>
                 <h6>You have {tasks.length} tasks left to do!</h6>
                 <h6>You have completed a total of {props.completed} tasks!</h6>
        </div>
 
    )
}

export default DataTracker;