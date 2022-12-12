import React from 'react'
import { Link } from 'wouter'
import "../styles/ButtonArrowPurplue.css"

const ButtonArrowPurplue = ({urlNext,message}) => {
  return (
    <Link to={urlNext}>
    <button className='nextPurplue'>
      <p>{message}</p>
      <i className="fa-solid fa-arrow-right"></i>
    </button>
</Link>
  )
}

export default ButtonArrowPurplue