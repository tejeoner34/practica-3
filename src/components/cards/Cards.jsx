import React from 'react';
import todoImg from '../../assets/img/todo.png';
import trash from '../../assets/img/trash.png';
import './style.css';

function Cards(props) {

    return (
        <div className="main__cards-principal">
            <div className="main__cards">

                <div><img className="todo-icon" src={todoImg} alt="to do icon" /></div>
                <div><p>{props.data}</p></div>
                <div><img className="trash-icon" src={trash} alt="trash icon" /></div>
            </div>
            <div className="main__cards-date">
                <p>Example of date</p>
            </div>
        </div>
    )

}

export default Cards