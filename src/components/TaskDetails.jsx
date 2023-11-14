import React from 'react'
import { useNavigate } from 'react-router-dom';

import Button from './Button';
import { useParams } from 'react-router-dom';
import './TaskDetails.css'

const TaskDetails = (choosenTask) => {
    
    const {task} = choosenTask
    const params = useParams()
    const navigate = useNavigate()

    const handleBackButtonClick = () => {
        navigate(-1)
    }

    return ( 
        <>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    {task.description}
                </p>
            </div>
            <div className='back-button-container'>
                <div className='back-button'>
                    <Button onClick={handleBackButtonClick}>Go Back</Button>
                </div>
            </div>
        </>
     );
}
 
export default TaskDetails;