import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../tasklist/TaskList';
import { setLocalStorage, getLocalStorage } from '../../utilities/localstorage';



const EmployeDashboard = ({data}) => {
  setLocalStorage()
  getLocalStorage()

  
  return (
    <div>
      
     <Header data={data}/>
     <TaskListNumbers data={data}/>
     <TaskList data={data}/>
    </div>
  )
}

export default EmployeDashboard;