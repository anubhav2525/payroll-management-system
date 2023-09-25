import React, { useState } from 'react'
import './Login.css'
import login2 from './login2.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
export default function Login({ name }) {
  const navigate = useNavigate();
  const navigateToforget = () => {
    navigate("/Forget");
  };
  const navigatetosuperadmin = () => {
    navigate("/Dashboard");
  };

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const sendData = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email: email,
        password: password,
      });
      console.log(response.data.employeeId);
      if(response.data.success===true){
        localStorage.removeItem('employeeId');
        localStorage.setItem("employeeId",response.data.employeeId);
        navigatetosuperadmin();
      }
      else if(response.data.success===false){
        console.log(response.data.message)
        alert(response.data.message)
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(email, password);
  };
  return (
    <div id='mainlogin'>
      <div className='main1'>
        <div className='login-container'>
          <form className='login-container'>
            <h1>{name}</h1>
            <input type='email' className='input' placeholder='Email' onChange={(event) => setEmail(event.target.value)} ></input>
            <input type='password' className='input' placeholder='Password' onChange={(event) => setPassword(event.target.value)}  ></input>
            <div className='forget' onClick={navigateToforget}>Forget Password</div>
            <button className='button' onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
      <div className='main2'>
        <h1>Welcome Back</h1>
        <img src={login2} alt="Logo" />
      </div>
    </div>
  )
}
