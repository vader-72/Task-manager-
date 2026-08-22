import React,{useEffect, useState,useContext} from 'react'
import Login from './Compornents/auth/Login'
import EmployeDashboard from './Compornents/dashboard/EmployeDashboard'
import AdminDashboard from './Compornents/dashboard/AdminDashboard'
import { setLocalStorage } from './utilities/localstorage'
import { getLocalStorage } from './utilities/localstorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserdata, setLoggedInUserdata] = useState(null)
  const authData = useContext(AuthContext)


  useEffect(() => {
    
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
    
    
  }, [])
  



  const handlelogin = (email, password) => {

    if(authData &&  authData.admin.find((a) => email == a.email && password == a.password)){
      setUser("admin")
      setLoggedInUserdata(authData.admin.find((a) => email == a.email && password == a.password))
      
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if (authData) {
      const employee = authData.employees.find((e) =>email == e.email && password == e.password)
      setUser("employee")
      setLoggedInUserdata(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    }else{
      alert("Invalid email or password")
    }
  } 
  
  

  

  useEffect(() => {
    setLocalStorage() ;
    getLocalStorage() ;
    
  }, )
  

 
  return (
  <>
    {!user ? <Login handlelogin={handlelogin}/> : user === "admin" ? <AdminDashboard data={loggedInUserdata}/> : <EmployeDashboard data={loggedInUserdata}/>}

  </>
  );
    
}

export default App