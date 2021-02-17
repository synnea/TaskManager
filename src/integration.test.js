
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
        test('add new task to store', () => {
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
    describe('manipulate existing store', () => {
        const initialState = {
            regularTasks: [
                {
                    id: 0,
                    description: 'buy groceries',
                    completed: false
                }]
        }
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('add new task to store', () => {
            store.dispatch(addRegularTask(newTask));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                regularTasks: [ ...initialState.regularTasks,
                    {
                    id: 1,
                    description: newTask,
                    completed: false
                }]
            };
            expect(newState).toEqual(expectedState);
        });
        test('remove task from store', () => {
            store.dispatch(completeRegularTask(newTask));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                regularTasks: [
                    {
                    id: 0,
                    description: 'buy groceries',
                    completed: true
                }]
            };
            expect(newState).toEqual(expectedState);
        });
    });
});