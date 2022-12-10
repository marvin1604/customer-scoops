import React from 'react'
import "../styles/ButtonsBackNext.css"
import Button from "../components/Button"
import {Link} from "wouter"
const ButtonsBackNext = ({urlBack, urlNext, message,styles, colors, ArrowTipe}) => {
  return (
    <div className='buttonsNext'>
        <Link to={urlBack}>
          <button className='back'>
          <i className="fa-solid fa-arrow-left"></i>
          </button>
        </Link>
        <Button urlNext={urlNext} message={message} styles={styles} colors={colors} ArrowTipe={ArrowTipe}/>
      </div>
  )
}

export default ButtonsBackNext