import React from 'react'
import Sidebar from './Sidebar'
import './Viewattendance.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Viewattendance() {
  const [Post, setPost] = useState([]);

  const [employeeId, setEmployeeId] = useState('');
  const [month, setmonth] = useState('');
  const sendData = async (demp) => {
    try {
      const response = await axios.post('http://localhost:8000/api/attendance-search', {
        employeeId: demp,
      });
      setPost(response.data);
      // console.log(Post);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const demp=localStorage.getItem('employeeId');// store the createdby id 
    console.log(demp);
    sendData(demp);
  }, []);


  const navigate = useNavigate();
  const handlenavigate=async(employeeId,month)=>{
  const combinedState = { data1: employeeId, data2: month };
    navigate("/salaryslip", { state: combinedState });
  };

  const navigatetosalarysip = async (employeeId,month) => {
    handlenavigate(employeeId,month)
  };


  return (
    <div id='main'>
        <Sidebar />
        <div id='viewattendance'>
            <h4>View Attendance</h4>
            <table className="record-table-attendance-emp">
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
                    <td><button className='search-attendance-emp' onClick={()=>{navigatetosalarysip(Post.employeeId,Post.month)}}>Download</button></td>
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