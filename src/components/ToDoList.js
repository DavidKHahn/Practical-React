import React from "react";
import TodoForm from "./components/TodoForm";

export default class ToDoList extends React.Component {
    state = {
        todos: []
    };

    addTodo = todo => {
        const newTodos = [todo, ...this.state.todos];
        this.setState({
            todos: newTodos
        })
    };

    render() {
        return (
        <div>
            <TodoForm />
        </div>
        );
    }
}