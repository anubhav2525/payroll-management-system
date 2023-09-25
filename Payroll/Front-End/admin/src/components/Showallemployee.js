import React,{useState} from 'react'
import './Showall.css'
import Sidebar from './Sidebar'
import Buttons from './Buttons'
import FetchAPI from './FetchAPI'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Showalladmin({ name }) {
  const data = FetchAPI("http://localhost:8000/api/show-all-employee")
  const handleRefresh = () => {
    window.location.reload();
  };//auto load page
  const deleteData = async (employeeId) => {
    try {
      let response = await axios.post('http://localhost:8000/api/delete-employee', {
        employeeId:employeeId,
      });
      if(response.data.success===true){
        alert(response.data.message)
        handleRefresh();
      }
      else if(response.data.success===false){
        alert(response.data.message)
      }
    }
    catch(error){
      console.log(error);
    }
  };
//edit code
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const navigatetoeditdetails = (id) => {
    const combinedState = { data1: id};
    navigate(`/edit/${id}`, {state: combinedState });
  };
  const showletter = (id) => {
    // alert('Selected Option: ' + selectedOption + id);
    const combined = { data2: id };
    // navigate(`/${selectedOption}`, { state: combined });
    navigate(`/${selectedOption}`, { state: combined });
  };
//delete
  const navigatetodelete = (id) => {
    deleteData(id);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div id='main'>
      <Sidebar />
      <div id='search'>
        <h4>{name}</h4>
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
                        <option>Select Letter</option>
                        <option value="relieving" onClick={() => { showletter(data.employeeId) }}>Relieving</option>
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

export default Showalladmin