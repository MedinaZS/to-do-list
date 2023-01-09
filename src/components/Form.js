import React from 'react'

const Form = ({onNewTodo}) => {

    const handleSubmit = (e) => {
        const input = document.getElementById("todo");
        e.preventDefault();
        //Add to the list
        onNewTodo(input.value);
        //Clear input
        input.value="";
    }

    return (
        <form className='myForm' onSubmit={handleSubmit}>
            <div className='form-group'>
                <input id='todo' type="text" className='form-control bg-light' required autoComplete='off'/>
                <button type="submit" className='btn btn-primary'>Add</button>
            </div>
        </form>
    )
}

export default Form