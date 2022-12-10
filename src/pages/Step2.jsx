import React from 'react'
import ButtonsBackNext from '../components/ButtonsBackNext';
import Flotantes from '../components/Flotantes';
import ContenidoCirculo from '../components/ContenidoCirculo';

import "../styles/Step2.css"

import imagen from "../assets/step2/Frame.png";
import Cuadrados from '../components/Cuadrados';

const Step2 = () => {
  return (
    <div className='step2'>
        <div className='container-left'>
            <div className='container-titulo2'>
                <h2 className='titulo-strong'>Fantastico!</h2>
                <p>Mira el Churn Rate 2022</p>
                <p>y el Lead Conversion Rate de tu industria:</p>
                <h2 className='titulo-industria'>Retail</h2>
            </div>
            <Cuadrados/>
            <ButtonsBackNext 
              urlBack={"/"} 
              urlNext={"/3"} 
              message={"Agendar demo"} 
              styles={"yellow"} 
              colors={"#1B0F26"} 
              ArrowTipe={"fa-solid fa-arrow-right"}
            />
        </div>
        <div className='container-rigth'>
            <img src={imagen} alt="Frame.png"/>
            <ContenidoCirculo/>
        </div>
        <Flotantes/>
    </div>
  )
}

export default Step2