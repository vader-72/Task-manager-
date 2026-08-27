
import React, {useState} from 'react'

const Login = ({handlelogin}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler=(e ) => {
        e.preventDefault()
        handlelogin(email, password)
        

        setEmail('')
        setPassword('')


    }
    
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
       <div className='border-2 rounded-3xl border-gray-300 bg-zinc-50 bg-transparent p-20 hover:scale-105 transition duration-100 ease-in-out'>
        <div className ='flex items-center justify-center bg-blue-600 mb-10 rounded-xl '><h1 className ='text-4xl text-gray-100 font-semibold p-5 hover:scale-105 transition duration-300 ease-in-out'>Login</h1></div>
        <form onSubmit={(e) => {
            submitHandler(e)
        }} className='flex flex-col items-center justify-center '>
            
            <input
            value={email}
            onChange={(e) =>{
                setEmail(e.target.value)
            }}
            required className=' text-black border-gray-300  outline-none border-2  rounded-2xl py-3 px-5 placeholder:text-gray-400' type="email" placeholder="enter your email"/>
            <input
            value={password} 
            onChange={(e) =>{
                setPassword(e.target.value)
            }}
            required className='text-black mt-5 border-gray-300 outline-none border-2  rounded-2xl py-3 px-5 placeholder:text-gray-400' type="password" placeholder="enter your password" />
            <a className ='mt-2 text-gray-500' href=''>forgot password?</a>
            

            <button className='text-gray-100 mt-5 rounded-2xl hover:scale-105 transition duration-300 ease-in-out px-5 cursor-pointer py-3 text-black-500 border-none outline-none bg-blue-600 hover:bg-blue-700 font-semibold '>Log in</button>
        </form>
        
        </div>
        <div className ='flex w-100 h-125 rounded-3xl items-center justify-center flex-col ml-10 hover:scale-105 transition duration-300 ease-in-out border-2  border-gray-300'>
            <img className ='rounded-3xl  'src='./src/assets/taskmanager.jpeg'/>
        </div>
    </div>
  )
}

export default Login