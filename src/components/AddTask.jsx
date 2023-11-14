import React, { useState } from 'react'
import "./AddTask.css"
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
    const [inputTitle, setInputTitle] = useState("")
    const [inputDescription, setInputDescription] = useState("")

    const handleInputTitleChange = (e) => {
        setInputTitle(e.target.value)
    }

    const handleInputDescriptionChange = (e) => {
        setInputDescription(e.target.value)
    }

    const handleAddTaskClick = () => {
        if(inputTitle.trim().length >0 && inputDescription.trim().length >0 ) {
            handleTaskAddition(inputTitle, inputDescription)
            setInputTitle("")
            setInputDescription("")
        }
    }
     
    return ( 
        <div className='add-task-container'>
           <div className='add-task-row-1'>
                <input 
                    onChange={handleInputTitleChange} 
                    className="add-task-input" 
                    value={inputTitle}
                    type="text" 
                    placeholder='Title'
                    />
                <div className="add-task-button-container">
                    <Button onClick={handleAddTaskClick}>Adicionar</Button>
                </div>
            </div>
            <div className='add-task-row-2'>
                <textarea 
                    onChange={handleInputDescriptionChange} 
                    className="add-task-input" 
                    value={inputDescription}
                    type="text" 
                    placeholder='Description'
                    />
            </div>
        </div>
     );
}
 
export default AddTask;