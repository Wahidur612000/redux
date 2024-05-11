import { createStore } from 'redux'; // Import createStore function directly from redux

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'incrementby2') {
    return {
      counter: state.counter + 2
    };
  }
  if (action.type === 'decrementby2') {
    return {
      counter: state.counter - 2
    };
  }
  return state;
};

const store = createStore(counterReducer); // Use createStore function directly

export default store;