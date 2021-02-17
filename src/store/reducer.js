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

            return {
                ...state,
                regularTasks: state.regularTasks.map(task => {
                    if (task.id === action.payload) {
                        task.completed = true
                    }
                    return task;
                })
            }
        default: 
            return state;
    }
};

export default reducer;