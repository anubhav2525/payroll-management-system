import React from 'react'
import './Buttons.css'
import { useNavigate } from 'react-router-dom'

function Buttons() {
  const navigate = useNavigate();

  const navigateTo1 = () => {
    navigate("/Addbasicdetailsadmin");
  };
  const navigateTo2 = () => {
    navigate("/Searchadmin");
  };
  const navigateTo3 = () => {
    navigate("/Showalladmin");
  };
  const navigateTo4 = () => {
    navigate("/Addbasicdetailsemployee");
  };
  const navigateTo5 = () => {
    navigate("/Searchemployee");
  };
  const navigateTo6 = () => {
    navigate("/Showallemployee");
  };
  const navigateTo7 = () => {
    navigate("/Showsalary");
  };
  return (
    <div id='buttons'>
      <h3>Options</h3>
      <div className='buttons'>
        <button className='btn' onClick={navigateTo1}>Add New Admin</button>
        <button className='btn' onClick={navigateTo2}>Search Admin</button>
        <button className='btn' onClick={navigateTo3}>Show all Admin</button>
        <button className='btn' onClick={navigateTo4}>Add New Employee</button>
        <button className='btn' onClick={navigateTo5}>Search Employee</button>
        <button className='btn' onClick={navigateTo6}>Show all Employees</button>
        <button className='btn' onClick={navigateTo7}>Show Salary</button>
      </div>
    </div>
  )
}

export default Buttons