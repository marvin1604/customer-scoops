import React, {useContext} from 'react'
import "../styles/LeftStep1.css"
import ButtonsBackNext from "../components/ButtonsBackNext"
import datos from '../API/datos'
import { AppContext } from '../hooks/provider'
import { Link } from 'wouter'

const LeftStep1 = () => {
  const [state, setState] = useContext(AppContext)
  return (
    <div className='container-left'>
        <div className='container-titulo'>
          <h2 className='titulo-strong'>Ahora te vamos a sorprender...</h2>
          <h2>¿A cuál industria pertenece tu empresa?</h2>
        </div>
        <div className='container-buttons'>
            {
                datos.map(item=> (
                    <Link to="/2" onClick={()=> setState(item)}>
                      <button key={item.id}>{item.title}</button>
                    </Link>
                ))
            }
        </div>
        <ButtonsBackNext 
          urlBack={"/"} 
          urlNext={"/2"}
          message={"Siguiente"} 
          styles={"#1B0F26"} 
          colors={"white"} 
          ArrowTipe={"fa-solid fa-arrow-right"}
        />
      </div>
  )
}

export default LeftStep1