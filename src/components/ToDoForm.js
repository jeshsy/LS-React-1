import React, { Component } from 'react';
import ToDo from './ToDo';

class ToDoForm extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      todolist: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
    };
  }
  render() {
    return (
      <ToDo data={this.state.todolist} />)
  }
};

export default ToDoForm;