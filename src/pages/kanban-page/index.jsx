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

    const todoForm = (childData) => {
        let array = [];
        array.push(childData);
        setTodo(oldvalue => oldvalue.concat(array));
        console.log(todo)
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



    return (
        <Fragment>


            <div className='main'>
                <ToDoTaskContainer
                 name={toDoTitle}
                 toDoTask={todo} parentCallBackEvent={todoForm}></ToDoTaskContainer>

                 <ToDoTaskContainer
                 name={inProcessTitle}
                 inProcessTask={inProcess}
                 parentCallBackEvent={inProcessForm}
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
