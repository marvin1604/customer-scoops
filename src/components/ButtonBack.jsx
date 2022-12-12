import React from 'react'
import { Link } from 'wouter'
import "../styles/ButtonBack.css"

const ButtonBack = ({urlBack}) => {
  return (
    <Link to={urlBack}>
      <button className='back'>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
    </Link>
  )
}

export default ButtonBack