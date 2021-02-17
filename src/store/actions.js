import * as actionTypes from './actionTypes';


export const addRegularTask = ( task ) => {
    return {
        type: actionTypes.ADD_REGULAR_TASK,
        payload: task
    };
};

export const completeRegularTask = ( id ) => {
    return {
        type: actionTypes.COMPLETE_REGULAR_TASK,
        payload: id
    };
};