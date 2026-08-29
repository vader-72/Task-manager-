import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex gap-5 mt-10 items-start justify-center p-10 bg-zinc-100 border-2 border-gray-300 rounded-xl flex flex-col '>
      <div className ='flex items-start'>
        <h1 className ='font-semibold text-5xl text-indigo-700 hover:scale-105 duration-500 transition ease-in-out border-b-2 py-2 border-indigo-700'>Your Tasks</h1>
      </div>
        
      <div className ='flex items-center justify-between gap-x-10  mt-10 border-gray-300 rounded-xl w-full'>
        
        <div className ='rounded-xl p-9 w-[45%] bg-zinc-200 border-3 border-gray-300 hover:scale-105 duration-500 transition ease-in-out'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium text-cyan-500'>New Task</h3>
      </div>
      <div className ='rounded-xl p-9 w-[45%] bg-zinc-200 border-3 border-gray-300 hover:scale-105 duration-500 transition ease-in-out'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
        <h3 className='text-xl font-medium text-emerald-600'>Completed Task</h3>
      </div>
      <div className ='rounded-xl p-9 w-[45%] bg-zinc-200 border-3 border-gray-300 hover:scale-105 duration-500 transition ease-in-out'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
        <h3 className='text-xl font-medium text-indigo-700'>Active Task</h3>
      </div>
      <div className ='rounded-xl p-9 w-[45%] hover:scale-105 duration-500 transition ease-in-out bg-zinc-200 border-3 border-gray-300 '>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium text-red-700'>Failed Task</h3>
      </div>
    </div>
    </div>
  )
}

export default TaskListNumbers