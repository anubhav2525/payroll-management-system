import React, { useState } from 'react'
import './Attendance.css'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
function Attendance() {
  const navigate = useNavigate();
  const [name, setname] = useState('');
  const [department, setdepartment] = useState('');
  const [designation, setdesignation] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [lop, setlop] = useState('');
  const [leave, setleave] = useState('');
  const [Working, setworking] = useState('');
  const [totalworkingdays, settotalworkingdays] = useState('');
  const [holidays, setholidays] = useState('');
  const [sales, setsales] = useState('');
  const [extra, setextra] = useState('');
  const [shiftname, setshiftname] = useState('');
  const [shifttiming, setshifttiming] = useState('');
  const [month, setmonth] = useState('');

  const navigateToviewattendance = (e) => {
    e.preventDefault();
    navigate("/viewattendance");
  };

  //this block accept the data by id
  const acceptData = async (employeeId) => {
    try {
      const response = await axios.post('http://localhost:8000/api/acceptRecord', {
        employeeId: employeeId,
      });
      console.log(response);
      setname(response.data[0].name);
      setdesignation(response.data[0].designation);
      setdepartment(response.data[0].departmentId);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(accept);
  const handleAccept = (event) => {
    event.preventDefault();
    acceptData(employeeId);
  };
  // this api submit the details
  const sendData = async (employeeId, lop, leave, Working, totalworkingdays, holidays, sales, extra, shiftname, shifttiming, month, demp) => {
    try {
      const responseget = await axios.post('http://localhost:8000/api/attendance', {
        employeeId: employeeId,
        lop: lop,
        leave: leave,
        Working: Working,
        totalworkingdays: totalworkingdays,
        holidays: holidays,
        sales: sales,
        extra: extra,
        shiftname: shiftname,
        shifttiming: shifttiming,
        month: month,
        createdBy: demp,
      });
      if (responseget.data.success === true) {
        alert(responseget.data.message)
        
      }
      else if (responseget.data.success === false) {
        alert(responseget.data.message)
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const demp = localStorage.getItem('employeeId');// store the createdby id 
    console.log(demp);
    sendData(employeeId, lop, leave, Working, totalworkingdays, holidays, sales, extra, shiftname, shifttiming, month, demp);
  };

  return (
    <>
      <div id='main'>
        <Sidebar />
        <div id='attendance'>
          <h4>Attendance</h4>
          <div className="registration-form">
            <table className='table-attendance'>
              <thead className='thead-attendance'>
                <h1>Information</h1>
              </thead>
              <tr>
                <td className='table-data'><label for="employeeId">Employee Id :</label></td>
                <td className="boxes"><input type="text" id="employeeId" name="employeeId" placeholder="Enter Employee Id" required onChange={(event) => setEmployeeId(event.target.value)}></input></td>
                <td><button type='button' className='Button-search' onClick={handleAccept}>Search</button></td>
              </tr>
              <tr>
                <td className='table-data'><label for="name">Employee Name :</label></td>
                <td className="boxes"> <input type="text" id="name" name="name" required disabled value={name}></input></td>
                <td className='table-data'><label for="shiftName">Shift Name :</label></td>
                <td className="boxes"> <select name='shiftname' onChange={(event) => setshiftname(event.target.value)}>
                  <option value=""></option>
                  <option value="Morning">Morning</option>
                  <option value="Evening">Evening</option>
                </select></td>
              </tr>
              <tr>
                <td className='table-data'><label for="designation">Designation :</label></td>
                <td className="boxes"><input type="text" id="designation" name="designation" required disabled value={designation}></input></td>
                <td className='table-data'><label for="shiftTiming">Shift Timing :</label></td>
                <td className="boxes"> <select name='shifttiming' onChange={(event) => setshifttiming(event.target.value)}>
                  <option value=""></option>
                  <option value="09:00 - 18:00">09:00 - 18:00</option>
                  <option value="18:00 - 08:00">18:00 - 08:00</option>
                </select></td>
              </tr>
              <tr>
                <td className='table-data'><label for="password">Department:</label></td>
                <td className="boxes"><input type="text" id="depart" name="depart" required disabled value={department}></input></td>
                <td className='table-data'><label for="month">Month :</label></td>
                <td className="boxes"> <input type="month" id="month" name="month" required onChange={(event) => setmonth(event.target.value)}></input></td>
              </tr>
            </table>
          </div>

          <div className="registration-form">
            <table className='table-attendance'>
              <thead>
                <h1>Record</h1>
              </thead>
              <tr>
                <td className='table-data'><label for="lop">LOP :</label></td>
                <td className="boxes"> <input type="text" id="lop" name="lop" required onChange={(event) => setlop(event.target.value)}></input></td>
                <td className='table-data'><label for="holidays">Holidays : </label></td>
                <td className="boxes"> <input type="text" id="holidays" name="holidays" required onChange={(event) => setholidays(event.target.value)}></input></td>
              </tr>
              <tr>
                <td className='table-data'><label for="leave">Leave Taken : </label></td>
                <td className="boxes"><input type="text" id="leave" name="leave" required onChange={(event) => setleave(event.target.value)}></input></td>
                <td className='table-data'><label for="extra">Extra Days : </label></td>
                <td className="boxes"><input type="text" id="extra" name="extra" required onChange={(event) => setextra(event.target.value)}></input> </td>
              </tr>
              <tr>
                <td className='table-data'><label for="totalworking">Total Working Days :</label></td>
                <td className="boxes"><input type="text" id="totalworking" name="totalworking" required onChange={(event) => settotalworkingdays(event.target.value)}></input></td>
                <td className='table-data'><label for="sales">Number of sales : </label></td>
                <td className="boxes"> <input type="text" id="sales" name="sales" required onChange={(event) => setsales(event.target.value)}></input></td>
              </tr>
              <tr>
                <td className='table-data'><label for="password">Working Days :</label></td>
                <td className="boxes"><select name='working' onChange={(event) => setworking(event.target.value)}>
                  <option value=""></option>
                  <option value="31">January</option>
                  <option value="28">February</option>
                  <option value="31">March</option>
                  <option value="30">April</option>
                  <option value="31">May</option>
                  <option value="30">June</option>
                  <option value="31">July</option>
                  <option value="31">August</option>
                  <option value="30">September</option>
                  <option value="31">October</option>
                  <option value="30">November</option>
                  <option value="31">December</option>
                </select></td>
              </tr>
            </table>
          </div>
          <div className='Button'>
            <button onClick={navigateToviewattendance}>View</button>
            <button type='reset'>Clear</button>
            <button type='submit' onClick={handleSubmit}>Submit</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Attendance