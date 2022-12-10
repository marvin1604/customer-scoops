import React from 'react'
import Button from '../components/Button'
import "../styles/Step4.css"

import logo from "../assets/step3/Group 35.png";
import imagen from "../assets/step4/Frame.png"

const Step4 = () => {
  return (
    <div className='step4'>
        <div className='container-left-step4'>
            <div className='container-titulo4'>
                <h2 className='titulo-strong'>Muchas Gracias</h2>
                <h2>por querer ser parte de la familia Scoopers.</h2>
                <p>Nos vemos Pronto</p>
                <Button urlNext={"/"} message={"Finalizar"} />
            </div>
            
            
        </div>
        <div className='container-rigth'>
            <img src={imagen} alt="Frame.png"/>
            <div className='logo'>
                <img src={logo} alt="logo.png"/>
            </div>
        </div>

    </div>
  )
}

export default Step4