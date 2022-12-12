import React, { useContext } from 'react'
import ButtonBack from '../components/ButtonBack';
import Flotantes from '../components/Flotantes';
import ContenidoCirculo from '../components/ContenidoCirculo';
import ButtonArrowYellow from "../components/ButtonArrowYellow"
import "../styles/Step2.css"

import imagen from "../assets/step2/Frame.png";
import Cuadrados from '../components/Cuadrados';
import { AppContext } from '../hooks/provider';

const Step2 = () => {
  const [state, setState] = useContext(AppContext)
  return (
    <div className='step2'>
        <div className='container-left'>
            <div className='container-titulo2'>
                <h2 className='titulo-strong'>Fantastico!</h2>
                <div className='text-subt'>
                  <p>Mira el Churn Rate 2022</p>
                  <p>y el Lead Conversion Rate de tu industria:</p>
                </div>
                {
                  (state.title)? <h2 className='titulo-industria'>{state.title}</h2> : <h2>ITServices</h2> 
                }
            </div>
            <Cuadrados/>
            <div className='buttonsNext'>
              <ButtonBack urlBack={"/"}/>
              <ButtonArrowYellow urlNext={"/3"} message={"Siguiente"}/>
            </div>
        </div>
        <div className='container-rigth'>
        <div className='container-imagenes'>
            <img className='imgFondo' src={imagen} alt="Frame.png"/>
            <ContenidoCirculo/>
        </div>
        </div>
        <Flotantes/>
    </div>
  )
}

export default Step2