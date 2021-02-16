import * as actionTypes from './actionTypes';


const initialState = {
    regularTasks: []
}


const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.ADD_REGULAR_TASK:
            console.log("inside reducer");
            console.log(action)
            return {
                ...state,
                regularTasks: [
                    ...state.regularTasks,
                    action.payload
                ]
            }

        case actionTypes.CHANGE_REGULAR_INPUT_VALUE:
             return '';
        default: 
            return state;
    }
};

export default reducer;