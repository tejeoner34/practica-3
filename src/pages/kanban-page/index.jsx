import React, { Fragment, useState } from "react";
import './style.css';
import ToDoTaskContainer from "../../components/task-container/task-container";
import InprocessTaskContainer from "../../components/inprocess-task-container/inprocess-task-container";
import DoneTaskContainer from "../../components/done-task-container/done-task-container";

import FormComponent from "../../components/form-component/form";

function KanbanPage() {

    const toDoTitle = 'To Do';
    const inProcessTitle = 'In Process';
    const doneTitle = 'Done';

    const [todo, setTodo] = useState([]);
    const [inProcess, setInProcess] = useState([]);
    const [done, setDone] = useState([]);
    const [cardCounter, setCardCounter] = useState(0);

    const todoForm = (childData) => {
        let array = [];
        array.push(childData);
        setTodo(oldvalue => oldvalue.concat(array));
    }

    const inProcessForm = (childData) => {
        let array = [];
        array.push(childData);
        setInProcess(oldvalue => oldvalue.concat(array));
        console.log(inProcess)
    }

    const doneForm = (childData) => {
        let array = [];
        array.push(childData);
        setDone(oldvalue => oldvalue.concat(array));
        console.log(done)
    }

    const moveTodoCard = (childData)=>{
        setTodo(oldvalue=>{
            const array = oldvalue.splice(childData, 1);
            setInProcess(oldProcess=> oldProcess.concat(array));
            return oldvalue.concat([])
        })
    }

    const deleteToDoCard = (childata) => {
        
        setTodo(oldvalue => oldvalue.filter(elemento => oldvalue.indexOf(elemento) != childata)
        )// me esta devolviendo el array de eliminados. necesito algo que me devuelva el array actualizado
    }

    const deleteInProcessCard = (childata) => {
        
        setInProcess(oldvalue => oldvalue.filter(elemento => oldvalue.indexOf(elemento) != childata)
        )// me esta devolviendo el array de eliminados. necesito algo que me devuelva el array actualizado
    }



    return (
        <Fragment>


            <div className='main'>
                <ToDoTaskContainer
                    name={toDoTitle}
                    toDoTask={todo} parentCallBackEvent={todoForm}
                    updateTodo={deleteToDoCard}
                    moveTodoCard={moveTodoCard}></ToDoTaskContainer>

                <ToDoTaskContainer
                    name={inProcessTitle}
                    inProcessTask={inProcess}
                    parentCallBackEvent={inProcessForm}
                    updateInProcess={deleteInProcessCard}
                ></ToDoTaskContainer>

                <DoneTaskContainer
                    name={doneTitle}
                    doneTask={done}
                    parentCallBackEvent={doneForm}
                ></DoneTaskContainer>



                {/* <InprocessTaskContainer
                 parentCallBackEvent={inProcessForm} inProcessTask={inProcess}></InprocessTaskContainer>
                <DoneTaskContainer
                 parentCallBackEvent={doneForm} doneTask={done}></DoneTaskContainer> */}

            </div>


        </Fragment>
    )
}

export default KanbanPage;
