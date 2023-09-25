import React from 'react'
import './Project.css'
import Sidebar from './Sidebar'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState,useEffect } from 'react';
function Project() {
  const [Post, setPost] = useState([]);
  const sendData = async (demp) => {
    try {
      const response = await axios.post('http://localhost:8000/api/project-search', {
        member: demp,
      });
      setPost(response.data);
      console.log(Post);
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
    <div id='main'>
      <Sidebar />
      <div id='project'>
          <h4>Project Details</h4>
          {/* <div className='add'><button onClick={navigateToadd}>Add Project</button></div> */}
          <table className="record-table-emp">
          <thead>
            <tr>
              <th>SR. No</th>
              <th>Project Name</th>
              <th>Project Code</th>
              <th>Employee Id</th>
              <th>Starting Date</th>
              <th>Ending Date</th>
              <th>Curent Status</th>
            </tr>
          </thead>
          {
            Post.map((Post, index) => {
              return (
                <tbody>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{Post.projectName}</td>
                    <td>{Post.projectCode}</td>
                    <td>{Post.member}</td>
                    <td>{Post.start}</td>
                    <td>{Post.end}</td>
                    <td>{Post.status}</td>
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

export default Project