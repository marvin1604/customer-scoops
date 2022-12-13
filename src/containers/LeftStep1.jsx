import React, {useContext, useEffect, useState} from 'react'
import { AppContext } from '../hooks/provider'
import { Link } from 'wouter'

import "../styles/LeftStep1.css"

import ButtonBack from "../components/ButtonBack"
import ButtonArrowPurplue from '../components/ButtonArrowPurplue'
import { getIndustrias } from '../hooks/getIndustrias'


const LeftStep1 = () => {
  const {setState} = useContext(AppContext);
  const [industrias, setIndustrias] = useState([]);
  
  useEffect(()=>{
    getIndustrias().then((data) => setIndustrias(data));
  })

  return (
    <div className='container-left'>
        <div className='container-titulo'>
          <h2 className='titulo-strong'>Ahora te vamos a sorprender...</h2>
          <h2 className='text-movil'>¿A cuál industria pertenece tu empresa?</h2>
        </div>
        <div className='container-buttons'>
            {
              industrias.map(item=> (
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