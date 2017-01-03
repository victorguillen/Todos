import merge from 'lodash/merge';
import {RECEIVE_TODOS} from '../actions/todo_actions.js';
import {RECEIVE_TODO} from '../actions/todo_actions.js';

const initialState = {
  1: {
    id: 1,
    title: "Sharper our knowledge of Redux",
    body: "yes please",
    done: false
  },

  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {

  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TODOS:
      newState = merge({}, action.todos);
      return newState;
    case RECEIVE_TODO:
      let newTodo = { [action.todo.id]: action.todo };

      newState = merge(newState, newTodo);
      return newState;
    default:
      return state;
  }
};
export default todosReducer;
