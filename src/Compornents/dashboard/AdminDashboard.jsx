import React from 'react'
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';


const AdminDashboard = ({data}) => {
  return (
    <div className='h-screen w-full p-7'>
        <Header data={data}/>
        <CreateTask data={data}/>
        <AllTask data={data} />
    </div>
  )
}

export default AdminDashboard;