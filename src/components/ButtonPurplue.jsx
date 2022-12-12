import React from 'react'
import { Link } from 'wouter'
import "../styles/ButtonPurplue.css"

const ButtonPurplue = ({urlNext,message}) => {
  return (
    <Link to={urlNext}>
        <button className='finalizar'>
          <p>{message}</p>
        </button>
    </Link>
  )
}

export default ButtonPurplue