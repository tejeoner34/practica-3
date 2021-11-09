import './task-container.css';
import FormComponent from '../form-component/form';
import React, {useState} from 'react';
import Cards from "../cards/Cards";


function ToDoTaskContainer(props) {

    const [show, setShow] = useState(false);

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
                <button onClick={(e)=>setShow(!show)}>+</button>
            </div>

            {
                show? (
                    <form onSubmit={handleSubmit} className='form-component'>
                <input type="text" name="task" id="task" placeholder='enter a note' />
                <div className='form-component__button-container'>
                    <button type='submit' id='add-button'>Add</button>
                    <button onClick={(e)=>setShow(false)}>Cancel</button>
                </div>
            </form>

                ): null
            }
            
            <div className='task-items'>
                {props.toDoTask?.map(i =><Cards data={i}></Cards>)}
                {props.inProcessTask?.map(i =><Cards data={i}></Cards>)}
            </div>
            
        </div>
    )

}

export default ToDoTaskContainer;