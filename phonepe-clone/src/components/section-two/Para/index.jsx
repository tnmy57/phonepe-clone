import React from 'react'
import "./style.css"

const Para = ({spanClass,heading,para}) => {
  return (
    <div>
        <h1>{heading}</h1>
        <p>{para}</p>
        <span className={spanClass}></span>
    </div>
  )
}

export default Para