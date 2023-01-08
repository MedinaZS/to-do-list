import React from 'react'

const ToDoList = ({ toDoList, setToDoList }) => {

    //Marcar y desmarcar tareas
    const handleCheck = (title) => {
        const newList = toDoList.map((item) => {
            if (item.title === title) {
                return { ...item, done: !item.done };
            } else {
                return item;
            }
        });

        setToDoList(newList);

    }

    const handleDelete = (index) =>{
        console.log(index);
    }

    return (
        <div>
            {toDoList.map((item, i) => (
                <div key={i} className='row mt-4 align-items-center'>
                    <div className='col-8'>
                        <span style={item.done ? { textDecoration: 'line-through' } : {}}>{item.title}</span>
                        <input className='check' type="checkbox" name="done" checked={item.done} onChange={() => handleCheck(item.title)} />
                    </div>
                    <div className='col-4'>
                        <button id='btn-delete' className='btn btn-dark' onClick={() => handleDelete(i)}>Delete</button>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default ToDoList