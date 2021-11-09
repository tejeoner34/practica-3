import './task-container.css';
import FormComponent from '../form-component/form';
import React from 'react';
import Cards from "../cards/Cards";


function ToDoTaskContainer(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.parentCallBackEvent(e.target.task.value);

    }

    return (
        <div className='task-container'>
            <div className='task-container__top-bar'>

                <div className='task-container__task-counter'>
                    <p>{props.toDoTask?.length}</p>
                    {props.inProcessTask?.length}
                    {props.doneTask?.length}
                </div>
                <h4>{props.name}</h4>
                <button>+</button>



            </div>
            <form onSubmit={handleSubmit} className='form-component'>
                <input type="text" name="task" id="task" placeholder='enter a note' />
                <div className='form-component__button-container'>
                    <button type='submit' id='add-button'>Add</button>
                    {/* <button id='cancel-button'>Cancel</button> */}
                </div>
            </form>
            <div className='task-items'>
                {props.toDoTask?.map(i => <li>{i}</li>)}
                {props.inProcessTask?.map(i => <li>{i}</li>)}
                {props.doneTask?.map(i => <li>{i}</li>)}
            </div>
            <Cards></Cards>
        </div>
    )

}

export default ToDoTaskContainer;