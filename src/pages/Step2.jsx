import React from 'react'
import "../styles/LeftStep1.css"
import "../styles/RigthStep1.css"
import "../styles/Step2.css"

import imagen from "../assets/step2/Frame.png";
import rate from "../assets/step2/speedometer.png"
import ButtonsBackNext from '../components/ButtonsBackNext';
const Step2 = () => {
  return (
    <div className='step2'>
        <div className='container-left'>
            <div className='container-titulo'>
                <h2 className='titulo-strong'>Fantastico!</h2>
                <p>Mira el Churn Rate 2022</p>
                <p>y el Lead Conversion Rate de tu industria:</p>
                <h2 className='titulo-strong'>Retail</h2>
            </div>
            <div className='container-cuadros'>                
                <div className='container-cuadro'>
                    <p>Churn Rate</p>
                    <p>2022</p>
                    <div className='medidor'>
                        <img src={rate} alt="speedometer" />
                        <p>40%</p>
                    </div>
                </div>
                <div className='container-cuadro'>
                    <p>Lead</p>
                    <p>Conversion Rate</p>
                    <div className='medidor'>
                        <img src={rate} alt="speedometer" />
                        <p>0.8%</p>
                    </div>
                </div>
            </div>
            <ButtonsBackNext url={"/3"}/>
        </div>
        <div className='container-rigth'>
            <img src={imagen} alt="Frame.png"/>
            
            <div className='circulo'>
                <p>Te puede ayudar a</p>
                <div className='container-circulo'>
                    <div className='circulo-left'>
                        <p><span>Aumentar tu Lead Conversion Rate</span> hasta un</p>
                        <p className='porcentaje'>100%</p>
                    </div>
                    <div className='circulo-rigth'>
                    <p><span>Disminuir tu Churn Rate</span> hasta un</p>
                        <p className='porcentaje'>50%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Step2