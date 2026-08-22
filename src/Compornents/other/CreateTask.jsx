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
    <div className='p-5 bg-black mt-7 rounded'>
      <form onSubmit={submitHandler} className='flex w-full flex-wrap items-start justify-between'>
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
            <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}
              className='py-1 px-2 w-4/5 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400'
              type='text' placeholder='Make a project' />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)}
              className='py-1 px-2 w-4/5 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400'
              type='date' />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <select value={assignTo} onChange={(e) => setAssignTo(e.target.value)}
              className='py-1 px-2 w-4/5 text-sm rounded bg-transparent border-[1px] border-gray-400' required>
              <option value=''>Select employee</option>
              {authData.employees.map((emp) => (
                <option key={emp.id} value={emp.name}>{emp.name}</option>
              ))}
            </select>
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input value={category} onChange={(e) => setCategory(e.target.value)}
              className='py-1 px-2 w-4/5 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400'
              type='text' placeholder='Frontend' />
          </div>
        </div>
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}
              className='w-full h-44 py-1 px-2 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400' />
          </div>
          <button className='rounded py-3 bg-emerald-400 hover:bg-emerald-300 px-5 w-full text-sm mt-4'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask