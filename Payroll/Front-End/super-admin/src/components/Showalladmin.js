import React, { useState } from 'react'
import './Showall.css'
import Sidebar from './Sidebar'
import Buttons from './Buttons'
import FetchAPI from './FetchAPI'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Showalladmin({ name }) {
  const [selectedOption, setSelectedOption] = useState('');

  const navigate = useNavigate();

  const data = FetchAPI("http://localhost:8000/api/show-all-admin");
  const handleRefresh = () => {
    window.location.reload();
  };//auto load page
  const deleteData = async (employeeId) => {
    try {
      let response = await axios.post('http://localhost:8000/api/delete-admin', {
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
  //edit
  const navigatetoeditdetails = (id) => {
    const combinedState = { data1: id };
    navigate(`/edit/${id}`, { state: combinedState });
  };
  //letter

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
                        <option value="">Select</option>                   
                        <option value="relieving">Relieving</option>
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

// <div id='main'>
// <Sidebar />
// <div id='search'>
//   <h4>{name}</h4>
//   <div className='searchoption'>
//     <span>S.R. No.</span>
//     {/* <span>Profile</span> */}
//     <span>Name</span>
//     <span>ID</span>
//     <span>Office Email</span>
//     <span>Contact Number</span>
//     <span>Position</span>
//     <span>Documents</span>
//     <span>Edit</span>
//     <span>Delete</span>
//   </div>
//   {
//     data.map((data, index) => {
//       return (
//         <div key={index} className='searchoption'>
//           <span>{index + 1}</span>
//           {/* <span><img src="C:/xampp/htdocs/Payroll/Back-End/storage/app/public/profile/"{data.profile_pic} alt='error'/></span> */}
//           <span>{data.name}</span>
//           <span>{data.employeeId}</span>
//           <span>{data.officeEmail}</span>
//           <span>{data.contactNo}</span>
//           <span>{data.designation}</span>
//           <select value={selectedOption} onChange={handleOptionChange}>
//             <option>Select Letter</option>
//             <option value="relieving" onClick={() => { showletter(data.employeeId) }}>Relieving</option>
//             <option value="experience"><button>Experience</button></option>
//             <option value="offer"><button>Offer</button></option>
//             <option value="salaryIncrement"><button>Salary Increment</button></option>
//             <option value="joining"><button>Joining</button></option>
//           </select>
//           <button onClick={() => { showletter(data.employeeId) }}>show</button>
//           <button onClick={() => { navigatetoeditdetails(data.employeeId) }}>Edit</button>
//           <button onClick={() => { navigatetodelete(data.employeeId) }}>Delete</button>
//         </div>
//       )
//     })
//   }
// </div>
// <Buttons />
// </div>