import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  const [toDoList, setToDoList] = useState([
    {
      title: "Get Python Black Belt",
      done: true
    },
    {
      title: "Get MERN Black Belt",
      done: true
    }
  ]);


  const saveList = (newList) => {
    //Set todolist
    setToDoList(newList);
    //Save to local
    console.log('save to local');
    localStorage.setItem('todolist', JSON.stringify(newList));
  }

  return (
    <div className="App">
      <Form toDoList={toDoList} setToDoList={setToDoList} saveList={saveList} />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} saveList={saveList} />
    </div>
  );
}

export default App;
