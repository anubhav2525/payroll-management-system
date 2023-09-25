import React from 'react'
import './Right.css'
import Sidebar from './Sidebar'
// import Profile from './Profile'
import Logo from './searlogo.png'

import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
function right() {
  const [employeeId, setemployeeId] = useState('')
  const [count, setcount] = useState({})
  const [project, setproject] = useState({})
  const [projectdetails, setprojectdetails] = useState([])
  const [employeeDetail, setemployeeDetail] = useState([])
  const sendData = async (demp) => {
    try {
      const employee = await axios.post('http://localhost:8000/api/logged', { employeeId: demp });
      setemployeeDetail(employee.data);
      console.log(employeeDetail.data)
      const response1 = await axios.post('http://localhost:8000/api/employees-count', { employeeId: demp, });
      console.log(response1.data);
      setcount(response1.data);
      const response2 = await axios.post('http://localhost:8000/api/project-status', { employeeId: demp, });
      console.log(response2.data);
      setproject(response2.data);
      const response3 = await axios.post('http://localhost:8000/api/project-detail-employee',{employeeId:demp});
      console.log(response3.data);
      setprojectdetails(response3.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const demp = localStorage.getItem('employeeId');// store the createdby id 
    console.log(demp);
    sendData(demp);
  }, []);

  return (
    <div id='main-super'>
      <Sidebar />
      <div id='right'>
        <div className='logo-super'>
          <img src={Logo} alt='error' />
          <div><b>SAER Technologies Private Limited</b></div>
        </div>
        <h1>Admin Dashboard</h1>

        <div className='cards'>
          {
            employeeDetail.map((employeeDetail,index)=>{
              return (
              < div className="user-profile" key={index}>
                <div className="user-avatar"><img src='' alt="User Avatar" className="avatar-image"></img></div>
                  <div className="user-details">
                    <h3 className="user-name"><u>{employeeDetail.name}</u></h3>
                    <p className="user-email">{employeeDetail.officeEmail}</p>
                    <p className="user-role">{employeeDetail.designation}</p>
                    <div className="user-bio"><p>ST/{employeeDetail.departmentId}/{employeeDetail.employeeId}</p></div>
                  </div>
              </div>
              )
            })
      }

        <div className='user-project'>
          <table>
            <thead className='super-thead'>
              <tr>
                <th colSpan={3}><u>Total Projects</u></th>
              </tr>
            </thead>
            <tbody className='super-tbody'>
              <tr>
                <th>Completed</th>
                <th>:</th>
                <td>{project.completed}</td>
              </tr>
              <tr>
                <th>Pending</th>
                <th>:</th>
                <td>{project.pending}</td>
              </tr>
              <tr>
                <th>Upcoming</th>
                <th>:</th>
                <td>{project.upcoming}</td>
              </tr>
              <tr>
                <th>Ongoing</th>
                <th>:</th>
                <td>{project.ongoing}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='user-employee-count'>
          <table>
            <thead className='super-thead'>
              <tr>
                <th colSpan={3}><u>Number of Employees</u></th>
              </tr>
            </thead>
            <tbody className='admin-tbody'>
              {/* <tr>
                  <th>Admin</th>
                  <th>:</th>
                  <td>{count.admin}</td>
                </tr> */}
              <tr>
                <th>Employee</th>
                <th>:</th>
                <td>{count.employee}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='user-project-detail'>
        <table >
          <thead className='super-thead-project'>
            <tr>
              <th >Sr. No.</th>
              <th>Project Code</th>
              <th>Project Name</th>
              <th>Start</th>
              <th>End</th>
              <th>Status</th>
              <th>Employee Id</th>
            </tr>
          </thead>
          {
            projectdetails.map((projectdetails, index) => {
              return (
                <tbody key={index} className='super-tbody-detail'>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{projectdetails.projectCode}</td>
                    <td>{projectdetails.projectName}</td>
                    <td>{projectdetails.start}</td>
                    <td>{projectdetails.end}</td>
                    <td>{projectdetails.status}</td>
                    <td>{projectdetails.member}</td>
                  </tr>
                </tbody>
              )
            })
          }
        </table>
      </div>
    </div>
    </div >
  )
}

export default right