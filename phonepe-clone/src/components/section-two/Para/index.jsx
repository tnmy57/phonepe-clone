import React from 'react'
import "./style.css"

const Para = ({heading,para}) => {
  return (
    <div>
        <h1>{heading}</h1>
        <p>{para}</p>
    </div>
  )
}

export default Para