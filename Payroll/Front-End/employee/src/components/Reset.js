import React, {useState} from 'react'
import './Login.css'
import login2 from './login2.jpg'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login({ name }) {
  // const [isFormEnabled, setFormEnabled] = useState(true);
  // const enableForm = () => {
  //   setFormEnabled(false);
  // };
  const navigate = useNavigate();
  const location = useLocation();
  const { officeEmail } = location.state;
  const namme=officeEmail;
  console.log(namme);// the previous email from forget page
  const navigateToLogin = () => {
    navigate("/");
  };
  const [otp,setotp]=useState('');
  const [password,setpassword]=useState('');
  const [confirmpassword,setconfirmpassword]=useState('');
  const sendData = async (otp,password,confirmpassword,namme) => {
    try {
      const response = await axios.post('http://localhost:8000/api/reset', {
        token:otp,
        password:password,
        confirmpassword:confirmpassword,
        email:namme,
      });
      // console.log(email);
      if (response.data.success === true) {
        console.log(response.data.message);
        alert(response.data.message);
        navigateToLogin();
      }
      else if (response.data.success === false) {
        console.log(response.data.message);
        alert(response.data.message);
      }

    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(otp,password,confirmpassword,namme);
  };
  return (
    <div id='mainlogin'>
      <div className='main1'>
        <div className='login-container'>
          <form action='' name='' className='login-container'>
            <h1>{name}</h1>
            {/* <div>
                <button className='button' onClick={enableForm}>Admin</button>
                <button className='button' onClick={enableForm}>Employees</button>
              </div> */}
            <input type='text' className='input' placeholder='OTP' onChange={(event) => setotp(event.target.value)}></input>
            <input type='text' className='input' placeholder='Password' onChange={(event) => setpassword(event.target.value)}></input>
            <input type='text' className='input' placeholder='Confirm Password' onChange={(event) => setconfirmpassword(event.target.value)} ></input>
            {/* <div className='forget'>Forget Password</div> */}
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
