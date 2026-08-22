import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0  h-full w-[300px] rounded-xl  bg-red-400'>
       <div className='flex justify-between p-5 '> 
        <h3 className='bg-blue-400 font-medium rounded-xl p-3'>{data.category}</h3>
        <h4 className='bg-emerald-500 font-semibold  rounded-xl p-3 '>{d}</h4>
        </div>
        <div className='mt-3'>
            <h4 className='text-xl font-semibold'>{data.taskTitle}</h4>
            <p className='mt-3 text-sm'>{data.taskDescription}</p>
        </div>
        <div className='flex justify-between mt-4 p-5'>
            <button className='bg-green-500 text-white py-2 px-4 rounded-xl'>New Task</button>
            
        </div>
        
    </div>
    
    

  )
}

export default NewTask