import React from "react";
import Sidebar from "./Sidebar";
import "./Edit.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Edit() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [contact, setcontact] = useState('');
  const [pic, setpic] = useState('');

  // fetch the user record
  useEffect(() => {
    const acceptData = async (data1) => {
      try {
        let response = await axios.post('http://localhost:8000/api/update-data-employee', {
          employeeId: data1,
        });
        setname(response.data[0].name);
        setemail(response.data[0].personalEmail);
        setcontact(response.data[0].contactNo);
      }
      catch (error) {
        console.log(error)
      }
    };
    const data1 = localStorage.getItem('employeeId')
    acceptData(data1);
  }, []);

  //update
  const updateData = async (name, email, contact, demp) => {
    try {
      let data = await axios.post('http://localhost:8000/api/update-employee-data', {
        employeeId: demp,
        name: name,
        contact: contact,
        email: email,
      });
      if (data.data.success === true) {
        alert(data.data.message)
        console.log(data.data.message)
      }
      else if (data.data.success === false) {
        alert(data.data.message)
        console.log(data.data.message)
      }
    }
    catch (error) {
      console.log(error)
    }
  };


  const handleUpdate = (event) => {
    event.preventDefault();
    const demp = localStorage.getItem('employeeId')
    updateData(name, email, contact, demp)
  }
  return (
    <div id="main">
      <Sidebar />
      <div className="edit">
        <div className="basicdetail-container">
          <h4>Edit Personal Details</h4>
          <form>
            <div className="basicinput">
              <div>
                Name : <input type="text" onChange={(event) => { setname(event.target.value) }} value={name} />
              </div>
              <div>
                Personal Email : <input type="email" onChange={(event) => { setemail(event.target.value) }} value={email} />
              </div>
              <div>
                Contact Number : <input type="number" onChange={(event) => { setcontact(event.target.value) }} value={contact} />
              </div>
              <div>
                <button className="Basicbutton" onClick={handleUpdate}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
