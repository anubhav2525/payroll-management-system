import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Sidebar({btn}) {
  const navigate =useNavigate();
  const navigatetologin = (e) => {
    navigate("/");
  };
  const logout = (e)=>{
    localStorage.removeItem("employeeId");
    navigatetologin();
  }
  return (
      <div id="sidebar">
        <h3>Menu</h3>
        <div className='options'>
          <ul>
            <li><Link to="/Dashboard">Dashboard</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/viewattendance">Attendance</Link></li>
            <li><Link to="/Edit">Edit Profile</Link></li>
            <li><Link to="/Terms and Conditions">Terms and Conditions</Link></li>
          </ul>
        </div>
        <div className='logout'>
          <button onClick={logout}><i className="fa-solid fa-right-from-bracket fa-beat"></i></button>
        </div>
      </div>
  )
}

export default Sidebar