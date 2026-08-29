import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext)
 
  return (
    <div id="alltask" className='bg-zinc-100 p-5 rounded mt-5 border-3 border-gray-300 rounded-xl '>
        <div className ='flex items-center justify-start p-5 '><h1 className='text-5xl font-semibold mb-10 text-indigo-700 hover:scale-105 duration-500 '>All of the Tasks</h1></div>
        <div className='bg-indigo-500 flex p-5 rounded-xl justify-between mb-10 '>
            <h2 className='w-1/5 text-lg fonts-semibold text-gray-200'>Employee Name</h2>
            <h3 className='w-1/5 text-lg fonts-semibold text-gray-200'>New Task</h3>
            <h3 className='w-1/5 text-lg fonts-semibold text-gray-200'>Active Task</h3>
            <h5 className='w-1/5 text-lg fonts-semibold text-gray-200'>Completed Task</h5>
            <h5 className='w-1/5 text-lg fonts-semibold text-gray-200'>Failed Task</h5>
        </div>
        <div>
            {authData.employees.map(function(elem,idx){
                return(
                    <div key={idx} className='flex border-2 border-gray-400 justify-between rounded-xl p-2 mb-2 hover:scale-105 duration-300 hover:bg-zinc-200'>
                        <h2 className='text-xl w-1/5  text-gray-900'>{elem.name}</h2>
                        <h3 className='text-xl w-1/5  text-gray-900'>{elem.taskNumbers.newTask}</h3>
                        <h5 className='text-xl w-1/5  text-gray-900'>{elem.taskNumbers.active}</h5>
                        <h5 className='text-xl w-1/5  text-gray-900'>{elem.taskNumbers.completed}</h5>
                        <h5 className='text-xl w-1/5  text-gray-900'>{elem.taskNumbers.failed}</h5>
                    </div>
                )
            })}

            
            
    
        </div>
        
       
        

    </div>
  )
}

export default AllTask;