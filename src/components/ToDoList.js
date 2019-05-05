import React from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

export default class ToDoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "All"
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            // id: todo.id,
            // text: todo.text,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  updateTodoToShow = (s) => {
      this.setState({
          todoToShow: s
      })
  }

  render() {
    let todos = [];

    if (this.state.todoToShow === "All") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "Active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "Complete") {
        todos = this.state.todos.filter(todo => todo.complete);
      }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          Todos Left: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateTodoToShow("All")}>All</button>
          <button onClick={() => this.updateTodoToShow("Active")}>Active</button>
          <button onClick={() => this.updateTodoToShow("Complete")}>Complete</button>
        </div>
      </div>
    );
  }
}
