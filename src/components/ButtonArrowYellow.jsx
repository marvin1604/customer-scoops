import React from 'react'
import { Link } from 'wouter'
import "../styles/ButtonArrowYellow.css"

const ButtonArrowYellow = ({urlNext,message, styles, colors}) => {
  return (
    <Link to={urlNext}>
    <button className='nextYellow' style={{background: styles,color:colors}}>
      <p>{message}</p>
      <i className="fa-solid fa-arrow-right"></i>
    </button>
</Link>
  )
}

export default ButtonArrowYellow