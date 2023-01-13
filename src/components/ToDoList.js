import React, { useEffect, useState } from 'react'

const ToDoList = ({ toDoList, setToDoList, saveList }) => {

    

    useEffect(() => {
        console.log("use effect list");
        //Every render set todolist from local storage
        setToDoList(JSON.parse(localStorage.getItem('todolist')));
    }, []);

   

    //Marcar y desmarcar tareas
    const handleCheck = (title) => {
        const newList = toDoList.map((item) => {
            if (item.title === title) {
                return { ...item, done: !item.done };
            } else {
                return item;
            }
        });
        // setToDoList(newList);
        saveList(newList);
    }

    const handleDelete = (i) => {
        //Retornar los todo menos el del indice indicado
        const newList = toDoList.filter((element, index) => {
            if (i !== index) return element;
        });
        
        // setToDoList(newList);
        saveList(newList);
    }


    return (
        <div>
            {toDoList.map((item, i) => (
                <div key={i} className='row mt-4 align-items-center'>
                    <div className='col-7'>
                        <span style={item.done ? { textDecoration: 'line-through' } : {}}>{item.title}</span>
                    </div>
                    <div className='col-2'>
                        <input className='check' type="checkbox" name="done" checked={item.done} onChange={() => handleCheck(item.title)} />
                    </div>
                    <div className='col-3'>
                        <button className='btn btn-dark btn-delete' onClick={() => handleDelete(i)}>Delete</button>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default ToDoList