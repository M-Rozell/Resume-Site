import React from 'react'
import TaskList from "../components/taskComponents/TaskList"
import "../css/TaskModal.css"
import { AiOutlineCloseCircle } from 'react-icons/ai'

function TaskModal({ closeModal }) {
    return (
        <div className='taskContainer'>
            <div className='taskApp'>
                <div className='taskCloseBtn '>
                    <button onClick={() => closeModal(false)}><AiOutlineCloseCircle /></button>
                </div>
                <TaskList />
            </div>
        </div>
    )
}

export default TaskModal