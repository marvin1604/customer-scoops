import React from 'react'
import "../styles/RigthStep1.css"
import imagen from "../assets/step1/Frame.png";
import logo from "../assets/step3/Group 35.png";


const RigthStep1 = () => {
  return (
    <div className='container-rigth'>
          <img src={imagen} alt="Frame.png"/>
          <div className='logo'>
            <img src={logo} alt="logo.png"/>
          </div>
      </div>
  )
}

export default RigthStep1