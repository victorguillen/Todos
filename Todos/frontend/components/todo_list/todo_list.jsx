import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {


  render () {
    const {todos, receiveTodo} = this.props;
    const listItems = todos.map( (todo) => (
      <TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo}/>
    ));

    return (
      <div>
        <ul>This is the Todo List
          { listItems }
        </ul>
        <TodoForm receiveTodo={receiveTodo}/>
      </div>
    );
  }
}

export default TodoList;
