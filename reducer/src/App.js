import React, { useReducer } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { initialState, todoReducer } from "./reducers/todoReducer";

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // This is adding a TODO to our state
  const addTodo = item => dispatch({ type: "ADD_TODO", payload: item });

  // This is toggling a TODO's complete
  const toggleCompleted = id => dispatch({ type: "TOGGLE_COMPLETED", id: id });

  // This is filtering out the completed TODOs
  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });

  // This is updating a selected TODO
  const updateTodo = (task, id) =>
    dispatch({ type: "UPDATE_TODO", payload: { task, id } });

  return (
    <div className="App">
      <div className="header">
        <h1>Todos</h1>
        <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
        <TodoList
          todos={state.todos}
          toggleCompleted={toggleCompleted}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
};

export default App;
