import React from 'react';
import './form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Learn React JS',
          id: 1,
          completed: false,
        },

        {
          task: 'Watch Anime',
          id: 2,
          completed: false,
        },
      ],
      todo: '',
    };
  }

  inputChangeHandler = event => {
    this.setState({ todo: event.target.value });
  };

  addTask = () => {
    let newTask = {
      task: this.state.todo,
      id: Date.now() + Math.random(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTask],
      todo: '',
    });
  };

  completeTodo = () => {
    const todoLists = document.querySelectorAll('.todo-list');
    todoLists.forEach(todoList =>
      todoList.addEventListener('click', () => {
        todoList.classList.add('completed');
      }),
    );
  };

  render() {
    return (
      <div className="form-container form">
        <input
          type="text"
          placeholder="Enter Your todo"
          className="input"
          id="input"
          value={this.state.todo}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              this.addTask(this.state.todo);
              this.setState({ todo: '' });
            }
          }}
          onChange={this.inputChangeHandler}
        />

        <ul className="todos">
          {this.state.todos.map(todo => (
            <li className="todo-list">
              {todo.task}
              <a href="#" onClick={this.completeTodo}>
                x
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Form;
