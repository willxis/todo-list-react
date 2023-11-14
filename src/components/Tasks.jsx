import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskRemoval, handleChosenTask}) => {
    return (
        <>
            { tasks.map( 
                task => <Task key={task.id} 
                    task = {task} 
                    handleTaskClick ={handleTaskClick} 
                    handleTaskRemoval={handleTaskRemoval}
                    handleChosenTask={handleChosenTask}/> 
            ) }
        </>
    )
}

export default Tasks;