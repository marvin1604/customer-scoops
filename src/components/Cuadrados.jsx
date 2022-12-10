import React from 'react'
import "../styles/Cuadrados.css"
import rate from "../assets/step2/speedometer.png"

const Cuadrados = () => {
  return (
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
  )
}

export default Cuadrados