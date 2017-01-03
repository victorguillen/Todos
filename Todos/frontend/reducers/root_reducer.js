import {combineReducers} from 'redux';
import todosReducer from './todos_Reducer';

const rootReducer = combineReducers ({
  todos: todosReducer
});

export default rootReducer;
