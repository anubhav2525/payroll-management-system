import React, { useEffect } from 'react'
import './Project.css'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
function Project() {
  const navigate = useNavigate();
  const navigateToadd = () => {
    navigate("/Addproject");
  };
  const [Post, setPost] = React.useState([]);
  const sendData = async (demp) => {
    try {
      const response = await axios.post('http://localhost:8000/api/project-detail', {
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

  //delete data
  const handleRefresh = () => {
    window.location.reload();
  };//auto load page
  const deleteData = async (employeeId) => {
    try {
      let response = await axios.post('http://localhost:8000/api/project-delete', {
        employeeId: employeeId,
      });
      if (response.data.success === true) {
        alert(response.data.message)
        handleRefresh();
      }
      else if (response.data.success === false) {
        alert(response.data.message)
      }
    }
    catch (error) {
      console.log(error);
    }
  };
  //delete
  const navigatetodelete = (id) => {
    deleteData(id);
  };
  return (
    <div id='main'>
      <Sidebar />
      <div id='project'>
        <h4>Project Details</h4>
        <div className='add'><button onClick={navigateToadd}>Add Project</button></div>
        <table className="record-table">
          <thead>
            <tr>
              <th>SR. No</th>
              <th>Project Name</th>
              <th>Project Code</th>
              <th>Employee Id</th>
              <th >Starting Date</th>
              <th >Ending Date</th>
              <th >Curent Status</th>
              <th className='delete-project'>Delete</th>
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
                    <td >{Post.start}</td>
                    <td >{Post.end}</td>
                    <td>{Post.status}</td>
                    <td className='delete-project'><button className='search-project-2' onClick={() => { navigatetodelete(Post.member) }}>Delete</button></td>
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