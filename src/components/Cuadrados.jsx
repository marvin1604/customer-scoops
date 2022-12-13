import React, { useContext } from 'react'
import "../styles/Cuadrados.css"
import rate from "../assets/step2/speedometer.png"
import { AppContext } from '../hooks/provider'

const Cuadrados = () => {
    const {state} = useContext(AppContext)
  return (
    <div className='container-cuadros'>
        <div className='container-cuadro'>
            <p>Churn Rate</p>
            <p>2022</p>
            <div className='medidor'>
                <img src={rate} alt="speedometer" />
                {
                  (state.rate)? <p>{state.rate}</p> : <p>88%</p> 
                }
            </div>
        </div>
        <div className='container-cuadro'>
            <p>Lead</p>
            <p>Conversion Rate</p>
            <div className='medidor'>
                <img src={rate} alt="speedometer" />
                {
                  (state.lead)? <p>{state.lead}</p> : <p>0.7%</p> 
                }
            </div>
        </div>
    </div>
  )
}

export default Cuadrados