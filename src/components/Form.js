import React, { useState } from 'react'

const Form = ({toDoList, setToDoList, saveList}) => {

    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        //Add to the list
        const newList = [...toDoList, { title: value, done: false }];
        saveList(newList);

        //Clear input
        setValue("");
        document.getElementById("todo").focus();
    }


    return (
        <form className='myForm' onSubmit={handleSubmit}>
            <div className='form-group'>
                <input id='todo' type="text" className='form-control bg-light' required autoComplete='off' onChange={(e)=>setValue(e.target.value)} value={value}/>
                <button type="submit" className='btn btn-primary'>Add</button>
            </div>
        </form>
    )
}

export default Form