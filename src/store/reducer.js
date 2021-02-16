import * as actionTypes from './actionTypes';


const initialState = {
    regularTasks: []
}

function nextTaskId(tasks) {
    const maxId = task.reduce((maxId, task) => Math.max(task.id, maxId), -1)
    return maxId + 1
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
                    {
                        // auto-incrementing numeric ID for this example
                        id: nextTaskId(state.regularTasks),
                        description: action.payload,
                        completed: false
                      }
                ]
            }

        case actionTypes.CHANGE_REGULAR_INPUT_VALUE:
             return '';
        default: 
            return state;
    }
};

export default reducer;