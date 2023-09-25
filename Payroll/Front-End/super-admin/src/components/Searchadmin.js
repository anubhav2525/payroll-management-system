import React, { useState } from 'react'
import './Search.css'
import Sidebar from './Sidebar'
import Buttons from './Buttons'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
function Searchadmin({ name }) {
  const [data, setdata] = React.useState([]);
  const [employeeId, setEmployeeId] = useState('');
  const sendData = async (employeeId) => {
    try {
      const response = await axios.post('http://localhost:8000/api/search-admin', {
        employeeId: employeeId,
      });
      setdata(response.data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleAccept = (event) => {
    event.preventDefault();
    sendData(employeeId);
  };
  //edit code
  const navigate = useNavigate();
  const navigatetoeditdetails = (id) => {
    const combinedState = { data1: id };
    navigate(`/edit/${id}`, { state: combinedState });
  };
  //delete
  const handleRefresh = () => {
    window.location.reload();
  };//auto load page

  const deleteData = async (employeeId) => {
    try {
      let response2 = await axios.post('http://localhost:8000/api/delete-admin', {
        employeeId: employeeId,
      });
      if (response2.data.success === true) {
        alert(response2.data.message)
        handleRefresh();
      }
      else if (response2.data.success === false) {
        alert(response2.data.message)
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
//letter
const [selectedOption, setSelectedOption] = useState('');
const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
};

const showletter = (id) => {
  // alert('Selected Option: ' + selectedOption + id);
  const combined = { data2: id };
  // navigate(`/${selectedOption}`, { state: combined });
  navigate(`/${selectedOption}`, { state: combined });
};
  return (
    <div id='main'>
      <Sidebar />
      <div id='search'>
        <h4>{name}</h4>
        <div className='searcharea'>
          <input type='text' onChange={(event) => setEmployeeId(event.target.value)} placeholder='Enter Admin Id' name='id'></input>
          <button type='submit' name='search' onClick={handleAccept}>Search</button>
        </div>
        <table className="record-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact no</th>
              <th>Depart. Id</th>
              <th>Documents</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          {
            data.map((data, index) => {
              return (
                <tbody>
                  <tr key={index}>
                    <td>{data.employeeId}</td>
                    <td>{data.name}</td>
                    <td>{data.officeEmail}</td>
                    <td>{data.contactNo}</td>
                    <td>{data.departmentId}</td>
                    <td>
                      <select value={selectedOption} onChange={handleOptionChange}>
                        <option>Select</option>
                        <option value="relieving"  onClick={() => { showletter(data.employeeId) }}>Relieving</option>
                        <option value="experienceletter"><button>Experience</button></option>
                        <option value="offerletter"><button>Offer</button></option>
                        <option value="salaryincrement"><button>Salary Increment</button></option>
                        <option value="joiningletter"><button>Joining</button></option>
                      </select>
                      <br/>
                      <button className='print-button' onClick={() => { showletter(data.employeeId) }}>show</button></td>
                    <td>
                    <button className='print-button' onClick={() => { navigatetoeditdetails(data.employeeId) }}>Edit</button>
                    </td>
                    <td>
                    <button className='print-button' onClick={() => { navigatetodelete(data.employeeId) }}>Delete</button>
                    </td>
                  </tr>
                </tbody>
            )
          })
        }
        </table>
      </div>
      <Buttons />
    </div>
  )
}

export default Searchadmin