import React, {useContext} from 'react'
import "../styles/LeftStep1.css"
import ButtonBack from "../components/ButtonBack"
import ButtonArrowPurplue from '../components/ButtonArrowPurplue'
import datos from '../API/datosE'
import { AppContext } from '../hooks/provider'
import { Link } from 'wouter'

const LeftStep1 = () => {
  const [state, setState] = useContext(AppContext)
  return (
    <div className='container-left'>
        <div className='container-titulo'>
          <h2 className='titulo-strong'>Ahora te vamos a sorprender...</h2>
          <h2 className='text-movil'>¿A cuál industria pertenece tu empresa?</h2>
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
        <div className='buttonsNext'>
          <ButtonBack urlBack={"/"}/>
          <ButtonArrowPurplue urlNext={"/2"} message={"Siguiente"}/>
        </div>
      </div>
  )
}

export default LeftStep1