import React, { useState } from 'react'
import './Showsalary.css'
import Sidebar from './Sidebar'
import Buttons from './Buttons'
import axios from 'axios';
function Showsalary() {
      const [Post, setPost] = React.useState([]);
      const [employeeId, setEmployeeId] = useState('');
      const sendData = async (employeeId) => {
            try {
                  const response = await axios.post('http://localhost:8000/api/show-salary', {
                        employeeId: employeeId,
                  });
                  setPost(response.data);
                  console.log(Post);
            } catch (error) {
                  console.error(error);
            }
      };
      const handleAccept = (event) => {
            event.preventDefault();
            sendData(employeeId);
      };

      return (
            <div id='main'>
                  <Sidebar />
                  <div className='salaryContainer'>
                        <h4>Salary Information</h4>
                        <div className='selectoption'>
                              <input type='text' placeholder='Enter Employee Id' autoFocus onChange={(event) => setEmployeeId(event.target.value)} ></input><button className='search-salry' onClick={handleAccept}><i className="fa-solid fa-magnifying-glass" ></i></button>
                        </div>
                        {
                              Post.map((Post, index) => {
                                    return (
                                          <div className="registration-form-salary">
                                                <table key={index} className='salary-table'>
                                                      <tr>
                                                            <td ><label for="name">Employee Name</label></td>
                                                            <td ><input type="text" id="name" name="name" required value={Post.name} disabled></input></td>
                                                      </tr>
                                                      <tr>
                                                            <td><label for="salaryid">Salary Id</label></td>
                                                            <td><input type="text" id="salaryid" name="projectname" value={Post.employeeSalaryId} disabled ></input></td>
                                                      </tr>
                                                      <tr>
                                                            <td><label for="emptype">Employee Type</label></td>
                                                            <td>
                                                                  <select name='emptype' id='emptype' value={Post.empType} disabled>
                                                                        <option value=''>Select</option>
                                                                        <option value='ESI'>ESI</option>
                                                                        <option value='PF'>PF</option>
                                                                        <option value='ESI + PF'>ESI + PF</option>
                                                                        <option value='Others'>Others</option>

                                                                  </select>
                                                            </td>
                                                      </tr>
                                                      <tr>
                                                            <td><label for="day">Effective Day</label></td>
                                                            <td><input type='date' id='day' name='day' value={Post.effectiveDay} disabled></input></td>
                                                      </tr>
                                                      <tr>
                                                            <td><label for="salary">Gross Salary</label></td>
                                                            <td ><input type='number' id='salary' name='salary' value={Post.salary} disabled></input></td>
                                                      </tr>
                                                      <tr>
                                                            <td><label for="basic">Basic</label></td>
                                                            <td><input type='number' name='basic' id='basic' value={Post.basic} disabled></input></td>
                                                      </tr>
                                                      <tr>
                                                            <td><label for="hra">HRA Amount </label></td>
                                                            <td><input type='number' name='hra' id='hra' value={Post.hra} disabled ></input></td>
                                                      </tr>
                                                      <tr>
                                                            <td><label for="hra">Special Allowance</label></td>
                                                            <td><input type='number' name='hra' id='hra' value={Post.specialAllowance} disabled></input></td>
                                                      </tr>
                                                      <tr>
                                                            <td><label for="created">Created By</label></td>
                                                            <td><input type='number' name='created' id='created' value={Post.createdBy} disabled></input></td>
                                                      </tr>
                                                      <tr>
                                                            <td><label for="modified">Modified By </label></td>
                                                            <td><input type='number' name='modified' id='modified' value={Post.modifiedBy} disabled></input></td>
                                                      </tr>
                                                </table>
                                          </div>

                                    )
                              })
                        }








                        {/* <div  className='showsalarycontainer'>
                                                <div>Name : <span></span></div>
                                                <div>
                                                      Employee Salary Id :<span></span>
                                                </div>
                                                <div>
                                                      Employee Type :<span></span>
                                                </div>
                                                <div>
                                                      Effective Day :<span></span>
                                                </div>
                                                <div>
                                                      Salary :<span></span>
                                                </div>
                                                <div>
                                                      Basic Salary :<span></span>
                                                </div>
                                                <div>
                                                      HRA Amount :<span></span>
                                                </div>
                                                <div>
                                                      Special Allowance :<span></span>
                                                </div>
                                                <div>
                                                      Created By : <span></span>
                                                </div>
                                                <div>
                                                      Modified By: <span></span>
                                                </div>
                                          </div> */}

                  </div>
                  <Buttons />
            </div>
      )
}

export default Showsalary
