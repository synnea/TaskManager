import * as actionTypes from './actionTypes';


const initialState = {
    regularTasks: [],
    clear: false,
    completed: 0
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
            return {
                ...state,
                regularTasks: state.regularTasks.map(task => {
                    if (task.id === action.payload) {
                        task.completed = true
                    }
                    return task;
                }),
            }
        case actionTypes.DELETE_REGULAR_TASK:
            const updatedArray = state.regularTasks.filter(task => task.id !== action.payload);
            return {
                ...state,
                regularTasks: updatedArray
                }
        case actionTypes.CLEAR_TASKS:
            console.log("inside clearTasks reducer");
            return { 
                ...state,
                clear: !state.clear
            }
        case actionTypes.COUNT_COMPLETED_TASKS:
                return { 
                    ...state,
                    completed: state.completed + 1
                }
        default: 
            return state;
    }
};

export default reducer;