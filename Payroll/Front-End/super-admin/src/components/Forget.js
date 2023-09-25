import React, { useState } from 'react'
import './Login.css'
import login2 from './login2.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Login({ name }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const sendData = async (email) => {
    try {
      const response = await axios.post('http://localhost:8000/api/forget', {
        email: email,
      });
      // console.log(email);
      if (response.data.success === true) {
        console.log(response.data.message);
        alert(response.data.message);
        navigateToreset();
      }
      else if (response.data.success === false) {
        console.log(response.data.message);
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const combinedState = { officeEmail: email };
  const navigateToreset = () => {
    navigate("/Reset", { state: combinedState });
  };
  const navigateToLogin = () => {
    navigate("/");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(email);
  };
  return (
    <div id='mainlogin'>
      <div className='main1'>
        <div className='login-container'>
          <form className='login-container'>
            <h1>{name}</h1>
            <input type='email' className='input' name='email' placeholder='Email address' onChange={(event) => setEmail(event.target.value)} ></input>
            <div className='forget' onClick={navigateToLogin}>Back to login</div>
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
