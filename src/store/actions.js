import * as actionTypes from './actionTypes';


export const addRegularTask = ( task ) => {
    return {
        type: actionTypes.ADD_REGULAR_TASK,
        payload: task
    };
};

// export const completeAndCountTask = (id) => dispatch => {
//     console.log("inside completeAndCount");
//     return Promise.all([dispatch(completeRegularTask(id)), dispatch(countCompletedTasks)])
// }

export const completeAndCountTask = id => dispatch =>
        Promise.resolve(dispatch(completeRegularTask(id))).then(
        () => dispatch(countCompletedTasks()));

export const completeRegularTask = ( id ) => {
    return {
        type: actionTypes.COMPLETE_REGULAR_TASK,
        payload: id
    };
};

export const deleteRegularTask = ( id ) => {
    return {
        type: actionTypes.DELETE_REGULAR_TASK,
        payload: id
    };
};

export const clearTasks = ( ) => {
    return {
        type: actionTypes.CLEAR_TASKS,
    };
};

export const countCompletedTasks = ( ) => {
    return {
        type: actionTypes.COUNT_COMPLETED_TASKS,
    };
};