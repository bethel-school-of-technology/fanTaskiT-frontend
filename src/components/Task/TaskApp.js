import React from "react";
import TaskListContextProvider from "../../contexts/TaskListContext";
import TaskList from "../Task/TaskList";
import TaskForm from "../Task/TaskForm";
import "./Task.css";


const TaskApp = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div></div>
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
    
  );
};

export default TaskApp;