import React, { useContext } from 'react'
import "../styles/Cuadrados.css"
import rate from "../assets/step2/speedometer.png"
import { AppContext } from '../hooks/provider'

const Cuadrados = () => {
    const [state,setState] = useContext(AppContext)
  return (
    <div className='container-cuadros'>
        <div className='container-cuadro'>
            <p>Churn Rate</p>
            <p>2022</p>
            <div className='medidor'>
                <img src={rate} alt="speedometer" />
                <p>{state.rate}</p>
            </div>
        </div>
        <div className='container-cuadro'>
            <p>Lead</p>
            <p>Conversion Rate</p>
            <div className='medidor'>
                <img src={rate} alt="speedometer" />
                <p>{state.lead}</p>
            </div>
        </div>
    </div>
  )
}

export default Cuadrados