import React from 'react'
import '../styles/Cards.css'

function Cads({title,description,image}) {
  return (
    <div className='Card'>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt="" />
    </div>
  )
}

export default Cads