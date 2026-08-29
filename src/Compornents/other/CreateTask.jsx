import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const authData = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignTo, setAssignTo] = useState('')

  if (!authData) return <div>Loading...</div>

  const submitHandler = (e) => {
    e.preventDefault()
    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    }
    authData.addTaskToEmployee(assignTo, task)

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setCategory('')
    setAssignTo('')
  }

  return (
    <div className='p-5 bg-zinc-100 border-3 border-gray-300 rounded-xl mt-7 rounded '>
      <div className ='flex items-start mb-8'><h1 className ='font-semibold text-5xl text-indigo-700  hover:scale-105 duration-500'>Create your Task</h1></div>
      <form onSubmit={submitHandler} className='flex w-full flex-wrap items-start justify-between'>
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-900 mb-1'>Task title</h3>
            <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}
              className='py-1 px-2 w-4/5 text-sm rounded-xl hover:scale-102 duration-500 outline-none bg-transparent border-[1px] border-gray-400'
              type='text' placeholder='Make a project' />
          </div>
          <div>
            <h3 className='text-sm text-gray-900 mb-1'>Date</h3>
            <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)}
              className='py-1 px-2 w-4/5 text-sm rounded-xl hover:scale-102 duration-500 outline-none bg-transparent border-[1px] border-gray-400'
              type='date' />
          </div>
          <div>
            <h3 className='text-sm text-gray-900 mb-1'>Assign to</h3>
            <select value={assignTo} onChange={(e) => setAssignTo(e.target.value)}
              className='py-1 px-2 w-4/5 text-sm rounded-xl hover:scale-102 duration-500 bg-transparent border-[1px] border-gray-400' required>
              <option value=''>Select employee</option>
              {authData.employees.map((emp) => (
                <option key={emp.id} value={emp.name}>{emp.name}</option>
              ))}
            </select>
          </div>
          <div>
            <h3 className='text-sm text-gray-900 mb-1'>Category</h3>
            <input value={category} onChange={(e) => setCategory(e.target.value)}
              className='py-1 px-2 w-4/5 text-sm rounded-xl hover:scale-102 duration-500 outline-none bg-transparent border-[1px] border-gray-400'
              type='text' placeholder='Frontend' />
          </div>
        </div>
        <div className='w-1/2'>
          <div>
            <h3 className='text-xl text-gray-900 mb-1 font-semibold'>Description</h3>
            <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}
              className='w-full h-44 py-1 px-2 text-sm rounded-xl hover:scale-102 duration-500 outline-none bg-transparent border-[1px] border-gray-400' />
          </div>
          <button className='rounded-xl hover:scale-102 duration-500  py-3 bg-indigo-500 hover:opacity-60 px-5 w-full text-sm font-semibold text-gray-200 mt-4'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask