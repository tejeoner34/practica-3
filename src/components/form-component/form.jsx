import './form.css'

function FormComponent(props){


    const handleSubmit = (e) =>{
        e.preventDefault();
        props.parentCallBackEvent(e.target.task.value);

    }


    return(
        
        <form onSubmit={handleSubmit} className='form-component'>
            <input type="text" name="task" id="task" placeholder='enter a note'/>
            <div className='form-component__button-container'>
                <button type='submit' id='add-button'>Add</button>
                <button id='cancel-button'>Cancel</button>
            </div>
            
        </form>
    )
}

export default FormComponent;