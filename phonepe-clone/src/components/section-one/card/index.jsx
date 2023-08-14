import React from 'react'
import "./style.css"

const Card = ({image,heading,para}) => {
  return (
    <div className="card-main" style={{ backgroundImage: `url(${image})` }}>
      <h1>{heading}</h1>
      <p>{para}</p>
      <div>
        <span class="arrow ">→</span>
      </div>
    </div>
  );
}

export default Card