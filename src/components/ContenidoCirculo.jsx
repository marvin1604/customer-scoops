import React from 'react'
import "../styles/ContenidoCirculo.css"

const ContenidoCirculo = () => {
  return (
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
  )
}

export default ContenidoCirculo