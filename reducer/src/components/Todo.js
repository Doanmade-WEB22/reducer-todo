import React, { useState } from "react";
// import "../styles.css";

export default function Todo(props) {
  const [editing, setEditing] = useState(false);
  const [editedInput, setEditedInput] = useState("");

  const handleChanges = event => {
    setEditedInput(event.target.value);
  };

  const renderEdit = () => {
    setEditing(true);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.updateTodo(editedInput, props.todo.id);
    setEditing(false);
  };

  if (editing) {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="editedInput"
          value={editedInput}
          placeholder={props.todo.task}
          onChange={handleChanges}
        />
        <button type="submit">Update Todo</button>
      </form>
    );
  }

  return (
    <div className="todos">
      <h3 className={props.todo.completed ? "completed" : null}>
        {props.todo.task} <button onClick={renderEdit}>Edit</button>
        <button onClick={() => props.toggleCompleted(props.todo.id)}>
          Completed
        </button>
      </h3>
    </div>
  );
}
