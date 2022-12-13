import React from 'react'
import { InlineWidget } from "react-calendly";
import "../styles/Calendly.css"

const Calendly = () => {
  return (
    <div className='container-calendary'>
      <InlineWidget
        url="https://calendly.com/walter-rodriguez-dev/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
        styles={{margin:"0", height:"450px", position: "relative"}}
      />
    </div>
  )
}

export default Calendly