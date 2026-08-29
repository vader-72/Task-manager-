import React from 'react'


const logOutUser = () => {
  localStorage.setItem('loggedInUser','')
  window.location.reload()
}
const Header = ({data}) => {
  return (
    <div className='mt-2 flex items-center bg-zinc-100 border-3 border-gray-300 rounded-xl p-5 justify-between '>
        <div className ='bg-zinc-200 border-2 border-gray-300 p-3 rounded-xl hover:scale-105 duration-500 ease-in-out'>
          <h1 className=' text-2xl font-medium'>Hello<br/><span className ='text-3xl font-semibold'>{data.name}</span> </h1>
        </div>
        <button onClick={logOutUser} className='hover:scale-105  duration-300 transition ease-in-out bg-red-900 hover:bg-red-950 rounded-2xl px-5 py-3 text-white mr-5 '>Log Out</button>
    </div>
  )
}

export default Header;