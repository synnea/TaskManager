import * as actionTypes from './actionTypes';


export const addRegularTask = ( task ) => {
    return {
        type: actionTypes.ADD_REGULAR_TASK,
        payload: task
    };
};