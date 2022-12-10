import React from 'react'
import "../styles/ButtonsBackNext.css"
import {Link} from "wouter"
const ButtonsBackNext = ({url}) => {
  return (
    <div className='buttonsNext'>
        <Link to="/">
          <button className='back'>
          <i class="fa-solid fa-arrow-left"></i>
          </button>
        </Link>
        <Link to={url}>
          <button className='next'>
            <p>Siguiente</p>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>
  )
}

export default ButtonsBackNext