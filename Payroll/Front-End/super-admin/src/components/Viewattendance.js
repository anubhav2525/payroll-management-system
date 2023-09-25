import React, { useState } from 'react'
import Sidebar from './Sidebar'
import './Viewattendance.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Viewattendance() {
  const [Post, setPost] = React.useState([]);
  const [employeeId, setEmployeeId] = useState('');
  const [month, setmonth] = useState('');
  const navigate = useNavigate();
  const combinedState = { data1: employeeId, data2: month };
  const navigatetosalarysip = (e) => {
    e.preventDefault();
    navigate("/salaryslip", { state: combinedState });
  };

  const sendData = async (employeeId, month) => {
    try {
      const response = await axios.post('http://localhost:8000/api/view-attendance', {
        employeeId: employeeId,
        month: month,
      });
      setPost(response.data);
      console.log(Post);
    } catch (error) {
      console.error(error);
    }
  };
  const handleAccept = (event) => {
    event.preventDefault();
    sendData(employeeId, month);
  };
  return (
    <div id='main'>
      <Sidebar />
      <div id='viewattendance'>
        <h4>View Attendance</h4>
        <div className='viewattendance'>
          <span>Employee ID : <input type='text' name='emp_id' onChange={(event) => setEmployeeId(event.target.value)}></input></span>
          <span>Month : <input type='month' name='month' onChange={(event) => setmonth(event.target.value)}></input></span>
          <button type='submit' name='show' onClick={handleAccept}>Show</button>
        </div>
        <table className="record-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Salary Id</th>
              <th>Employee Salary Id</th>
              <th>Month</th>
              <th>Shift Name</th>
              <th>Total Salary</th>
              <th>Month Attendance</th>
              <th>Salary Slip</th>
            </tr>
          </thead>
          {
            Post.map((Post, index) => {
              return (
                <tbody>
                  <tr key={index}>
                    <td>{Post.employeeId}</td>
                    <td>{Post.salaryId}</td>
                    <td>{Post.employeeSalaryId}</td>
                    <td>{Post.month}</td>
                    <td>{Post.shiftName}</td>
                    <td>{Post.calculatenetsalary}</td>
                    <td>{Post.total_working_days}</td>
                    <td><button className='search-project' onClick={navigatetosalarysip}>Download</button></td>
                  </tr>
                </tbody>
              )
            })
          }
        </table>
      </div>
    </div>
  )
}

export default Viewattendance