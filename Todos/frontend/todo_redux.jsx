
import configureStore from './store/store.js';
import merge from 'lodash/merge';
import {receiveTodo, receiveTodos} from './actions/todo_actions';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Root from './components/root';

let store = configureStore;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.store = store;
window.merge = merge;

// class Root extends React.Component {
//   render() {
//     return (
//       <h1>Hey Eileen</h1>
//     );
//   }
// }

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
