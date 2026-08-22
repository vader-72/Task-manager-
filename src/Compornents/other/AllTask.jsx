import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext)
 
  return (
    <div id="alltask" className='bg-black p-5 rounded mt-5'>
        <div className='bg-red-400 flex py-2 rounded justify-between mb-2 '>
            <h2 className='w-1/5 '>Employee Name</h2>
            <h3 className='w-1/5 '>New Task</h3>
            <h5 className='w-1/5 '>Completed Task</h5>
            <h5 className='w-1/5 '>Failed Task</h5>
        </div>
        <div>
            {authData.employees.map(function(elem,idx){
                return(
                    <div key={idx} className='flex border-2 border-emerald-500 justify-between mb-2'>
                        <h2 className='text-xl w-1/5  text-blue-400'>{elem.name}</h2>
                        <h3 className='text-xl w-1/5  text-yellow-400'>{elem.taskNumbers.newTask}</h3>
                        <h5 className='text-xl w-1/5  text-green-400'>{elem.taskNumbers.active}</h5>
                        <h5 className='text-xl w-1/5  text-emerald-400'>{elem.taskNumbers.completed}</h5>
                        <h5 className='text-xl w-1/5  text-red-400'>{elem.taskNumbers.failed}</h5>
                    </div>
                )
            })}

            
            
    
        </div>
        
       
        

    </div>
  )
}

export default AllTask;