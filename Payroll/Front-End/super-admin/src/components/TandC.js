import React from 'react';
import './TandC.css'
import Sidebar from './Sidebar'
import {useState} from 'react'
import axios from 'axios';
function TandC(){
  const [isInputEnabled, setIsInputEnabled] = useState(false);

  const handleButtonClick = (event) => {
    event.preventDefault();
    setIsInputEnabled(true);
  };

  const [description,setDescription ] = useState('');
  const sendData = async (employeeId) => {
    try {
      const response = await axios.post('http://localhost:8000/api/terms-condition', {
      description:description,
      });
      console.log(response.data.message);
      alert(response.data.message);
      
    } catch (error) {
      console.error(error);
    }
  };
  const handleAccept = (event) => {
    event.preventDefault();
    sendData(description);
  };



  return (
    <div id='main'><Sidebar />
      <div id='TandC'>
        <h4>Terms and Conditions</h4>
          <form className='TandC'>
            <textarea rows={22} cols={80} onChange={(event) => setDescription(event.target.value)} disabled={!isInputEnabled}></textarea>
            <div>
              <button type='submit' onClick={handleAccept}>Send</button>
              <button onClick={handleButtonClick}>Edit</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default TandC