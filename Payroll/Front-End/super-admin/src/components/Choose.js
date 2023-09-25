import React from 'react'
import './Choose.css'
import choose from './choose.jpeg'
import Sidebar from './Sidebar'
import Buttons from './Buttons'

function Choose() {
  return (
    <div id='main'>
      <Sidebar />
      <div id='choose'>
          <img src={choose} alt='error'></img>
          <div><i className="fa-sharp fa-solid fa-arrow-right fa-beat-fade"></i></div>
      </div>
      <Buttons />
    </div>
  )
}

export default Choose