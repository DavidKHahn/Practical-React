import React from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

export default class ToDoList extends React.Component {
  state = {
    todos: []
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map(todo => (
          <Todo key={todo.id} text={todo.text} />
        ))}
      </div>
    );
  }
}
