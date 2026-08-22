import React from 'react'


const logOutUser = () => {
  localStorage.setItem('loggedInUser','')
  window.location.reload()
}
const Header = ({data}) => {
  return (
    <div className='mt-2 flex items-end justify-between '>
        <h1 className=' text-2xl font-medium'>Hello<br/><span className ='text-3xl font-semibold'>{data.name}</span> </h1>
        <button onClick={logOutUser} className='bg-red-500 rounded-full px-5 py-3 text-white '>Log Out</button>
    </div>
  )
}

export default Header;