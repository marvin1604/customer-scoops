import React from 'react'
import "../styles/Flotantes.css"

import flotante1 from  "../assets/step2/Ellipse_2_1_.png"
import flotante2 from "../assets/step2/Ellipse_3_4_.png"
import flotante3 from "../assets/step2/Vector.png"
import flotante4 from "../assets/step2/Group.png"
import flotante5 from "../assets/step2/Path_28_1_.png"

const Flotantes = () => {
  return (
    <div>
        <img src={flotante1} alt="flotante1" className='flotante flotante1 '/>
        <img src={flotante2} alt="flotante2" className='flotante flotante2'/>
        <img src={flotante3} alt="flotante3" className='flotante flotante3'/>
        <img src={flotante4} alt="flotante4" className='flotante flotante4'/>
        <img src={flotante5} alt="flotante5" className='flotante flotante5'/>
    </div>
  )
}

export default Flotantes