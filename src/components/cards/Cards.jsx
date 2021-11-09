import React from 'react';
import todo from '../../assets/img/todo.png';
import trash from '../../assets/img/trash.png';
import './style.css';

function Cards() {

    return (
        <div className="main__cards-principal">
            <div className="main__cards">

                <div><img className="todo-icon" src={todo} alt="to do icon" /></div>
                <div><p>Terminar este proyecto a tiempo</p></div>
                <div><img className="trash-icon" src={trash} alt="trash icon" /></div>
            </div>
            <div className="main__cards-date">
                <p>Example of date</p>
            </div>
        </div>
    )

}

export default Cards