import React from 'react';
import { CgClose, CgInfo } from "react-icons/cg"
import { useNavigate } from 'react-router-dom';

import "./Task.css"

const Task = ({ task, handleTaskClick, handleTaskRemoval, handleChosenTask}) => {
    const navigate = useNavigate()

    const handleTaskDetailsClick = (task) => {
        handleChosenTask(task)
        navigate(`/${task.title}`)
    }
     
    return (
            <div className='task-container' 
            style={task.completed ? {borderLeft: "6px solid var(--highlight-color)"} : {}}>
                
                <div className='task-title' 
                onClick={() => handleTaskClick(task.id)}>
                    {task.title}
                </div>

                <div className='buttons-container'>
                    <button className='remove-task-button' 
                    onClick={() => handleTaskRemoval(task.id)}>
                        <CgClose/>
                    </button>
                    
                    <button className='show-task-details-button'
                    onClick={() => handleTaskDetailsClick(task)} >
                        <CgInfo/>
                    </button>
                </div>
            </div>
    )
}

 
export default Task;