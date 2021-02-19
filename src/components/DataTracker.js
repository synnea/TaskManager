import React from 'react';
import { useSelector} from 'react-redux';
import {createSelector} from 'reselect';

const selectNumOfRemainingTasks = createSelector(
    (state) => state.regularTasks,
    (regularTasks) => regularTasks.filter((task) => task.completed === false).length
  )


const DataTracker = () => {
    const numOfRemainingTasks = useSelector(selectNumOfRemainingTasks)
    const numOfCompletedTasks = useSelector(state => state.completed);

    return (
        <div>
                 <h6>You have {numOfRemainingTasks} tasks left to do!</h6>
                 <h6>You have completed a total of {numOfCompletedTasks} tasks!</h6>
        </div>
 
    )
}

export default DataTracker;