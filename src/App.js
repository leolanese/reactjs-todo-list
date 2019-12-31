import React from "react";
import ToDoList from "./components/todoList";
import Header from "./components/header";

const App = () => {
  return (
    <div>
      <Header>ReactJS Todo-List</Header>
      <ToDoList></ToDoList>
    </div>
  );
};

export default App;
