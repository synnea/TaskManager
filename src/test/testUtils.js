
import { createStore } from 'redux';
import reducer from '../store/reducer';

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

export const storeFactory = (initialState) => {
   return createStore(reducer, initialState);
}