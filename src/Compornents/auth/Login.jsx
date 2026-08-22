
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
       <div className='border-2 border-emerald-200 p-20'>
        <form onSubmit={(e) => {
            submitHandler(e)
        }} className='flex flex-col items-center justify-center '>
            
            <input
            value={email}
            onChange={(e) =>{
                setEmail(e.target.value)
            }}
            required className=' text-white border-emerald-200  outline-none border-2 bg-transparent rounded-full py-3 px-5 placeholder:text-gray-400'type="email" placeholder="enter your email"/>
            <input
            value={password} 
            onChange={(e) =>{
                setPassword(e.target.value)
            }}
            required className='text-white mt-5 border-emerald-200 outline-none border-2  rounded-full py-3 px-5 placeholder:text-gray-400' type="password" placeholder="enter your password" />

            <button className='mt-5 rounded-full px-5 py-3 text-gray-500 border-none outline-none bg-emerald-400'>Log in</button>
        </form>
        </div>
    </div>
  )
}

export default Login