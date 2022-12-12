import React from 'react'
import { Link } from 'wouter'
import "../styles/ButtonGreen.css"

const ButtonGreen = ({urlNext,message}) => {
  return (
    <Link to={urlNext}>
        <button className='confirm'>
          <p>{message}</p>
        </button>
    </Link>
  )
}

export default ButtonGreen