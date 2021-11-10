import React from 'react';
import todoImg from '../../assets/img/todo.png';
import trash from '../../assets/img/trash.png';
import './style.css';

function Cards(props) {


    const handleDelete = (e) => {
        props.deletedCard(props.index)

    }

    const handleClick = (e) =>{
        props.moveCard(props.index)
    }

    
    return (
        <div className="main__cards-principal">
            <div className="main__cards">

                <div><img className="todo-icon" src={todoImg} alt="to do icon" /></div>
                <div onClick={handleClick}><p>{props.data}</p></div>
                <div><img className="trash-icon" onClick={handleDelete} src={trash} alt="trash icon" /></div>
            </div>
            <div className="main__cards-date">
                <p>{props.contador} {props.contar}Created on {props.dateAndTime.date} {props.dateAndTime.time}</p>
            </div>
        </div>
    )

}

export default Cards