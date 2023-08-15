import { useState, useEffect } from 'react';

import AddTask from "./components/AddTask";
import Navbar from "./components/navbar/Navbar";
import Dropped from "./components/dropped/Dropped";
import OnGoing from "./components/on-going/OnGoing";
import Completed from "./components/completed/Completed";

import "./App.css";


let idCounter = 1;

function App() {

  const [ toDoList, setToDoList ] = useState(
    JSON.parse(localStorage.getItem('toDoList')) || []
  );  

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList))
  }, [toDoList])

  const addTask = ( newTask ) => {
    const   newTaskWithId = { ...newTask, id : idCounter}
    idCounter++
    setToDoList([ ...toDoList, newTaskWithId ])
    console.log(toDoList);
  }

  const dropTask = ( itemId, newStatus ) => {
    const updateList = toDoList.map( (item) => {
      if ( item.id === itemId ) {
        return { ...item, status : newStatus, date : new Date().toISOString() }
      }
      return item
    })
    setToDoList(updateList)
  }

  const completeTask = ( itemId, newStatus ) => {
    const updateList = toDoList.map( (item) => {
      if ( item.id === itemId ) {
        return { ...item, status : newStatus, date : new Date().toISOString() }
      }
      return item
    })
    setToDoList(updateList)
  }
  
  const deleteTask = ( itemId ) => {
    const updateList = toDoList.filter((item) => item.id !== itemId)
    setToDoList(updateList)
  }
  
  const restoreTask = ( itemId, newStatus ) => {
    const updateList = toDoList.map( (item) => {
      if ( item.id === itemId ) {
        return { ...item, status : newStatus, date : new Date().toISOString() }
      }
      return item
    })
    setToDoList(updateList)
  }


  return (
    <div className="row app-js">
      <Navbar />
      <AddTask 
        addTask = { addTask } 
        toDoList = { toDoList }
      />
      <Completed 
        toDoList={ toDoList }
        deleteTask= { deleteTask }
      />
      <OnGoing 
        toDoList = { toDoList } 
        dropTask = { dropTask }
        completeTask = { completeTask }
      />
      <Dropped 
        toDoList = { toDoList }
        restoreTask = { restoreTask }
        deleteTask = { deleteTask }
      />
    </div>
  );
}

export default App;
