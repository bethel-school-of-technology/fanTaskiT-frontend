import React, { useState, useContext, useEffect } from 'react';
import { TaskListContext } from '../../contexts/TaskListContext';
import { Link, BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Axios from 'axios'; 


const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault(); 

    const listTitle = {
      title: title
    }
    
    if (!editItem) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
    }

    Axios.post(`http://localhost:3001/task`, { listTitle })
    .then(res => {
      console.log(res);
      console.log(res.data);
      return <Redirect to = {{ pathname: `/task` }}/>;
    })
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem)
    } else {
      setTitle('')
    }
  }, [editItem])

 
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm