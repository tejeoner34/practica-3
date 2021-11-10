import './task-container.css';
import FormComponent from '../form-component/form';
import React, { useState } from 'react';
import Cards from "../cards/Cards";


function ToDoTaskContainer(props) {

    const [show, setShow] = useState(false);
    let [counter, setCounter] = useState(0);

    const handleCounter = ()=>{
        console.log(counter)

        setCounter(counter = counter +1);
        return counter;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.parentCallBackEvent(e.target.task.value);

    }

    const deleteCard = (childata) => {
        const deletedCard = childata;
        props.updateTodo(deletedCard);
    }

    const moveCard = (childata) =>{
        props.moveTodoCard(childata);
        console.log(childata)
    }

    const deleteInprocessCard =(childata)=>{

        const deleteCard = childata;
        props.updateInProcess(deleteCard);
        
    }

    let contador = 0;
    const updateCounter = () => {
        return contador = contador + 1
    }

    let today = new Date();
    let date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateAndTime ={
        date, time
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
                <button onClick={(e) => setShow(!show)}>+</button>
            </div>

            {
                show ? (
                    <form onSubmit={handleSubmit} className='form-component'>
                        <input type="text" name="task" id="task" placeholder='enter a note' />
                        <div className='form-component__button-container'>
                            <button type='submit' id='add-button'>Add</button>
                            <button onClick={(e) => setShow(false)}>Cancel</button>
                        </div>
                    </form>

                ) : null
            }

            <div className='task-items'>
                {props.toDoTask?.map((i, index) => <Cards moveCard={moveCard} deletedCard={deleteCard} index={index} contador={updateCounter()} data={i} dateAndTime={dateAndTime} ></Cards>)}
                {props.inProcessTask?.map((i, index) => <Cards deletedCard={deleteInprocessCard} index={index} contador={updateCounter()} data={i} dateAndTime={dateAndTime}></Cards>)}
            </div>

        </div>
    )

}

export default ToDoTaskContainer;