import React from 'react'
import './TandC.css'
import Sidebar from './Sidebar'
import FetchAPI from './FetchAPI'
function TandC(){
  const terms = FetchAPI("http://localhost:8000/api/terms-condition-show");
  return (
    <div id='main'>
      <Sidebar />
      <div id='TandC'>
        <h4>Terms and Conditions</h4>
        <div className='show'>{terms.description}</div>
      </div>
    </div>
  )
}

export default TandC