import React, { useState } from "react";
import "../styles/gameplay.css";

function Gameplay() {
  const [isClickCard, setClickCard] = useState("");
  const [isClickCardTwo, setClickCardTwo] = useState("");

  function validedCard(id, index) {
    if (isClickCard == "") {
      setClickCard(id);
    } else if (isClickCard != "" && isClickCard === id ) {
      if (id == isClickCard) {
        alert('carta correcta')
        let copyLisCard = [...isClickCard];
        const listValid = lisCard.map((cards) => {
          if (cards.id === id) {
            return {
              ...cards,
              isfind: true,
            };
          }
          return  cards
        }
        );
        console.log(listValid);
        setLisCard([...listValid])
        setClickCard("");
        /* [{
        "id": "uno",
        "src": "sa",
        "alt": "uno",
        "isfind": false }, 
        {
        "id": "uno",
        "src": "sa",
        "alt": "uno",
        "isfind": false
    }
]
        */
      }
    }else{
      alert('incorrecta')
      console.log("fallo");
      setClickCard("")
    }
  }


  // let carta1 = null;
  // let carta2 = null;
  // let cartasDestapadas = 0;
  // function validedCard(params) {

  //   cartasDestapadas++;

  //   if (cartasDestapadas === 1) {
  //     carta1 = lisCard;
  //   }else if(cartasDestapadas ===2){
  //     carta2 = lisCard;
  //   }
  // }

  const [lisCard, setLisCard] = useState([
    {
      id: "uno",
      src: new URL("../assets/img/cartas/eye.png", import.meta.url).toString(),
      alt: "uno",
      isfind: false,
    },
    {
      id: "uno",
      src: new URL("../assets/img/cartas/eye.png", import.meta.url).toString(),
      alt: "uno",
      isfind: false,
    },
    {
      id: "dos",
      src: new URL("../assets/img/cartas/eye.png", import.meta.url).toString(),
      alt: "dos",
      isfind: false,
    },
    {
      id: "dos",
      src: new URL("../assets/img/cartas/eye.png", import.meta.url).toString(),
      alt: "dos",
      isfind: false,
    },
    {
      id: "tres",
      src: new URL("../assets/img/cartas/eye.png", import.meta.url).toString(),
      alt: "tres",
      isfind: false,
    },
    {
      id: "tres",
      src: new URL("../assets/img/cartas/eye.png", import.meta.url).toString(),
      alt: "tres",
      isfind: false,
    },
    {
      id: "cuatro",
      src: new URL("../assets/img/cartas/eye.png", import.meta.url).toString(),
      alt: "cuatro",
      isfind: false,
    },
    {
      id: "cuatro",
      src: new URL("../assets/img/cartas/eye.png", import.meta.url).toString(),
      alt: "cuatro",
      isfind: false,
    },
    {
      id: "cinco",
      src: new URL("../assets/img/cartas/eye.png", import.meta.url).toString(),
      alt: "cinco",
      isfind: false,
    },
    {
      id: "cinco",
      src: new URL("../assets/img/cartas/eye.png", import.meta.url).toString(),
      alt: "cinco",
      isfind: false,
    },
    {
      id: "seis",
      src: new URL("../assets/img/cartas/eye.png", import.meta.url).toString(),
      alt: "seis",
      isfind: false,
    },
    {
      id: "seis",
      src: new URL("../assets/img/cartas/eye.png", import.meta.url).toString(),
      alt: "seis",
      isfind: false,
    },
  ]);

  // lisCard.forEach(card =>{
    
  // })

  return (
    <div className="gameplay">
      <div className="container-cards">
        {/* <Card/>
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
            <Card/> */}
        {lisCard.map((card, index) => {
          return (
            <Card
              card={card}
              index={index}
              key={index}
              validedCard={validedCard}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Gameplay;

function Card(props) {
  // console.log(props);
  const [isFlipped, setFlipped] = useState(false);
  // const [sepuese, setSepuede] = useState(false)

  const handleCardClick = () => {
    !props.card.isfind && setFlipped(!isFlipped);
  };

  return (
    <figure
      className={`carta-padre ${isFlipped ? "flipped" : ""}`}
      onClick={() => {
        
        props.validedCard(props.card.id, props.index);
      }}
    >
      <div className="front" onClick={()=>{
        handleCardClick();
      }}>{props.card.isfind? "Ya le diste":"No"} {props.index+1}</div>
      <div className="back"> 
        <img src={props.card.src} alt={props.card.alt} />
      </div>
    </figure>
  );
}


// {props.card.isfind ? "Ya le diste":"no"} {props.index+1} 