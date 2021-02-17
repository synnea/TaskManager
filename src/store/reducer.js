import * as actionTypes from './actionTypes';


const initialState = {
    regularTasks: []
}

export function nextTaskId(tasks) {
    const maxId = tasks.reduce((maxId, tasks) => Math.max(tasks.id, maxId), -1)
    return maxId + 1
  }


const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.ADD_REGULAR_TASK:
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
        case actionTypes.COMPLETE_REGULAR_TASK:
            console.log("inside complete reducer");
            const task = state.regularTasks.filter(task => task.id === action.payload);

            return {
                ...state,
                regularTasks: [
                    ...state.regularTasks,
                    task.completed = true
                ]
            }
        default: 
            return state;
    }
};

export default reducer;