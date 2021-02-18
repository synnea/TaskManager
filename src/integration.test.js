
import { addRegularTask, deleteRegularTask, completeRegularTask } from './store/actions';
import { storeFactory, findByTestAttr, setup } from './test/testUtils';

describe('task actions', () => {
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
        test('set task as complete', () => {
            store.dispatch(completeRegularTask(0));
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
        test('delete task', () => {
            store.dispatch(deleteRegularTask(0));
            const newState = store.getState();
            const expectedState = {regularTasks: []};
            expect(newState).toEqual(expectedState);
        });
    });
    describe('manipulate multiple tasks', () => {
        const initialState = {
            regularTasks: [
                {
                    id: 0,
                    description: 'buy groceries',
                    completed: false
                },
                {
                    id: 1,
                    description: 'get dressed',
                    completed: false
                }]
                }
                let store;
                beforeEach(() => {
                    store = storeFactory(initialState);
         });
         test('clear completed task', () => {
            store.dispatch(clearCompletedTasks([0, 1]));
            const newState = store.getState();
            const expectedState = {regularTasks: []};
            expect(newState).toEqual(expectedState);
         });
    });
});

