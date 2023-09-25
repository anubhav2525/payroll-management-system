import React, { useState } from 'react'
import './Addproject.css'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
function Addproject() {
  // const [field, setfield] = useState([{ member: "" }])
  // const[count,setcount] = useState(1)

  // const handleadd = (event) => {
  //   event.preventDefault()
  //   setcount(count+1)
  //   setfield([...field, { member: "" }])
  // }

  // const handlevalue =(e,i)=>{
  //   const values = [...field];
  //   values[i][e.target.name] = e.target.value;
  //   setfield(values);
  // }

  // const handledelete = (index) => {
  //   const deletefield = [...field]
  //   deletefield.splice(index, 1)
  //   setfield(deletefield)
  // }

  const [projectcode, setprojectcode] = useState('');
  const [projectname, setprojectname] = useState('');
  const [status, setstatus] = useState('');
  const [member, setmember] = useState('');
  const [start, setstart] = useState('');
  const [end, setend] = useState('');
  const [description, setdescription] = useState('');
  const [isInputEnabled, setIsInputEnabled] = useState(false);

  const sendData = async (projectcode, projectname, status, start, end, member, description, demp) => {
    try {
      const response = await axios.post('http://localhost:8000/api/project-add', {
        projectcode: projectcode,
        projectname: projectname,
        status: status,
        start: start,
        end: end,
        member: member,
        description: description,
        createdBy: demp,
      });

      if (response.data.success === true) {
        alert(response.data.message);
        console.log(response.data.message);
        setmember('')
      } else if (response.data.success === false) {
        alert(response.data.message);
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(localStorage.getItem('employeeId'));
    const demp = localStorage.getItem('employeeId');// store the createdby id 
    sendData(projectcode, projectname, status, start, end, member, description, demp);
  };

//search
  const searchData = async (projectcode) => {
    try {
      const search = await axios.post('http://localhost:8000/api/project-display', {
        projectCode: projectcode,
      });
      console.log(search.data);
      setprojectname(search.data.projectName)
      setstatus(search.data.status)
      setstart(search.data.start)
      setend(search.data.end)
      setdescription(search.data.description)
    } catch (error) {
      console.error(error);
    }
  };
  const handlesearch = (event) => {
    event.preventDefault()
    searchData(projectcode);
    setIsInputEnabled(true);
  }

  //update
  const updateData = async (projectcode, projectname, status, start, end, description, demp) => {
    try {
      const update = await axios.post('http://localhost:8000/api/project-update', {
        projectcode: projectcode,
        projectname: projectname,
        status: status,
        start: start,
        end: end,
        description: description,
        modifiedBy: demp,
      });
      if(update.data.success===true){
      console.log(update.data.message)
      alert(update.data.message)}
      else if(update.data.success===false){
        console.log(update.data.message)
        alert(update.data.message)}
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdate = (event) => {
    event.preventDefault()
    console.log(localStorage.getItem('employeeId'));
    const demp=localStorage.getItem('employeeId');// store the createdby id 
    console.log(demp);
    updateData(projectcode, projectname, status, start, end, description, demp);
  }
    
  return (
    <div id="main">
      <Sidebar />
      <div className='addproject'>
        <h4>Add Project</h4>
        <div className="registration-form-project">
          <table className='project-table'>
            <tr>
              <td ><label for="projectcode">Project Code</label></td>
              <td ><input type="text" id="projectcode" name="projectcode" placeholder="Enter project code" required onChange={(event) => setprojectcode(event.target.value)}></input></td>
              <td><button className='search-project'  onClick={handlesearch}>Search</button></td>
            </tr>
            <tr>
              <td><label for="projectname">Project Name</label></td>
              <td><input type="text" id="projectname" name="projectname"
                placeholder="Enter project name" value={projectname} required onChange={(event) => setprojectname(event.target.value)}></input></td>
            </tr>
            <tr>
              <td><label for="status">Status</label></td>
              <td >
                <select name='status' id='status' value={status} onChange={(event) => setstatus(event.target.value)}>
                  <option value=''>Select</option>
                  <option value='Completed'>Completed</option>
                  <option value='Pending'>Pending</option>
                  <option value='Ongoing'>Ongoing</option>
                  <option value='Upcoming'>Upcoming</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label for="start">Starting Date</label></td>
              <td><input type='date' id='start' value={start} name='start_date' onChange={(event) => setstart(event.target.value)} ></input></td>
            </tr>
            <tr>
              <td><label for="end">Ending Date</label></td>
              <td ><input type='date' id='end' name='end_date' value={end} onChange={(event) => setend(event.target.value)} ></input></td>
            </tr>
            <tr>
              <td><label for="member">Employee Id</label></td>
              <td><input type='text' name='member' id='member' placeholder='Enter Employee Id' disabled={isInputEnabled} onChange={(event) => setmember(event.target.value)} value={member}></input></td>
            </tr>
            <tr>
              <td><label for="description">Description</label></td>
              <td><input type='text' name='member' id='description' value={description} placeholder='Project description' onChange={(event) => setdescription(event.target.value)}></input></td>
            </tr>
          </table>
        </div>
        <div className='addbutton'>
          <button type='submit' name='submit' onClick={handleSubmit}>Submit</button>
          <button type='submit' name='update' onClick={handleUpdate}>Update</button>
          <button type='reset'>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Addproject