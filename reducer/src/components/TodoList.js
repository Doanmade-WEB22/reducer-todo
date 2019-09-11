import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todoList">
      {props.data.map(todo => (
        <Todo key={todo.id} toggleTodo={props.toggleTodo} todo={todo} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Todo
      </button>
    </div>
  );
};

export default TodoList;
