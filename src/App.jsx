import { useState } from 'react'
import './App.css'

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(()=>{
    const getEmployees = async() => {
      const response = await fetch('/api/v1/employees');
      const result = await response.json();
      setEmployees(result);
    }
    getEmployees();
  },[]) 

  return (
    <>
      <h1>Acme Employees</h1>

      <ul>
        { 
          employees.map((employee) => {
            return (
              <>
                <li>Name: {employee.name}</li>
                <li>Is an administrator: {employee.is_admin.toString()}</li>
                <br></br>
              </>
            )
          })
        }
      </ul>
    </>
  )
}

export default App
