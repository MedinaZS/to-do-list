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

  const NewTodo = (title) => {
    setToDoList([...toDoList, { title: title, done: false }]);
  }

  return (
    <div className="App">
      <Form onNewTodo={NewTodo}/>
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;
