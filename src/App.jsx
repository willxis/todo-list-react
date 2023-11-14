import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

import "./App.css";
import './components/global.css'

const App = () => {

  const [task, setTask] = useState()

  const [tasks, setTasks] = useState([])
    /** API Parameters (freetestapi)
     * id:    number
     * title:    string
     * description:    string
     * dueDate:    string
     * priority:    string
     * completed:    boolean
     */

  useEffect(() => {
    const fetchTasks = async () => {
      //const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10'); -- This API has no description for the task
      const {data} = await axios.get('https://freetestapi.com/api/v1/todos?limit=10');
      setTasks(data)
    }

    fetchTasks()
  }, [])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return {...task, completed: !task.completed}
      return task
    })

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle, taskDescription) => {
    const newTasks = [ 
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        description: taskDescription,
        completed: false,
      }
    ]

    setTasks(newTasks)
  }

  const handleTaskRemoval = (taskId) => {
    const newTasks = tasks.filter(task => taskId !== task.id)
    setTasks(newTasks)
  }

  const handleChosenTask = (task) => {
      setTask(task)
  }

  return (
    <Router>
      <Routes>
        <Route path="*" element={
          <div className="container">
            <Header>My Tasks</Header>
            <Routes>
              <Route path="/" exact element={
                <>
                  <AddTask handleTaskAddition={handleTaskAddition} />
                  <Tasks 
                  tasks = { tasks } 
                  handleTaskClick = {handleTaskClick}
                  handleTaskRemoval = {handleTaskRemoval} 
                  handleChosenTask = {handleChosenTask}/>
                </>
              }/>
              <Route path="/:taskTitle" element={
                <TaskDetails task = { task } />}>
              </Route>
            </Routes>
          </div>
        }/>
      </Routes>
    </Router>
  )
}

export default App;