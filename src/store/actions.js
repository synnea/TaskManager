import * as actionTypes from './actionTypes';


export const addRegularTask = ( task ) => {
    return {
        type: actionTypes.ADD_REGULAR_TASK,
        payload: task
    };
};

export const changeRegularInputValue = ( value ) => {
    return {
        type: actionTypes.CHANGE_REGULAR_INPUT_VALUE,
        value: value
    };
};