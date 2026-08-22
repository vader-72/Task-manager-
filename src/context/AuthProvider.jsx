import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utilities/localstorage'

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [userdata, setUserdata] = useState(null)

  useEffect(() => {
    let stored = getLocalStorage()
    if (!stored.employees || !stored.admin) {
      setLocalStorage()
      stored = getLocalStorage()
    }
    setUserdata(stored)
  }, [])

  const addTaskToEmployee = (employeeName, task) => {
    setUserdata((prev) => {
      const updatedEmployees = prev.employees.map((emp) =>
        emp.name !== employeeName
          ? emp
          : {
              ...emp,
              tasks: [...emp.tasks, task],
              taskNumbers: { ...emp.taskNumbers, newTask: emp.taskNumbers.newTask + 1 }
            }
      )
      localStorage.setItem('employees', JSON.stringify(updatedEmployees))
      return { ...prev, employees: updatedEmployees }
    })
  }

  return (
    <AuthContext.Provider value={userdata ? { ...userdata, addTaskToEmployee } : null}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider