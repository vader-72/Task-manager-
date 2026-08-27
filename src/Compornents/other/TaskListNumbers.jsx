import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex gap-5 mt-10 items-center justify-between  '>
      <div className ='rounded-xl py-6 px-9 w-[45%] bg-sky-400 hover:scale-105 duration-500 transition ease-in-out'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className ='rounded-xl py-6 px-9 w-[45%] bg-emerald-500 hover:scale-105 duration-500 transition ease-in-out'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className ='rounded-xl py-6 px-9 w-[45%] bg-red-700 hover:scale-105 duration-500 transition ease-in-out'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
        <h3 className='text-xl font-medium'>Active Task</h3>
      </div>
      <div className ='rounded-xl py-6 px-9 w-[45%] hover:scale-105 duration-500 transition ease-in-out bg-zinc-400 '>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers