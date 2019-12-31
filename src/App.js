import React from "react";
import ToDoList from "./components/todoList";
import H2 from "./components/header";

const App = () => {
  return (
    <div>
      <H2>ReactJS Todo-List</H2>
      <ToDoList />
    </div>
  );
};

export default App;
