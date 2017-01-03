import React from 'react';

import merge from 'lodash/merge';
import uniqueId from '../../util/unique_id';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = { title: '', body: '' };
  }

  update(title) {
    return ( event => this.setState( {[title]: event.currentTarget.value} ) );
  }

  handleSubmit(event) {
    event.preventDefault();
    const todo = merge({}, this.state, { id: uniqueId()});
    this.props.receiveTodo(todo);
    this.setState( { title: '', body: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Title
          <br/>
          <input
            onChange={this.update("title")}
            value={this.state.title}/>
        </label>
        <br/>
        <label>Body
          <br/>
          <input
            onChange={this.update("body")}
            value={this.state.body}/>
        </label>
        <br/>
        <button>Submit your todo</button>
      </form>
    );
  }
}

export default TodoForm;
