
import TaskList from "../components/taskComponents/TaskList";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import "../css/TaskModal.css";
import React from 'react';

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
};

export default TaskModal;