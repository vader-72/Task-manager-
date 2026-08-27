
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
       <div className='border-2 rounded-3xl border-blue-200 p-30 '>
        <form onSubmit={(e) => {
            submitHandler(e)
        }} className='flex flex-col items-center justify-center '>
            
            <input
            value={email}
            onChange={(e) =>{
                setEmail(e.target.value)
            }}
            required className=' text-white border-blue-200  outline-none border-2 bg-transparent rounded-full py-3 px-5 placeholder:text-gray-400'type="email" placeholder="enter your email"/>
            <input
            value={password} 
            onChange={(e) =>{
                setPassword(e.target.value)
            }}
            required className='text-white mt-5 border-blue-200 outline-none border-2  rounded-full py-3 px-5 placeholder:text-gray-400' type="password" placeholder="enter your password" />

            <button className='mt-5 rounded-3xl hover:scale-105 transition duration-300 ease-in-out px-5 cursor-pointer py-3 text-black-500 border-none outline-none bg-blue-500 hover:bg-blue-400 font-semibold '>Log in</button>
        </form>
        </div>
    </div>
  )
}

export default Login