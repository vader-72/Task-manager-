import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0  h-full w-[300px] rounded-xl  bg-zinc-200 border-3 border-gray-300 hover:scale-105 duration-500 transition ease-in-out'>
       <div className='flex justify-between p-5 '> 
        <h3 className='text-indigo-700  p-3 border-b'>{data.category}</h3>
        <h4 className='text-gray-900 p-3 border-b'>{d}</h4>
        </div>
        <div className='p-3'>
            <h4 className='text-xl font-semibold text-indigo-700'>{data.taskTitle}</h4>
            <p className='mt-3 text-sm'>{data.taskDescription}</p>
        </div>
        <div className='flex justify-between  p-3'>
            <button className='text-cyan-500 hover:opacity-70'>New Task</button>
            
        </div>
        
    </div>
    
    

  )
}

export default NewTask