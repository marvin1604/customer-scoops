import React from 'react'
import { Link } from 'wouter'
import "../styles/Button.css"
import Arrow from './Arrow'

const Button = ({urlNext,message, styles, colors, ArrowTipe}) => {
  return (
    <Link to={urlNext}>
        <button className='next' style={{background: styles,color:colors}}>
          <p>{message}</p>
          <Arrow ArrowTipe={ArrowTipe}/>
        </button>
    </Link>
  )
}

export default Button