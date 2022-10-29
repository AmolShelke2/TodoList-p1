import React from "react";
import "./form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Learn React JS",
          id: 1,
          completed: false,
        },

        {
          task: "Watch Anime",
          id: 2,
          completed: false,
        },
      ],
      todo: "",
    };
  }

  inputChangeHandler = (event) => {
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
      todo: "",
    });
  };

  toggleComplete = (itemId) => {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === itemId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos, todo: "" });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    const todos = this.state.todos.map((todo) => ({
      ...todo,
      completed: false,
    }));

    this.setState({
      todos,
    });
  };

  render() {
    console.log(this.state);

    return (
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter Your todo"
          className="input"
          id="input"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              this.addTask(this.state.todo);
              this.setState({ todo: "" });
            }
          }}
          onChange={this.inputChangeHandler}
        />

        <ul className="todos">
          {this.state.todos.map((todo) => (
            <li className="todo-list">{todo.task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Form;
