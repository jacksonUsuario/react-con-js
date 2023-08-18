import React, { useState } from 'react'
import '../styles/gameplay.css'

function Gameplay() {
  return (
    <div className='gameplay'>
        <div className="container-cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Gameplay



function Card() {

  const [isFlipped, setFlipped] = useState(false)


  const handleCardClick = () =>{
    setFlipped(!isFlipped)
  }

  return(
    <figure className={`carta-padre ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div style={{
        width:"100%",
        height:"100%",
        backgroundColor: isFlipped ? "red":"blue"
      }}>{isFlipped? "Back" :"Front"} </div>
{/*       
      <div className="front">Front</div>
      <div className="back">Back</div> */}
    </figure>
  )
}
