
import { addRegularTask } from './store/actions';
import { storeFactory } from './test/testUtils';

describe('regular tasks', () => {
    const newTask = 'clean the room';
    describe('manipulate empty store', () => {
        const initialState = {
            regularTasks: []
        }
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('updates the store with a new task', () => {
            store.dispatch(addRegularTask(newTask));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                regularTasks: [{
                    id: 0,
                    description: newTask,
                    completed: false
                }]
            };
            expect(newState).toEqual(expectedState);
        });
    });
});