import React from 'react'
import "../styles/LeftStep1.css"
import ButtonsBackNext from "../components/ButtonsBackNext"
import datos from '../API/datos'

const LeftStep1 = () => {
  return (
    <div className='container-left'>
        <div className='container-titulo'>
          <h2 className='titulo-strong'>Ahora te vamos a sorprender...</h2>
          <h2>¿A cuál industria pertenece tu empresa?</h2>
        </div>
        <div className='container-buttons'>
            {
                datos.map(item=> (
                    <button>{item.title}</button>
                ))
            }
        </div>
        <ButtonsBackNext url={"/2"}/>
      </div>
  )
}

export default LeftStep1