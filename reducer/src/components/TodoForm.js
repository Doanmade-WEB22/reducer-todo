import React, { useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChanges = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addTodo(input);
    setInput("");
  };

  const clearCompleted = e => {
    e.preventDefault();
    props.clearCompleted();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo" value={input} onChange={handleChanges} />
      <button type="submit">Add Todo!</button>
      <button onClick={clearCompleted}>Clear Completed!</button>
    </form>
  );
}
