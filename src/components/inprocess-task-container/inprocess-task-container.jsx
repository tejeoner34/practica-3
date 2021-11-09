

function InprocessTaskContainer(props){

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.parentCallBackEvent(e.target.task.value);
    
    }

    return(
        <div className='task-container'>
            <div className='task-container__top-bar'>
                

            </div>
            <form onSubmit={handleSubmit} className='form-component'>
            <input type="text" name="task" id="task" placeholder='enter a note'/>
            <div className='form-component__button-container'>
                <button type='submit' id='add-button'>Add</button>
                {/* <button id='cancel-button'>Cancel</button> */}
            </div>
        </form>
        <div className='task-items'>
            {props.inProcessTask?.map(i=> <li>{i}</li>)}
        </div>
        </div>
    )

}


export default InprocessTaskContainer;