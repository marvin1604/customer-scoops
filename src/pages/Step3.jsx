import React from 'react'
import "../styles/Step3.css"
import Calendly from '../components/Calendly';
import ButtonsBackNext from '../components/ButtonsBackNext';

import logo from "../assets/step3/Group 35.png";
import imagen from "../assets/step3/Frame (1).png"
import franky from "../assets/step3/franky 1.png"

const Step3 = () => {
  return (
    <div className='step3'>
        <div className='mitad'>
            <div className='container-left3'>
                <Calendly/>
                <ButtonsBackNext urlBack={"/2"} urlNext={"/4"} message={"Confirmar"} styles={"#3FC467"} colors={"white"}/>
            </div>
        </div>
        <div className='container-rigth'>
            <img src={imagen} alt="Frame.png"/>
            <div className='logo'>
                <img src={logo} alt="logo.png"/>
            </div>
            <div className='franky'>
                <img src={franky} alt="franky.png"/>
            </div>
        </div>
    </div>
  )
}

export default Step3